import { useEffect, useMemo, useState } from 'react'

import type { ThemeMode } from '../types'

const STORAGE_KEY = 'theme-mode'

const getSystemTheme = (): Exclude<ThemeMode, 'system'> =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const isThemeMode = (value: string | null | undefined): value is ThemeMode =>
  value === 'light' || value === 'dark' || value === 'system'

const resolveTheme = (mode: ThemeMode): Exclude<ThemeMode, 'system'> =>
  mode === 'system' ? getSystemTheme() : mode

const applyTheme = (mode: ThemeMode) => {
  const root = document.documentElement
  root.dataset.themeMode = mode
  root.dataset.theme = resolveTheme(mode)
}

const getInitialMode = (): ThemeMode => {
  if (typeof document === 'undefined') {
    return 'system'
  }

  const fromDocument = document.documentElement.dataset.themeMode
  if (isThemeMode(fromDocument)) {
    return fromDocument
  }

  try {
    const storedMode = localStorage.getItem(STORAGE_KEY)
    if (isThemeMode(storedMode)) {
      return storedMode
    }
  } catch {
    return 'system'
  }

  return 'system'
}

export const useTheme = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialMode)

  useEffect(() => {
    applyTheme(themeMode)

    try {
      localStorage.setItem(STORAGE_KEY, themeMode)
    } catch {
      // Ignore storage failures and keep the in-memory preference.
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (themeMode === 'system') {
        applyTheme('system')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [themeMode])

  const resolvedTheme = useMemo(() => resolveTheme(themeMode), [themeMode])

  return {
    themeMode,
    resolvedTheme,
    setThemeMode,
  }
}
