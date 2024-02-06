import './App.css';
import React, {useState} from 'react';
import LoanForm from './LoanForm';
import ResultDisplay from './ResultDisplay';

function App() {
  const [formData, setFormData] = useState({ amount: '', interestRate: '', term: ''});
  const [result, setResult] = useState(null);

  const handleFormSubmit = (data) => {
    //Send data to Express server using fetch
    fetch('https://localhost:3000/calculate-apr', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => setResult(data));
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
    </div>
  );
}

export default App;
