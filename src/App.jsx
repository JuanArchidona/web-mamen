import Header from './components/Header'
import Hero from './components/Hero'
import TrustBanner from './components/TrustBanner'
import Services from './components/Services'
import AboutSection from './components/AboutSection'
import Testimonials from './components/Testimonials'
import CtaFooter from './components/CtaFooter'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

const WA_LINK = 'https://wa.me/34656320303'

function App() {
    return (
        <>
            <Header waLink={WA_LINK} />
            <main>
                <Hero waLink={WA_LINK} />
                <TrustBanner />
                <Services />
                <AboutSection />
                <Testimonials />
                <CtaFooter waLink={WA_LINK} />
            </main>
            <Footer />
            <WhatsAppFloat waLink={WA_LINK} />
        </>
    )
}

export default App
