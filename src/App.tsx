import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './logo.svg';
import './App.css';
import { CardItem, FilterAge, FilterLeaders, FilterTactics, FilterWonder, SceneResult, FilterGovernament, FilterYellowTokens } from './TTAUI';
import { Form } from "./Forms";
import { TTASceneCalculation } from './TTACalc';
import { MakeScene } from './TTARepo';


function App() {  

  const sceneRef = useRef(null);
  const formRef = useRef(null);

  function CalcScene(v: [key: string]) {
    console.log(v);
    let s = MakeScene(v);
    let o = TTASceneCalculation(s);
    sceneRef.current.setState({values: o});
  }

  function BtnCalcClick()
  {
    console.log(formRef.current.handleSubmit(null));
  }


  return (
    <div>

      <div className="row">
        <div className="col-9">

      <Form ref={formRef}
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
              <h6>General</h6>
              <FilterLeaders />
              <FilterGovernament />
              <FilterTactics />
              <FilterYellowTokens />
            </div>
            
        </div>



<ul className="nav nav-tabs mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="pills-resources-tab" data-bs-toggle="pill" data-bs-target="#pills-resources" type="button" role="tab" aria-controls="pills-resources" aria-selected="true">Resources</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-strength-tab" data-bs-toggle="pill" data-bs-target="#pills-strength" type="button" role="tab" aria-controls="pills-strength" aria-selected="false">Strength</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-wonders-tab" data-bs-toggle="pill" data-bs-target="#pills-wonders" type="button" role="tab" aria-controls="pills-wonders" aria-selected="false">Wonders</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-resources" role="tabpanel" aria-labelledby="pills-resources-tab" >

  <div className="row">
            <div className="col ttapfa">
              <h6>Farm</h6>
              <CardItem code="PFA01" />
              <CardItem code="PFA02" />
              <CardItem code="PFA03" />
              <CardItem code="PFA04" />
            </div>
            <div className="col ttapmi">
              <h6>Mine</h6>
              <CardItem code="PMI01" />
              <CardItem code="PMI02" />
              <CardItem code="PMI03" />
              <CardItem code="PMI04" />
            </div>
            <div className="col ttaula">
              <h6>Lab</h6>
              <CardItem code="ULA01" />
              <CardItem code="ULA02" />
              <CardItem code="ULA03" />
              <CardItem code="ULA04" />
            </div>
        </div>
        
        <div className="row">
            <div className="col ttaute">
              <h6>Theology</h6>
              <CardItem code="UTE01" />
              <CardItem code="UTE02" />
              <CardItem code="UTE03" />
            </div>
            <div className="col ttauar">
              <h6>Arena</h6>
              <CardItem code="UAR01" />
              <CardItem code="UAR02" />
              <CardItem code="UAR03" />
            </div>
            <div className="col ttauth">
              <h6>Theatre</h6>
              <CardItem code="UTH01" />
              <CardItem code="UTH02" />
              <CardItem code="UTH03" />
            </div>
            <div className="col ttauli">
              <h6>Press</h6>
              <CardItem code="ULI01" />
              <CardItem code="ULI02" />
              <CardItem code="ULI03" />
            </div>
        </div>

        <div className="row">
            <div className="col ttasmi">
              <h6>Military</h6>
              <CardItem code="SMI01" needToken={false} />
              <CardItem code="SMI02" needToken={false} />
              <CardItem code="SMI03" needToken={false} />
            </div>
            <div className="col ttasci">
              <h6>Civil</h6>
              <CardItem code="SCI01" needToken={false} />
              <CardItem code="SCI02" needToken={false} />
              <CardItem code="SCI03" needToken={false} />
            </div>
            <div className="col ttascl">
              <h6>Colonization</h6>
              <CardItem code="SCL01" needToken={false} />
              <CardItem code="SCL02" needToken={false} />
              <CardItem code="SCL03" needToken={false} />
            </div>
            <div className="col ttasco">
              <h6>Construction</h6>
              <CardItem code="SCO01" needToken={false} />
              <CardItem code="SCO02" needToken={false} />
              <CardItem code="SCO03" needToken={false} />
            </div>
        </div>
        <h6>Territories</h6>
        <div className="row ttater">
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
       

  </div>
  <div className="tab-pane fade" id="pills-strength" role="tabpanel" aria-labelledby="pills-strength-tab" >

        <div className="row">
            <div className="col ttamin">
              <h6>Infantry</h6>
              <CardItem code="MIN01" />
              <CardItem code="MIN02" />
              <CardItem code="MIN03" />
              <CardItem code="MIN04" />
            </div>
            <div className="col ttamca">
              <h6>Cavallery</h6>
              <CardItem code="MCA01" />
              <CardItem code="MCA02" />
              <CardItem code="MCA03" />
            </div>
            <div className="col ttamar">
              <h6>Artillery</h6>
              <CardItem code="MAR01" />
              <CardItem code="MAR02" />
            </div>
            <div className="col ttamai">
              <h6>Air Force</h6>
              <CardItem code="MAI01" />
            </div>
        </div>

  </div>
  <div className="tab-pane fade" id="pills-wonders" role="tabpanel" aria-labelledby="pills-wonders-tab" >

          <div className="row">
            <div className="col ttawon">
              <h6>Age 0</h6>
              <CardItem code="WON01" needToken={false} />
              <CardItem code="WON02" needToken={false} />
              <CardItem code="WON03" needToken={false} />
              <CardItem code="WON04" needToken={false} />
              <CardItem code="WON17" needToken={false} />
              <CardItem code="WON18" needToken={false} />
              <CardItem code="WON19" needToken={false} />
              <CardItem code="WON20" needToken={false} />
            </div>
            <div className="col ttawon">
              <h6>Age I</h6>
              <CardItem code="WON05" needToken={false} />
              <CardItem code="WON06" needToken={false} />
              <CardItem code="WON07" needToken={false} />
              <CardItem code="WON08" needToken={false} />
              <CardItem code="WON21" needToken={false} />
              <CardItem code="WON22" needToken={false} />
              <CardItem code="WON23" needToken={false} />
              <CardItem code="WON24" needToken={false} />
            </div>
            <div className="col ttawon">
              <h6>Age II</h6>
              <CardItem code="WON09" needToken={false} />
              <CardItem code="WON10" needToken={false} />
              <CardItem code="WON11" needToken={false} />
              <CardItem code="WON12" needToken={false} />
              <CardItem code="WON25" needToken={false} />
              <CardItem code="WON26" needToken={false} />
              <CardItem code="WON27" needToken={false} />
              <CardItem code="WON28" needToken={false} />
            </div>
            <div className="col ttawon">
              <h6>Age III</h6>
              <CardItem code="WON13" needToken={false} />
              <CardItem code="WON14" needToken={false} />
              <CardItem code="WON15" needToken={false} />
              <CardItem code="WON16" needToken={false} />
              <CardItem code="WON29" needToken={false} />
              <CardItem code="WON30" needToken={false} />
              <CardItem code="WON31" needToken={false} />
              <CardItem code="WON32" needToken={false} />
            </div>
          </div>

  </div>
</div>
           

          </React.Fragment>
        )}
      
      />

        </div>
        <div className="col-3">
          <div className="sticky-top">
            <div className="d-grid gap-2 mb-2">
              <a href="#" className="btn btn-primary btn-block btn-lg" onClick={BtnCalcClick}>Calculate Board</a>
            </div>
            <SceneResult ref={sceneRef} />  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
