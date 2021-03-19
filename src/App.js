import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SingleQuestion from './Question';
import data from './data'

function App() {
  const [questions,setQuestion]=useState(data)
  return (
    <main>
      <div className="container">
        <h3>question and answer about login</h3>
        <section className="info">
          
          {
            
            questions.map((question)=>{
              return <SingleQuestion key={question.id}{...question}/> 
              
              
            })

          }

        </section>
      </div>
    </main>
    
  );
}

export default App;
 