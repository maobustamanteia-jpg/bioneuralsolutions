import SmoothScroll from './components/layout/SmoothScroll'
import Hero from './components/sections/Hero'
import HojaVisualComponent from './components/sections/HojaVisualComponent'
import CuentaRegresiva from './components/sections/CuentaRegresiva'
import Benefits from './components/sections/Benefits'
import GaleriaInteractiva from './components/sections/GaleriaInteractiva'
import CertificadoDigital from './components/sections/CertificadoDigital'
import RegistrationForm from './components/sections/RegistrationForm'
import FAQ from './components/sections/FAQ'
import Footer from './components/sections/Footer'

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Hero />
        <HojaVisualComponent />
        <CuentaRegresiva />
        <Benefits />
        <GaleriaInteractiva />
        <CertificadoDigital />
        <RegistrationForm />
        <FAQ />
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
