import { motion as Motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { clsx } from 'clsx'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className,
  ...props
}) {
  const baseClasses = 'btn font-semibold transition-all duration-300'

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:-translate-y-1',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark hover:shadow-lg hover:-translate-y-1',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-12 py-4 text-lg'
  }

  return (
    <Motion.button
      whileHover={{ 
        scale: loading || disabled ? 1 : 1.05,
        boxShadow: loading || disabled ? 'none' : '0 10px 30px rgba(27, 67, 50, 0.3)'
      }}
      whileTap={{ scale: loading || disabled ? 1 : 0.95 }}
      disabled={disabled || loading}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        className
      )}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <Motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 />
          </Motion.div>
          <span>Procesando...</span>
        </span>
      ) : (
        <Motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </Motion.span>
      )}
    </Motion.button>
  )
}
