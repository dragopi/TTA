import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from './logo.svg';
import './App.css';
import { CardItem, CardItemToken, FilterAge, FilterLeaders, FilterTactics, FilterWonder, SceneResult, FilterGovernament, FilterYellowTokens, TacticResult } from './TTAUI';
import { Form } from "./Forms";
import { TTASceneCalculation } from './TTACalc';
import { MakeScene } from './TTARepo';
import { TTASceneValues } from './TTATypes';
import ReactDOM from 'react-dom';


function App() {  

  const sceneRef = useRef(null);
  const tacticRef = useRef(null);
  const formRef = useRef(null);

  function CalcScene(v: [key: string]) {
    console.log(v);
    let s = MakeScene(v);
    let sceneResult = TTASceneCalculation(s);
    sceneRef.current.setState({values: sceneResult});
    //tacticRef.current.setState({values: o})
    PrintConsoleLog(sceneResult);
    
    ;
  }

  function PrintConsoleLog(r: TTASceneValues) {
    let errorCount = 0;
    let resultConsoleElements = <div>No logs</div>;
    if (r != null) {
      resultConsoleElements = (
        <div>
          {r.Logs().map((item, i) => {      
            errorCount++;
            return (<span>{item.msg}<br /></span>) 
          })}
        </div>
      );
    }

    let badge = document.getElementById('countErrorLog')
    if (errorCount>0) {
      badge.classList.add("bg-danger");
      badge.innerText = errorCount.toString();
    }
    else {
      badge.classList.remove("bg-danger")
      badge.innerText = "";
    }
    ReactDOM.render(resultConsoleElements, document.getElementById('sceneConsole'));

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
  <li className="nav-item" role="console">
    <button className="nav-link" id="pills-console-tab" data-bs-toggle="pill" data-bs-target="#pills-console" type="button" role="tab" aria-controls="pills-console" aria-selected="false">Errors <span id="countErrorLog" className="badge"></span></button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-resources" role="tabpanel" aria-labelledby="pills-resources-tab" >

  <div className="row">
            <div className="col ttapfa">
              <h6>Farm</h6>
              <CardItemToken code="PFA01" />
              <CardItemToken code="PFA02" />
              <CardItemToken code="PFA03" />
              <CardItemToken code="PFA04" />
            </div>
            <div className="col ttapmi">
              <h6>Mine</h6>
              <CardItemToken code="PMI01" />
              <CardItemToken code="PMI02" />
              <CardItemToken code="PMI03" />
              <CardItemToken code="PMI04" />
            </div>
            <div className="col ttaula">
              <h6>Lab</h6>
              <CardItemToken code="ULA01" />
              <CardItemToken code="ULA02" />
              <CardItemToken code="ULA03" />
              <CardItemToken code="ULA04" />
            </div>
        </div>
        
        <div className="row">
            <div className="col ttaute">
              <h6>Theology</h6>
              <CardItemToken code="UTE01" />
              <CardItemToken code="UTE02" />
              <CardItemToken code="UTE03" />
            </div>
            <div className="col ttauar">
              <h6>Arena</h6>
              <CardItemToken code="UAR01" />
              <CardItemToken code="UAR02" />
              <CardItemToken code="UAR03" />
            </div>
            <div className="col ttauth">
              <h6>Theatre</h6>
              <CardItemToken code="UTH01" />
              <CardItemToken code="UTH02" />
              <CardItemToken code="UTH03" />
            </div>
            <div className="col ttauli">
              <h6>Press</h6>
              <CardItemToken code="ULI01" />
              <CardItemToken code="ULI02" />
              <CardItemToken code="ULI03" />
            </div>
        </div>

        <div className="row">
            <div className="col ttasmi">
              <h6>Military</h6>
              <CardItem code="SMI01"/>
              <CardItem code="SMI02"/>
              <CardItem code="SMI03"/>
            </div>
            <div className="col ttasci">
              <h6>Civil</h6>
              <CardItem code="SCI01"/>
              <CardItem code="SCI02"/>
              <CardItem code="SCI03"/>
            </div>
            <div className="col ttascl">
              <h6>Colonization</h6>
              <CardItem code="SCL01"/>
              <CardItem code="SCL02"/>
              <CardItem code="SCL03"/>
            </div>
            <div className="col ttasco">
              <h6>Construction</h6>
              <CardItem code="SCO01"/>
              <CardItem code="SCO02"/>
              <CardItem code="SCO03"/>
            </div>
        </div>
        <h6>Territories</h6>
        <div className="row ttater">
            <div className="col">
              <CardItem code="TER01"/>
              <CardItem code="TER02"/>
              <CardItem code="TER03"/>
            </div>
            <div className="col">
              <CardItem code="TER04"/>
              <CardItem code="TER05"/>
              <CardItem code="TER06"/>
            </div>
            <div className="col">
              <CardItem code="TER07"/>
              <CardItem code="TER08"/>
              <CardItem code="TER09"/>
            </div>
            <div className="col">
              <CardItem code="TER10"/>
              <CardItem code="TER11"/>
              <CardItem code="TER12"/>
              <CardItem code="TER13"/>
            </div>
        </div>
       

  </div>
  <div className="tab-pane fade" id="pills-strength" role="tabpanel" aria-labelledby="pills-strength-tab" >

        <div className="row">
            <div className="col ttamin">
              <h6>Infantry</h6>
              <CardItemToken code="MIN01" />
              <CardItemToken code="MIN02" />
              <CardItemToken code="MIN03" />
              <CardItemToken code="MIN04" />
            </div>
            <div className="col ttamca">
              <h6>Cavallery</h6>
              <CardItemToken code="MCA01" />
              <CardItemToken code="MCA02" />
              <CardItemToken code="MCA03" />
            </div>
            <div className="col ttamar">
              <h6>Artillery</h6>
              <CardItemToken code="MAR01" />
              <CardItemToken code="MAR02" />
            </div>
            <div className="col ttamai">
              <h6>Air Force</h6>
              <CardItemToken code="MAI01" />
            </div>
        </div>

  </div>
  <div className="tab-pane fade" id="pills-wonders" role="tabpanel" aria-labelledby="pills-wonders-tab" >

          <div className="row">
            <div className="col ttawon">
              <h6>Age 0</h6>
              <CardItem code="WON01"/>
              <CardItem code="WON02"/>
              <CardItem code="WON03"/>
              <CardItem code="WON04"/>
              <CardItem code="WON17"/>
              <CardItem code="WON18"/>
              <CardItem code="WON19"/>
              <CardItem code="WON20"/>
            </div>
            <div className="col ttawon">
              <h6>Age I</h6>
              <CardItem code="WON05"/>
              <CardItem code="WON06"/>
              <CardItem code="WON07"/>
              <CardItem code="WON08"/>
              <CardItem code="WON21"/>
              <CardItem code="WON22"/>
              <CardItem code="WON23"/>
              <CardItem code="WON24"/>
            </div>
            <div className="col ttawon">
              <h6>Age II</h6>
              <CardItem code="WON09"/>
              <CardItem code="WON10"/>
              <CardItem code="WON11"/>
              <CardItem code="WON12"/>
              <CardItem code="WON25"/>
              <CardItem code="WON26"/>
              <CardItem code="WON28"/>
              <CardItem code="WON27"/>
              <CardItem code="WON33"/>
              <CardItem code="WON34"/>
              <CardItem code="WON35"/>
            </div>
            <div className="col ttawon">
              <h6>Age III</h6>
              <CardItem code="WON13"/>
              <CardItem code="WON14"/>
              <CardItem code="WON15"/>
              <CardItem code="WON16"/>
              <CardItem code="WON29"/>
              <CardItem code="WON30"/>
              <CardItem code="WON31"/>
              <CardItem code="WON32"/>
            </div>
          </div>

  </div>
  <div className="tab-pane fade" id="pills-console" role="tabpanel" aria-labelledby="pills-console-tab">
    <div id="sceneConsole"></div>    
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
