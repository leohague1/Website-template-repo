export function Input({ label, error, hint, id, required, className = '', ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-[--color-error] ml-0.5">*</span>}
        </label>
      )}
      <input
        id={id}
        required={required}
        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400
          transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-primary]/40 focus:border-[--color-primary]
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error
            ? 'border-[--color-error] bg-[--color-error-bg]'
            : 'border-[--color-border] bg-white hover:border-gray-300'
          } ${className}`}
        {...props}
      />
      {hint && !error && <p className="text-xs text-[--color-muted]">{hint}</p>}
      {error && <p className="text-xs text-[--color-error]">{error}</p>}
    </div>
  )
}
