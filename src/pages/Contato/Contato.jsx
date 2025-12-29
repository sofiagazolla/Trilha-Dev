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
 
    /* isso é padrão p validar email aparentemente */
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim())  {
            newErrors.name = 'O nome é necessário';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'O nome deve ter pelo menos dois caracteres'
        }

        if (!formData.email.trim())  {
            newErrors.email = 'O email é necessário';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Por favor insira um endereço de email válido'
        }
        
         if (!formData.message.trim()) {
            newErrors.message = 'A mensagem é necessária';
        } else if (formData.message.trim().length < 5) {
            newErrors.message = 'A mensagem deve ter pelo menos 5 caracteres';
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
            Obrigada! Recebemos sua mensagem e a equipe Blossom entrará em contato em breve!
            </div>
        )}
        
        {submitStatus === 'error' && (
            <div className="error-message">
            Desculpa, houve um erro no envio da sua mensagem. Por favor tente novamente.
            </div>
        )}

        {/* <h2> Entre em contato conosco! </h2> */}
            <form onSubmit={handleSubmit} className="contact-form">
                <h2> Entre em contato conosco! </h2>
               <div className='form-group'>
                <label htmlFor="name">Name *</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    // required
                    placeholder="Nome"
                    className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                </div> 

                <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        // required
                        placeholder="E-mail"
                        className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message *</label>
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

/* TODO
alterar as mensagens bemmmmmmm bonitinho
*/