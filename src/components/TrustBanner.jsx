import './TrustBanner.css'

const items = [
    { icon: 'fas fa-user-shield', text: '100% Confidencial y Privado' },
    { icon: 'fas fa-hand-holding-heart', text: 'Atención Directa con Carmen' },
    { icon: 'fas fa-stopwatch', text: 'Controlas el tiempo y el gasto' },
    { icon: 'fas fa-ban', text: 'Sin intermediarios ni gabinetes' },
]

export default function TrustBanner() {
    return (
        <div className="trust-banner">
            <div className="container trust-grid">
                {items.map((item, i) => (
                    <div className="trust-item" key={i}>
                        <i className={item.icon} />
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
