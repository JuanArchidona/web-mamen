import './WhatsAppFloat.css'

export default function WhatsAppFloat({ waLink }) {
    return (
        <a
            href={waLink}
            className="wa-float"
            title="Chatea con Carmen en WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <i className="fab fa-whatsapp" />
        </a>
    )
}
