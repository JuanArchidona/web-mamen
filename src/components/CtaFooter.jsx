import './CtaFooter.css'

export default function CtaFooter({ waLink }) {
    return (
        <section className="cta-footer" id="contacto">
            <div className="cta-overlay" />
            <div className="container cta-content">
                <span className="cta-eyebrow">
                    <i className="fas fa-sparkles" /> Da el primer paso
                </span>
                <h2>No dejes que la incertidumbre<br />te quite la paz</h2>
                <p>Escríbeme ahora y hablemos. Sin compromiso inicial.</p>
                <a href={waLink} className="btn-main cta-btn" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp" /> Hablar con Carmen
                </a>
                <div className="cta-meta">
                    <span><i className="fas fa-clock" /> Respuesta rápida en horario de atención</span>
                    <span><i className="fas fa-lock" /> Totalmente confidencial</span>
                </div>
            </div>
        </section>
    )
}
