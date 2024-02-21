import './App.css';
import React, {useEffect, useState} from 'react';
import LoanForm from './LoanForm';
import ResultDisplay from './ResultDisplay';
import axios from 'axios';

//data will be the string we send from our server
const apiCall = () => {
  axios.get('http://localhost:3000').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}

function App() {
  const [formData, setFormData] = useState({ amount: '', interestRate: '', term: ''});
  const [result, setResult] = useState(null);
  const handleFormSubmit = (data) => {
    console.log(data)
    fetch("http://localhost:3000/calculate-apr",{
       method: 'POST',
       body: JSON.stringify(data),
       headers: {
        'Content-Type': 'application/json'
        }
     })
      .then(response => response.json())
      .then(data => setResult(data))
      .then(data => {
      console.log(data);
      });
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>My header</p>
      </header>
      <h1>
        Loan Calculator
      </h1>
      <LoanForm onSubmit= {handleFormSubmit}/>
      {result && <ResultDisplay result = {result} />}
      <button onClick={apiCall}>Make API Call</button>
    </div>
  );
}

export default App;
