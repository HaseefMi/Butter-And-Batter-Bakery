import './contact.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is Required'),
    email: Yup.string().email('Invalid Email Address').required('Email is Required'),
    phone_number: Yup.string().required('Phone Number is Required'),
    message: Yup.string().required('Message is Required'),
})

function Contact() {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>Questions? Concerns? Contact Us through the form below!</p>
            <br/>
            <Formik initialValues={{
                name: '',
                email: '',
                phone_number: '',
                message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    const response = await axios.post('http://127.0.0.1:8000/form/contact-form', values);
                    alert("Form Submitted");
                } catch (error) {
                    alert("Error Submitting Form:", error.response.data);
                } finally {
                    setSubmitting(false);
                }
            }}
        >
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <div className='contact-form-container'>
                        <label htmlFor='name'>Name</label>
                        <Field type='text' name='name' />
                        <ErrorMessage name='name' component="div" className='error' />

                        <label htmlFor='email'>Email</label>
                        <Field type='email' name='email' />
                        <ErrorMessage name='email' component="div" className='error' />

                        <label htmlFor='phone_number'>Phone Number</label>
                        <Field type='tel' name='phone_number' />
                        <ErrorMessage name='phone_number' component="div" className='error' />

                        <label htmlFor='message'>Message</label>
                        <Field type='text' name='message' />
                        <ErrorMessage name='message' component="div" className='error' />
                        <br />
                        <button type='submit'>Submit</button>
                    </div>
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default Contact;