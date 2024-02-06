//This component will hold the inout fields for loan amount, interest rate, and term
import React, {useState} from 'react';

const LoanForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState ({
        amount: '',
        interestRate: '',
        term: '',
    });

    const handleChange = (event) =>{
        setFormData({ ...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault(); //Prevent default form submission behaviour;
        onSubmit(formData); // Pass form data to parent component
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='amount'>Loan amount: </label>
                <input 
                type = "number"
                id = 'amount'
                name = 'amount'
                value = {formData.amount}
                onChange={handleChange}
                required
                min= "0"
                step = "0.01"
                placeholder='Enter loan amount'>
                </input>
            </div>
            <br></br>
            <div>
                <label htmlFor='interestRate'>Interest rate (%): </label>
                <input 
                type="number"
                id = "interestRate"
                name = "interestRate"
                value = {formData.interestRate}
                onChange={handleChange}
                required
                min = "0"
                step = "0.01"
                placeholder='Enter interest rate'>
                </input>
            </div>
            <br></br>
            <div>
                <label htmlFor='term'>Term: </label>
                <select 
                id='term' 
                name='term' 
                value={formData.term} 
                type="number" 
                onChange={handleChange} 
                required 
                min="0" 
                step="0.02" 
                placeholder="Choose a loan term">
                    <option>2 years</option>
                    <option>5 years</option>
                    <option>10 years</option>
                    <option>15 years</option>
                    <option>20 years</option>
                    <option>25 years</option>
                    <option>30 years</option>
                </select>
            </div>
            <br></br>
            <button type='submit'>Calculate APR</button>
        </form>
    );
};

export default LoanForm;