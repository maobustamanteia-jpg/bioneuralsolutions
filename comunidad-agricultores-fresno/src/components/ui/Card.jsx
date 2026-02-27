import { motion as Motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { clsx } from 'clsx'

export default function Card({
  children,
  className,
  hover = true,
  onClick,
  ...props
}) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { 
        y: -8, 
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
      } : {}}
      className={clsx(
        'card bg-white rounded-2xl p-6 relative overflow-hidden',
        hover && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {/* Animated hover gradient overlay */}
      {hover && (
        <Motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 pointer-events-none"
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Arrow indicator (only on hover) */}
      {hover && (
        <Motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-6 top-6 text-primary"
        >
          <Motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowUpRight className="w-5 h-5" />
          </Motion.div>
        </Motion.div>
      )}
    </Motion.div>
  )
}
