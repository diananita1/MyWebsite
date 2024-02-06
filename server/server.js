const express = require("express");
const bodyParser = require("body-parser"); //for parsing request body data

const app = express();
const port = 3000;

//Set error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({error: 'Internal server error' });
})

//Add middleware for body parseing
app.use(bodyParser.json()); //Parse incoming JSON datac

//Define the APR calculation logic
const calculateAPR = (amount, interestRate, term) => {
    //Implement the calculation logic here, considering:
    // - Compounding frequency (mountly, annually, etc.)
    // -Repayment method (simple interest, compound interest)
    // - Edge cases and error handling

    //This is a simplified example using mountly compounding and simple interest:
    const monthlyRate = interestRate /100 / 12;
    const numberOfPayments = term * 12;
    const monthlyPayment = amount / numberOfPayments;
    const totalInterestPaid = numberOfPayments * monthlyPayment - amount;
    return {monthlyPayment: monthlyPayment, totalInterest: totalInterestPaid};
}

app.post('/calculate-apr', (req,res) => {
    //Implement APR calculation logic using req.body data
    //Return calculate values as JSON (e.g., res.json({montlyPayment: ..., totalInterest:...}))
    try{
        const {amount, interestRate, term} = req.body;
        //Validate input data types and ranges
        if(!amount || !typeof(amount) !== 'number' || amount <= 0)
        {
            throw new Error('Invalid loan amount');
        }
        if(!interestRate || typeof(interestRate) !== 'number' || interestRate < 0)
        {
            throw new Error('Invalid interest rate');
        }
        if(!term || typeof(term) !== 'number' || term <= 0) {
            throw new Error('Invalid loan term');
        }

        //Perform calculation
        const results = calculateAPR(amount, interestRate, term);

        //Respond with JSON containing calculated values
        res.json(results);
    }catch(err){
        console.error(err);
        res.status(400).json({error: err.message}); // Send specific message to client
    }
});

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
});