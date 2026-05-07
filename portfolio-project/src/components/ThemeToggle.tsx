import type { ThemeMode } from '../types'

interface ThemeToggleProps {
  value: ThemeMode
  onChange: (mode: ThemeMode) => void
}

const options: Array<{ label: string; value: ThemeMode }> = [
  { label: 'System', value: 'system' },
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
]

export const ThemeToggle = ({ value, onChange }: ThemeToggleProps) => {
  return (
    <div className="theme-toggle" role="group" aria-label="Color theme selector">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={option.value === value ? 'theme-toggle__button is-active' : 'theme-toggle__button'}
          aria-pressed={option.value === value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
