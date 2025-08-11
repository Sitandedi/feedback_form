import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

    const [formData, setFormData] = useState({name: '', email: '', feedback: '', rating: '1'});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = `Name: ${formData.name} Email: ${formData.email} Feedback: ${formData.feedback} Rating: ${formData.rating}`;
        const isConfirmed = window.confirm(`Please confirm your details: \n\n ${confirmationMessage}`)

        if (isConfirmed) {
            console.log('Submitting feedback:', formData);

            setFormData({name: '', email: '', feedback: '', rating: '1'});
            alert('Thank you for yur valuable feedback!')
        }
    }

    function handleClick() {
        const currentRating = Number(formData.rating);
        const nextRating = currentRating >= 5 ? 1 : currentRating + 1;
        setFormData({ ...formData, rating: String(nextRating) });
    }

    return (
        <>
        <nav>
            Tell Us What You Think
        </nav>
        <form className="feedback-form" onSubmit={handleSubmit}>
            <h2>We'd Love to Hear From You!</h2>

            <p>Please share your feedback with us.</p>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}/>
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange}/>
            <textarea name="feedback" placeholder="Your Feedback" value={formData.feedback} onChange={handleChange}></textarea>

            <p>Rating<input type="button" value={formData.rating} onClick={handleClick} style={{ width: 30, height: 30, fontSize: 16, cursor: 'pointer' }}/></p>


            <button type="submit">Submit Feedback</button>
            
        </form>
        </>
    );
};

export default FeedbackForm;
