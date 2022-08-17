import { BoardCard, Scene, SceneValuesModifier, TacticInfoReport, TacticReport, TTAStrengthValue, TTASceneValues, TTACard } from "./TTATypes";
import { TTARepoCards, GetBestFromArray } from "./TTARepo";
import { TTASceneCalculation } from "./TTACalc";
import { assert } from "console";

function GetEmptyScene() {
    let s: Scene = {
        Age: 0,
        yellowToken: 20,
        Leader: null,
        Governament: null,
        Wonders: [],
        Infantry: [],
        Cavallery: [],
        Artillery: [],
        AirForce: null,
        Special: [],
        Productions: [],
        Urbans: [],
        Territories: [],
        Tactic: null
    };
    return s;
}

function GetCardByCode(value: string, token: number = 1) {
    let result: BoardCard = {
        code: value,
        workers: token
    };
    return result;
}

test('SceneCalculation InvalidScenario1', () => {

    let s: Scene = GetEmptyScene();
    s.Age = 1;
    s.AirForce = GetCardByCode("MAI01", 1);
    let result: TTASceneValues = TTASceneCalculation(s);
    expect(result.valid).toEqual(false);

});

test('SceneCalculation InvalidScenario2', () => {

    let s: Scene = GetEmptyScene();
    s.Age = 1;
    s.Leader = GetCardByCode("LEA18");
    let result: TTASceneValues = TTASceneCalculation(s);
    expect(result.valid).toEqual(false);

});

test('SceneCalculation InvalidScenario3', () => {

    let s: Scene = GetEmptyScene();

    s.Age = 3;
    s.Leader = GetCardByCode("LEA01");
    let result: TTASceneValues = TTASceneCalculation(s);
    expect(result.valid).toEqual(false);
});

test('SceneCalculation InvalidScenario4', () => {

    let s: Scene = GetEmptyScene();
    s.Age = 4;
    s.Leader = GetCardByCode("LEA15");
    let result: TTASceneValues = TTASceneCalculation(s);
    expect(result.valid).toEqual(false);
});

/*
test('SceneCalculation InvalidMilitaryArtillery', () => {

    let s: Scene = GetEmptyScene();
    s.Age = 1;
    s.Artillery.push(GetCardByCode("MCA01"));
    let result: TTASceneValues = TTASceneCalculation(s);
    expect(result.valid).toEqual(false);
});

*/
test('StrengthCalculation Scenario1', () => {

    let s: Scene = GetEmptyScene();
    s.Age = 2;
    s.Leader = GetCardByCode("LEA15");
    s.Infantry.push(GetCardByCode("MIN02",3));
    s.Cavallery.push(GetCardByCode("MCA01",1));
    s.Tactic = TTARepoCards.Instance.GetTactic("TAC02");
    s.Urbans.push(GetCardByCode("UAR01", 1));
    s.Special.push(GetCardByCode("SMI01"));
    let result: TTASceneValues = TTASceneCalculation(s);
    expect(result.valid).toEqual(true);
    expect(result.strength.Value()).toEqual(16);

    
});



