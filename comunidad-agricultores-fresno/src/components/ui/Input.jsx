import { motion as Motion } from 'framer-motion'
import { AlertCircle, CheckCircle } from 'lucide-react'
import { clsx } from 'clsx'

export default function Input({
  label,
  error,
  success,
  className,
  ...props
}) {
  return (
    <div className={clsx('mb-4', className)}>
      {label && (
        <label className="form-label">{label}</label>
      )}

      <Motion.div
        whileFocus={{ scale: 1.01 }}
        className="relative"
      >
        <input
          className={clsx(
            'form-input',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            success && 'border-green-500 focus:border-green-500 focus:ring-green-500/20'
          )}
          {...props}
        />

        {error && (
          <Motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500"
          >
            <AlertCircle className="w-5 h-5" />
          </Motion.div>
        )}

        {success && (
          <Motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500"
          >
            <CheckCircle className="w-5 h-5" />
          </Motion.div>
        )}
      </Motion.div>

      {error && (
        <Motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-1 text-sm text-red-500"
        >
          {error}
        </Motion.p>
      )}
    </div>
  )
}
