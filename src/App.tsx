import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardItem, FilterLeaders } from './TTAUI';
import { Form } from "./Forms";

function App() {
  return (
    <div>

      <Form 
        action="http://localhost:4351/api/contactus"
        render={() => (
          <React.Fragment>

<FilterLeaders />

        <div className="card">
            <div className="card-header">
                Infantry
            </div>
            <div className="card-body d-flex">
              <CardItem code="MIN01" />
              <CardItem code="MIN02" />
              <CardItem code="MIN03" />
              <CardItem code="MIN04" />
            </div>
        </div>


          </React.Fragment>
        )}
      
      />


    </div>
  );
}

export default App;
