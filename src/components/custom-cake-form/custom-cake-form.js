import './custom-cake-form.css';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone_number: Yup.string().required('Phone Number is required'),
    event_date: Yup.date().required('Event Date is required'),
    event_time: Yup.string().required('Time of Event is required'),
    event_type: Yup.string().required('Event Type is required'),
    cake_size: Yup.string().required('Cake Size is required'),
    cake_flavour: Yup.string().required('Cake Flavour is required'),
    frosting: Yup.string().required('Frosting/Filling is required'),
    dietary_restrictions: Yup.string().optional(),
    theme: Yup.string().optional(),
    decorations: Yup.string().optional(),
    special_messages: Yup.string().optional(),
    order_type: Yup.string().required('Order Type is required'),
    delivery_address: Yup.string().optional(),
    pickup_address: Yup.string().optional(),
    special_considerations: Yup.string().optional(),
    additional_notes: Yup.string().optional(),
});

function CustomCakeForm() {
    const [formIndex, setFormIndex] = useState(1);
    const [delivery, setDelivery] = useState(false);
    const [pickup, setPickup] = useState(false);

    const handlePickupClick = () => {
        setDelivery(false);
        setPickup(true);
    }
    const handleDeliveryClick = () => {
        setDelivery(true);
        setPickup(false);
    }

    return (
        <div>
            <h2>Custom Cake Form</h2>
            <span>Interested in a Custom Cake? Fill out this form for your free quote!</span>
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    event_date: '',
                    event_time: '',
                    event_type: '',
                    cake_size: '',
                    cake_flavour: '',
                    frosting: '',
                    dietary_restrictions: '',
                    theme: '',
                    decorations: '',
                    special_messages: '',
                    order_type: '',
                    delivery_address: '',
                    pickup_address: '',
                    special_considerations: '',
                    additional_notes: '',
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        const response = await axios.post('http://127.0.0.1:8000/form/custom-cake-form', values);
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
                        <div className='custom-cake-form-container'>
                            {formIndex === 1 && (
                                <div className='contact-container'>
                                    <h3>General Contact 1/5</h3>
                                    <label htmlFor="first_name">First Name</label>
                                    <Field type='text' name='first_name' />
                                    <ErrorMessage name='first_name' component="div" className="error" />
                                    <label htmlFor="last_name">Last Name</label>
                                    <Field type='text' name='last_name' />
                                    <ErrorMessage name='last_name' component="div" className="error" />
                                    <label htmlFor="email">Email Address</label>
                                    <Field type='email' name='email' />
                                    <ErrorMessage name='email' component="div" className="error" />
                                    <label htmlFor="phone_number">Phone Number</label>
                                    <Field type='tel' name='phone_number' />
                                    <ErrorMessage name='phone_number' component="div" className="error" />
                                </div>
                            )}
                            {formIndex === 2 && (
                                <div className='event-container'>
                                    <h3>Event Details 2/5</h3>
                                    <label htmlFor="event_date">Event Date</label>
                                    <Field type='date' name='event_date' />
                                    <ErrorMessage name='event_date' component="div" className="error" />
                                    <label htmlFor="event_time">Time of Event</label>
                                    <Field type='text' name='event_time' />
                                    <ErrorMessage name='event_time' component="div" className="error" />
                                    <label htmlFor="event_type">Type of Event</label>
                                    <Field type='text' name='event_type' />
                                    <ErrorMessage name='event_type' component="div" className="error" />
                                </div>
                            )}
                            {formIndex === 3 && (
                                <div className='cake-details-container'>
                                    <h3>Cake Details 3/5</h3>
                                    <label htmlFor="cake_size">Cake Size</label>
                                    <Field type='text' name='cake_size' />
                                    <ErrorMessage name='cake_size' component="div" className="error" />
                                    <label htmlFor="cake_flavour">Cake Flavour</label>
                                    <Field type='text' name='cake_flavour' />
                                    <ErrorMessage name='cake_flavour' component="div" className="error" />
                                    <label htmlFor="frosting">Frosting/Filling</label>
                                    <Field type='text' name='frosting' />
                                    <ErrorMessage name='frosting' component="div" className="error" />
                                    <label htmlFor="dietary_restrictions">Dietary Preferences</label>
                                    <Field type='text' name='dietary_restrictions' />
                                    <ErrorMessage name='dietary_restrictions' component="div" className="error" />
                                </div>
                            )}
                            {formIndex === 4 && (
                                <div className='design-container'>
                                    <h3>Design Preferences 4/5</h3>
                                    <label htmlFor="theme">Theme/Colour Scheme</label>
                                    <Field type='text' name='theme' />
                                    <ErrorMessage name='theme' component="div" className="error" />
                                    <label htmlFor="decorations">Decorations</label>
                                    <Field type='text' name='decorations' />
                                    <ErrorMessage name='decorations' component="div" className="error" />
                                    <label htmlFor="special_messages">Special Messages</label>
                                    <Field type='text' name='special_messages' />
                                    <ErrorMessage name='special_messages' component="div" className="error" />
                                </div>
                            )}
                            {formIndex === 5 && (
                                <div className='delivery-pickup-container'>
                                    <h3>Delivery/Pickup Information 5/5</h3>
                                    <Field type="radio" id="delivery" name="order_type" value="delivery" onClick={handleDeliveryClick} />
                                    <label htmlFor="delivery">Delivery</label><br />
                                    <Field type="radio" id="pickup" name="order_type" value="pickup" onClick={handlePickupClick} />
                                    <label htmlFor="pickup">Pickup</label><br />
                                    {delivery && <>
                                        <label htmlFor="delivery_address">Delivery Address</label>
                                        <Field type='text' name='delivery_address' />
                                        <ErrorMessage name='delivery_address' component="div" className="error" />
                                    </>}
                                    {pickup && <>
                                        <label htmlFor="pickup_address">Pickup Address</label>
                                        <Field type='text' name='pickup_address' />
                                        <ErrorMessage name='pickup_address' component="div" className="error" />
                                    </>}
                                    <label htmlFor="special_considerations">Special Considerations</label>
                                    <Field type='text' name='special_considerations' />
                                    <ErrorMessage name='special_considerations' component="div" className="error" />
                                </div>
                            )}
                            {formIndex === 6 && (
                                <div>
                                    <label htmlFor="additional_notes">Additional Notes/Comments</label>
                                    <Field type='text' name='additional_notes' />
                                    <ErrorMessage name='additional_notes' component="div" className="error" />
                                </div>
                            )}
                            <br />
                            <button className='button' type='button' onClick={() => setFormIndex(formIndex === 1 ? 1 : formIndex - 1)}>&larr;</button>
                            <button className='button' type='button' onClick={() => setFormIndex(formIndex === 6 ? 6 : formIndex + 1)}>&rarr;</button>
                            {formIndex === 6 && <button type="submit">Submit</button>}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default CustomCakeForm;
