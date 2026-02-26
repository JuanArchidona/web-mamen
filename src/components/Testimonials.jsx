import './Testimonials.css'

const reviews = [
    {
        text: '"La conexión que tiene Carmen es increíble, me transmitió una paz inmensa y todo lo que vio se ha ido cumpliendo. Recomiendo el servicio de notas de voz."',
        client: 'Laura G.',
        location: 'Madrid',
        stars: 5,
    },
    {
        text: '"Transparencia desde el minuto uno. Te cobra exactamente lo que hablas. Sus lecturas de tarot son directas y muy certeras. La recomiendo sin dudarlo."',
        client: 'Carlos M.',
        location: 'Valencia',
        stars: 5,
    },
    {
        text: '"Llamé por dudas en mi relación y la empatía con la que me trató me ayudó a ver las cosas claras. Es mi guía de confianza desde entonces."',
        client: 'Elena R.',
        location: 'Sevilla',
        stars: 5,
    },
]

function Stars({ count }) {
    return (
        <div className="stars">
            {Array.from({ length: count }).map((_, i) => (
                <i className="fas fa-star" key={i} />
            ))}
        </div>
    )
}

export default function Testimonials() {
    return (
        <section className="section-padding testimonials" id="testimonios">
            <div className="container">
                <h2 className="section-title">Voces Reales</h2>
                <p className="section-subtitle">La confianza se construye con resultados y honestidad.</p>

                <div className="review-grid">
                    {reviews.map((r, i) => (
                        <div className="review-card" key={i}>
                            <Stars count={r.stars} />
                            <p className="review-text">{r.text}</p>
                            <div className="review-author">
                                <div className="review-avatar">
                                    {r.client.split(' ')[0][0]}
                                </div>
                                <div>
                                    <strong className="client">{r.client}</strong>
                                    <span className="location">
                                        <i className="fas fa-map-marker-alt" /> {r.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
