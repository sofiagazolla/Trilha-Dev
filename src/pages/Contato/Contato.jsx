import { useState } from 'react';
import './Contato.css';
 
function Contato() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
 
    /* isso é padrão p validar email*/
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim())  {
            newErrors.name = 'Por favor insira o seu nome';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Esse nome me parece curto demais, você pode escrever seu nome completo?'
        }

        if (!formData.email.trim())  {
            newErrors.email = 'Qual e-mail podemos usar pra falar com você?';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Esse e-mail não é válido. Confere se você digitou ele certinho?'
        }
        
         if (!formData.message.trim()) {
            newErrors.message = 'Conta pra gente como podemos te ajudar';
        } else if (formData.message.trim().length < 5) {
            newErrors.message = 'Sua mensagem está curtinha demais. Pode escrever pelo menos 5 caracteres pra gente conversar melhor?';
        }

        return newErrors;

    }       

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            setErrors (formErrors);
            return;
        }

        setIsSubmitting(true);
        setErrors({});
        setSubmitStatus('');

        try {
            /* aqui que vai implementar a chamada de API */
            console.log('Sending form data:', formData);

            // por enquanto simulamos :)
            await new Promise(resolve => setTimeout(resolve,2000))

            setSubmitStatus('success');

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

  return (
    <div className="contact-container">

        {submitStatus === 'success' && (
            <div className="success-message">
            Obrigada! Recebemos sua mensagem e a equipe Blossom entrará em contato com você em breve!
            </div>
        )}
        
        {submitStatus === 'error' && (
            <div className="error-message">
                Desculpa, algo não deu certo :( <br />
                Tenta enviar sua mensagem novamente? <br />
                Queremos ouvir vocẽ          
            </div>
        )}

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <h2> Entre em contato conosco! </h2>
               <div className='form-group'>
                <label htmlFor="name">🌸 Nome *</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    // required
                    placeholder="Digite seu nome"
                    className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                </div> 

                <div className="form-group">
                    <label htmlFor="email">🌸 E-mail *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        // required
                        placeholder="Digite seu melhor e-mail"
                        className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="message">🌸 Mensagem *</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        // required
                        rows="6"
                        placeholder="Digite a sua mensagem para a nossa equipe aqui :)"
                        className={errors.message ? 'error' : ''}
                    />
                    {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button type='submit' className='submit-button' disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando' : 'Enviar'}
                </button>
            </form>
    </div>
  );
}
 
export default Contato;
