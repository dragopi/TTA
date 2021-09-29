import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardItem, FilterCategory, FilterLeaders, FilterTactics } from './TTAUI';
import { Form } from "./Forms";

function App() {
  return (
    <div>

      <Form 
        action="http://localhost:4351/api/contactus"
        render={() => (
          <React.Fragment>

        <FilterLeaders />

        <FilterTactics />

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

          <FilterCategory descr="Cavallery" render={() => (
            <div className="d-flex">
              <CardItem code="MCA01" />
              <CardItem code="MCA02" />
              <CardItem code="MCA03" />
            </div>
          )} />

          <FilterCategory descr="Artillery" render={() => (
            <div className="d-flex">
              <CardItem code="MAR01" />
              <CardItem code="MAR02" />
            </div>
          )} />

          <FilterCategory descr="Air Force" render={() => (
            <div className="d-flex">
              <CardItem code="MAF01" />
            </div>
          )} />

          <FilterCategory descr="Farm" render={() => (
            <div className="d-flex">
              <CardItem code="PFA01" />
              <CardItem code="PFA02" />
              <CardItem code="PFA03" />
              <CardItem code="PFA04" />
            </div>
          )} />
          <FilterCategory descr="Mine" render={() => (
            <div className="d-flex">
              <CardItem code="PMN01" />
              <CardItem code="PMN02" />
              <CardItem code="PMN03" />
              <CardItem code="PMN04" />
            </div>
          )} />
          <FilterCategory descr="Lab" render={() => (
            <div className="d-flex">
              <CardItem code="ULB01" />
              <CardItem code="ULB02" />
              <CardItem code="ULB03" />
            </div>
          )} />
          <FilterCategory descr="Theology" render={() => (
            <div className="d-flex">
              <CardItem code="UTH01" />
              <CardItem code="UTH02" />
              <CardItem code="UTH03" />
            </div>
          )} />

          </React.Fragment>
        )}
      
      />


    </div>
  );
}

export default App;
