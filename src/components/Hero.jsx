import './Hero.css'

export default function Hero({ waLink }) {
    return (
        <section className="hero" id="inicio">
            <div className="hero-overlay" />
            <div className="hero-content animate-up">
                <span className="hero-tag">
                    <i className="fas fa-moon" /> Sin Gabinetes · Trato Directo
                </span>
                <h1>
                    Encuentra la claridad<br />
                    <em>que necesitas hoy</em>
                </h1>
                <p className="hero-desc">
                    Tarot honesto y Conexión Sensorial. Respuestas directas y confidenciales
                    sobre amor, trabajo y familia.
                </p>
                <a href={waLink} className="btn-main" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp" /> Reservar Consulta
                </a>
                <div className="hero-badge">
                    <i className="fas fa-check-circle" style={{ color: '#4caf50' }} />
                    1€/minuto · Pago Seguro con Tarjeta o Bizum
                </div>
            </div>
            <div className="hero-scroll-hint">
                <i className="fas fa-chevron-down" />
            </div>
        </section>
    )
}
