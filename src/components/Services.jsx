import './Services.css'

const services = [
    {
        title: 'Lectura de Tarot',
        desc: 'A través de las cartas, desgranamos tu situación actual. Sin adornos oscuros, buscamos la luz en los caminos que se abren ante ti para que tomes la mejor decisión.',
        badges: ['Amor', 'Trabajo', 'Decisiones', 'Familia'],
        img: '/images/Gemini_Generated_Image_4hi2yh4hi2yh4hi2.png',
        alt: 'Lectura de Tarot con velas y cristales',
    },
    {
        title: 'Conexión Sensorial',
        desc: 'Una vía de percepción intuitiva profunda. Canalizo las respuestas que tu energía y tu entorno necesitan comunicarte, ideal si buscas algo más que una lectura tradicional.',
        badges: ['Intuición', 'Energía', 'Guía Espiritual', 'Autoconocimiento'],
        img: '/images/Gemini_Generated_Image_v8lb0ev8lb0ev8lb.png',
        alt: 'Conexión Sensorial',
    },
]

function ServiceCard({ service }) {
    return (
        <article className="service-card">
            {service.img ? (
                <div className="card-img-wrapper">
                    <img
                        src={service.img}
                        alt={service.alt}
                        className="card-img"
                        loading="lazy"
                    />
                </div>
            ) : (
                <div className="card-visual" style={{ background: service.gradient }}>
                    <div className="card-visual-glow" style={{ background: `radial-gradient(circle at 50% 60%, ${service.accentColor}33 0%, transparent 70%)` }} />
                    <div className="card-visual-icon">
                        <i className={service.icon} style={{ color: service.accentColor }} />
                    </div>
                    <div className="card-visual-stars">
                        {[...Array(6)].map((_, i) => (
                            <span key={i} className="card-star" style={{
                                left: `${15 + i * 14}%`,
                                top: `${20 + (i % 3) * 25}%`,
                                animationDelay: `${i * 0.4}s`,
                                color: service.accentColor,
                            }}>✦</span>
                        ))}
                    </div>
                    <div className="card-visual-lines">
                        <div className="card-line" />
                        <div className="card-line" />
                    </div>
                </div>
            )}
            <div className="card-body">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="topic-badges">
                    {service.badges.map((b) => (
                        <span className="badge" key={b}>{b}</span>
                    ))}
                </div>
            </div>
        </article>
    )
}

export default function Services() {
    return (
        <section className="section-padding services" id="servicios">
            <div className="container">
                <h2 className="section-title">Mis Servicios</h2>
                <p className="section-subtitle">
                    Dos caminos para encontrar tus respuestas, siempre con un enfoque de luz y esperanza.
                </p>
                <div className="service-card-wrapper">
                    {services.map((s) => (
                        <ServiceCard service={s} key={s.title} />
                    ))}
                </div>
            </div>
        </section>
    )
}
