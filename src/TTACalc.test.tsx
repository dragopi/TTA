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

function GetCardByCode(value: string, token: number = 0) {
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