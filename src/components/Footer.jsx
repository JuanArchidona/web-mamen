import './Footer.css'

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-cols">
                    {/* Company Info */}
                    <div className="footer-col">
                        <div className="footer-logo">La Luz de <span>Carmen</span></div>
                        <p>Servicio de Tarot y Conexión Sensorial gestionado por María del Carmen Serrano García.</p>
                        <div className="footer-contact">
                            <a href="https://wa.me/34656320303" className="footer-contact-item">
                                <i className="fab fa-whatsapp" /> 656 32 03 03
                            </a>
                            <a href="mailto:msgmamen1@gmail.com" className="footer-contact-item">
                                <i className="fas fa-envelope" /> msgmamen1@gmail.com
                            </a>
                            <span className="footer-contact-item">
                                <i className="fas fa-map-marker-alt" /> Torrejón de Velasco, España
                            </span>
                        </div>
                    </div>

                    {/* Schedule */}
                    <div className="footer-col">
                        <h4>Horario de Atención</h4>
                        <div className="schedule">
                            <div className="schedule-row">
                                <span>Lunes a Viernes</span>
                            </div>
                            <div className="schedule-row time">
                                <i className="fas fa-sun" /> 09:00 – 13:00
                            </div>
                            <div className="schedule-row time">
                                <i className="fas fa-moon" /> 17:00 – 20:00
                            </div>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="footer-col">
                        <h4>Información Legal</h4>
                        <details className="legal-details">
                            <summary>Política de Privacidad y RGPD</summary>
                            <div className="legal-content">
                                <strong>Responsable:</strong> María del Carmen Serrano García.<br />
                                <strong>Finalidad:</strong> Gestión de citas y cobros.<br />
                                <strong>Derechos:</strong> Acceso, rectificación y supresión.<br />
                                No almacenamos datos bancarios. TPV Seguro.
                            </div>
                        </details>
                        <details className="legal-details">
                            <summary>Condiciones y Pagos</summary>
                            <div className="legal-content">
                                <strong>Tarifa:</strong> 1€/minuto (IVA incluido).<br />
                                <strong>Duración:</strong> Mínimo 10 min (10€) / Máximo 30 min (30€).<br />
                                <strong>Edad:</strong> Exclusivo para mayores de 18 años.<br />
                                Pago por Bizum o Tarjeta antes o durante la consulta.
                            </div>
                        </details>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} La Luz de Carmen. Todos los derechos reservados.</span>
                    <span className="footer-disclaimer">
                        Servicio de entretenimiento. Los servicios de videncia no tienen carácter científico.
                    </span>
                </div>
            </div>
        </footer>
    )
}
