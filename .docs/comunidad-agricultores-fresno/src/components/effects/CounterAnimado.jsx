import { useState, useEffect, useRef } from 'react'
import { motion as Motion } from 'framer-motion'

export default function CounterAnimado({
  end,
  duration = 2,
  suffix = '',
  prefix = ''
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime
      let animationFrame

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          cancelAnimationFrame(animationFrame)
        }
      }

      return () => {
        if (animationFrame) cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, end, duration])

  return (
    <div ref={ref} className="inline-block">
      <Motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: isInView ? 1 : 0.8, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="counter"
      >
        {prefix}{count.toLocaleString()}{suffix}
      </Motion.span>
    </div>
  )
}
}
