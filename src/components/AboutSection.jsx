import './AboutSection.css'

const highlights = [
    {
        title: 'Sin intermediarios',
        desc: 'Nadie más escucha tus problemas. Solo Carmen.',
    },
    {
        title: 'Transparencia total',
        desc: 'Cobro exacto por tarjeta o Bizum. Sin sorpresas ni cargos ocultos.',
    },
    {
        title: 'A tu ritmo',
        desc: 'Disponible por nota de voz WhatsApp. Cuéntame tu situación en privacidad.',
    },
]

export default function AboutSection() {
    return (
        <section className="section-padding about-section" id="sobre-mi">
            <div className="container about-split">
                <div className="about-text">
                    <span className="about-eyebrow">¿Por qué conmigo?</span>
                    <h2>Más que una lectura,<br /><em>una guía amiga</em></h2>
                    <p className="about-intro">
                        Soy Carmen, profesional autónoma en España. Mi objetivo es alejarme del cliché
                        del tarot oscuro y los gabinetes impersonales. Aquí hablas{' '}
                        <strong>directamente conmigo</strong>.
                    </p>
                    <ul className="highlight-list">
                        {highlights.map((h, i) => (
                            <li key={i} className="highlight-item">
                                <span className="highlight-icon">
                                    <i className="fas fa-check" />
                                </span>
                                <div>
                                    <strong>{h.title}</strong>
                                    <p>{h.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="about-image-wrapper">
                    <img
                        src="/images/Gemini_Generated_Image_k3uefsk3uefsk3ue (1).png"
                        alt="Carmen - Tarot y Conexión Sensorial"
                        className="about-img"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    )
}
