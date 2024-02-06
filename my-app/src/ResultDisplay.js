// This component will display the calculated monthly payment and total interest
 import React from 'react';

 const ResultDisplay = ({ results }) => {
    if(!results) {
        return <p>Please enter loan details and submit the form. </p>;
    }

    const {monthlyPayment, totalInterest} = results;

    return(
        <div className='result-display'>
            <p>Monthly Payment: ${monthlyPayment.toFixed(2)}</p>
            <p>Total Interest Paid: ${totalInterest.toFixed(2)}</p>
        </div>
    );
 };
 export default ResultDisplay;