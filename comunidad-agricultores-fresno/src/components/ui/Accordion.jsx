import { useState } from 'react'
import {motion as Motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { clsx } from 'clsx'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
          <Motion.button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className={clsx(
              'w-full px-6 py-4 flex items-center justify-between text-left hover:bg-cream/50 transition-colors',
              openIndex === index && 'bg-primary/5'
            )}
          >
            <span className="font-semibold text-coffee">{item.question}</span>
            <Motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-primary" />
              ) : (
                <ChevronDown className="w-5 h-5 text-coffee" />
              )}
            </Motion.div>
          </Motion.button>

          <AnimatePresence>
            {openIndex === index && (
              <Motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 pt-0">
                  <p className="text-coffee/70 leading-relaxed">{item.answer}</p>
                </div>
              </Motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
