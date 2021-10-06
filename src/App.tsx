import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardItem, FilterAge, FilterLeaders, FilterTactics, FilterWonder, SceneResult, FilterGovernament } from './TTAUI';
import { Form } from "./Forms";
import { TTASceneCalculation } from './TTACalc';
import { MakeScene } from './TTARepo';


function App() {  

  const sceneRef = useRef(null)

  function CalcScene(v: [key: string]) {
    console.log(v);
    let s = MakeScene(v);
    let o = TTASceneCalculation(s);
    sceneRef.current.setState({values: o});
  }


  return (
    <div>

      <div className="row">
        <div className="col-9">

      <Form 
        action="http://localhost:4351/api/contactus"
        onSubmitData={CalcScene}
        render={() => (
          <React.Fragment>

        <div className="row">
            <div className="col">
              <h6>Age</h6>
              <FilterAge />
            </div>
            <div className="col">
              <FilterLeaders />
              <FilterGovernament />
            </div>
            <div className="col">
              <FilterTactics />
            </div>
            <div className="col">
              <FilterWonder />
            </div>
        </div>

        <div className="row">
            <div className="col">
              <h6>Infantry</h6>
              <CardItem code="MIN01" />
              <CardItem code="MIN02" />
              <CardItem code="MIN03" />
              <CardItem code="MIN04" />
            </div>
            <div className="col">
              <h6>Cavallery</h6>
              <CardItem code="MCA01" />
              <CardItem code="MCA02" />
              <CardItem code="MCA03" />
            </div>
            <div className="col">
              <h6>Artillery</h6>
              <CardItem code="MAR01" />
              <CardItem code="MAR02" />
            </div>
            <div className="col">
              <h6>Air Force</h6>
              <CardItem code="MAI01" />
            </div>
        </div>
        
        <div className="row">
            <div className="col">
              <h6>Farm</h6>
              <CardItem code="PFA01" />
              <CardItem code="PFA02" />
              <CardItem code="PFA03" />
              <CardItem code="PFA04" />
            </div>
            <div className="col">
              <h6>Mine</h6>
              <CardItem code="PMI01" />
              <CardItem code="PMI02" />
              <CardItem code="PMI03" />
              <CardItem code="PMI04" />
            </div>
            <div className="col">
              <h6>Lab</h6>
              <CardItem code="ULA01" />
              <CardItem code="ULA02" />
              <CardItem code="ULA03" />
              <CardItem code="ULA04" />
            </div>
        </div>
        
        <div className="row">
            <div className="col">
              <h6>Theology</h6>
              <CardItem code="UTH01" />
              <CardItem code="UTH02" />
              <CardItem code="UTH03" />
            </div>
            <div className="col">
              <h6>Arena</h6>
              <CardItem code="UAR01" />
              <CardItem code="UAR02" />
              <CardItem code="UAR03" />
            </div>
            <div className="col">
              <h6>Theatre</h6>
              <CardItem code="UTE01" />
              <CardItem code="UTE02" />
              <CardItem code="UTE03" />
            </div>
            <div className="col">
              <h6>Press</h6>
              <CardItem code="ULI01" />
              <CardItem code="ULI02" />
              <CardItem code="ULI03" />
            </div>
        </div>

        <div className="row">
            <div className="col">
              <h6>Military</h6>
              <CardItem code="SMI01" needToken={false} />
              <CardItem code="SMI02" needToken={false} />
              <CardItem code="SMI03" needToken={false} />
            </div>
            <div className="col">
              <h6>Civil</h6>
              <CardItem code="SCI01" needToken={false} />
              <CardItem code="SCI02" needToken={false} />
              <CardItem code="SCI03" needToken={false} />
            </div>
            <div className="col">
              <h6>Colonization</h6>
              <CardItem code="SCL01" needToken={false} />
              <CardItem code="SCL02" needToken={false} />
              <CardItem code="SCL03" needToken={false} />
            </div>
            <div className="col">
              <h6>Construction</h6>
              <CardItem code="SCO01" needToken={false} />
              <CardItem code="SCO02" needToken={false} />
              <CardItem code="SCO03" needToken={false} />
            </div>
        </div>
        <h6>Territories</h6>
        <div className="row">
            <div className="col">
              <CardItem code="TER01" needToken={false} />
              <CardItem code="TER02" needToken={false} />
              <CardItem code="TER03" needToken={false} />
            </div>
            <div className="col">
              <CardItem code="TER04" needToken={false} />
              <CardItem code="TER05" needToken={false} />
              <CardItem code="TER06" needToken={false} />
            </div>
            <div className="col">
              <CardItem code="TER07" needToken={false} />
              <CardItem code="TER08" needToken={false} />
              <CardItem code="TER09" needToken={false} />
            </div>
            <div className="col">
              <CardItem code="TER10" needToken={false} />
              <CardItem code="TER11" needToken={false} />
              <CardItem code="TER12" needToken={false} />
              <CardItem code="TER13" needToken={false} />
            </div>
        </div>
          

          </React.Fragment>
        )}
      
      />

        </div>
        <div className="col-3">
          <SceneResult ref={sceneRef} />  
        </div>
      </div>
    </div>
  );
}

export default App;
