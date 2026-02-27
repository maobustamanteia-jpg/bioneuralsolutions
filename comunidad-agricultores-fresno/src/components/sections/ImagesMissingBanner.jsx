import { motion as Motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'

export default function ImagesMissingBanner() {
  return (
    <div className="bg-amber-100 border-l-4 border-amber-500 p-4 mx-4 mt-8 rounded-lg">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-amber-800 mb-1">Faltan las imágenes</p>
          <p className="text-sm text-amber-700">
            Estamos trabajando en agregar las imágenes reales. Por ahora verás imágenes temporales.
          </p>
        </div>
      </div>
    </div>
  )
}