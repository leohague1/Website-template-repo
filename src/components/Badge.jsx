const variants = {
  default: 'bg-gray-100 text-gray-700',
  primary: 'bg-[--color-primary]/10 text-[--color-primary]',
  success: 'bg-[--color-success-bg] text-[--color-success]',
  warning: 'bg-[--color-warning-bg] text-[--color-warning]',
  error:   'bg-[--color-error-bg] text-[--color-error]',
  info:    'bg-[--color-info-bg] text-[--color-info]',
}

export function Badge({ children, variant = 'default', className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
