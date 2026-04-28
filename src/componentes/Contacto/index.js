import React, { useState } from 'react';

export const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El email no es válido';
        }
        if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es requerido';

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Aquí iría la lógica para enviar el formulario (API call, etc.)
        console.log('Formulario enviado:', formData);
        setSubmitted(true);

        setFormData({
            nombre: '',
            email: '',
            telefono: '',
            mensaje: ''
        });
        setErrors({});
    };

    if (submitted) {
        return (
            <div className="contacto-container">
                <div className="contacto-success">
                    <h2>¡Mensaje enviado!</h2>
                    <p>Gracias por contactarnos. Te responderemos lo antes posible.</p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="btn-volver"
                    >
                        Enviar otro mensaje
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="contacto-container">
            <div className="contacto-header">
                <h1>Contáctanos</h1>
                <p>¿Tienes alguna pregunta o comentario? ¡Estamos aquí para ayudarte!</p>
            </div>

            <div className="contacto-content">
                <div className="contacto-info">
                    <div className="info-item">
                        <h3>📍 Dirección</h3>
                        <p>Av. Principal 123, Ciudad, País</p>
                    </div>
                    <div className="info-item">
                        <h3>📞 Teléfono</h3>
                        <p>+1 (555) 123-4567</p>
                    </div>
                    <div className="info-item">
                        <h3>✉️ Email</h3>
                        <p>info@shopshoes.com</p>
                    </div>
                    <div className="info-item">
                        <h3>🕒 Horario</h3>
                        <p>Lun - Vie: 9:00 - 18:00<br />Sáb: 10:00 - 16:00</p>
                    </div>
                </div>

                <form className="contacto-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre *</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className={errors.nombre ? 'error' : ''}
                            placeholder="Tu nombre completo"
                        />
                        {errors.nombre && <span className="error-message">{errors.nombre}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                            placeholder="tu@email.com"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="telefono">Teléfono</label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            placeholder="+1 (555) 123-4567"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mensaje">Mensaje *</label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            className={errors.mensaje ? 'error' : ''}
                            placeholder="Escribe tu mensaje aquí..."
                            rows="5"
                        ></textarea>
                        {errors.mensaje && <span className="error-message">{errors.mensaje}</span>}
                    </div>

                    <button type="submit" className="btn-submit">
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </div>
    );
};