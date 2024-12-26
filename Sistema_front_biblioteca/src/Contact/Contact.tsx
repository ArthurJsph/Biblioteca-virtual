import React, { useState } from 'react';
import axios from 'axios';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios
            .post('http://localhost:8080/contato', formData)
            .then(() => {
                alert('Mensagem enviada com sucesso!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => console.error('Error sending message:', error));
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Contato</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ display: 'block', marginBottom: '10px' }}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ display: 'block', marginBottom: '10px' }}
                    />
                </div>
                <div>
                    <label>Mensagem:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contact;