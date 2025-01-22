import React, { useState } from 'react';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: ''
    });

    // const [errors, setErrors] = useState({
    //     name: '',
    //     email: '',
    //     age: ''
    // });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    //   const validateForm = () => {
    //     let formIsValid = true;
    //     let newErrors = { name: '', email: '', age: '' };

    //     if (!formData.name) {
    //       formIsValid = false;
    //       newErrors.name = 'Name is required';
    //     }

    //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!formData.email || !emailPattern.test(formData.email)) {
    //       formIsValid = false;
    //       newErrors.email = 'Invalid email format';
    //     }

    //     if (!formData.age || isNaN(formData.age)) {
    //       formIsValid = false;
    //       newErrors.age = 'Age must be a valid number';
    //     }

    //     setErrors(newErrors);
    //     return formIsValid;
    //   };

    const handleSubmit = (e) => {
        e.preventDefault();
        //using form5 validations
        // if (validateForm()) {
        //   alert('Form submitted successfully!');
        // } else {
        //   alert('Please fill the form correctly.');
        // }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Enter the form details:</h2>

            <label>
                Enter your name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                {/* {errors.name && <p>{errors.name}</p>} */}
            </label><br />

            <label>
                Enter your email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                {/* {errors.email && <p>{errors.email}</p>} */}
            </label><br />

            <label>
                Enter your age:
                <input type="number" name="age" value={formData.age} onChange={handleChange} required min="2" max="10" />
                {/* {errors.age && <p>{errors.age}</p>} */}
            </label><br />

            <button type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;
