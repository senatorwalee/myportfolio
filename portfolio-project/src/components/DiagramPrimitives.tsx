export const Icon = ({ id }: { id: string }) => (
  <svg className="arch-icon" aria-hidden="true" focusable="false">
    <use href={`/icons.svg#${id}`} />
  </svg>
)

type ArchNodeProps = {
  iconId: string
  title: string
  meta?: string
  db?: string
  variant?: 'default' | 'auth' | 'external'
}

export const ArchNode = ({ iconId, title, meta, db, variant = 'default' }: ArchNodeProps) => (
  <div className={`arch-node arch-node--${variant}`}>
    <div className="arch-node__head">
      <Icon id={iconId} />
      <div className="arch-node__copy">
        <strong>{title}</strong>
        {meta ? <span>{meta}</span> : null}
      </div>
    </div>
    {db ? (
      <span className="arch-node__db">
        <Icon id="mongodb-icon" />
        {db}
      </span>
    ) : null}
  </div>
)

export const ArchConnector = ({ label }: { label: string }) => (
  <div className="arch-connector">
    <span className="arch-connector__line" aria-hidden="true">
      <span className="arch-connector__pulse" aria-hidden="true" />
    </span>
    <span className="arch-connector__label">{label}</span>
  </div>
)
