import { BoardCard, Scene, SceneValuesModifier, TacticInfoReport, TacticReport, TTAStrengthValue, TTASceneValues, TTACard } from "./TTATypes";
import { TTARepoCards, GetBestFromArray } from "./TTARepo";
import { TTASceneCalculation } from "./TTACalc";
import { TTADeck, TTASceneManager } from "./TTAScene"

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


    let deck = new TTADeck();
    let s: Scene = GetEmptyScene();
    s.Age = 2;
    s.Leader = deck.Leaders.NapoleonBonaparte();
    s.Infantry.push(deck.Military.Infantry.Swordsmen(3));
    s.Cavallery.push(deck.Military.Cavallery.Knights(1));
    s.Tactic = TTARepoCards.Instance.GetTactic("TAC02");
    s.Urbans.push( deck.Urban.Arena.BreadandCircuses() );
    s.Special.push( deck.Special.Military.Warfare());
    let result: TTASceneValues = TTASceneCalculation(s);
    expect(result.valid).toEqual(true);
    expect(result.strength.Value()).toEqual(16);

    
});

test('StrengthCalculation Scenario2', () => {


    let sm = new TTASceneManager();
    let deck = new TTADeck();

    sm.Age(2)
    sm.Add( deck.Leaders.NapoleonBonaparte() );
    sm.Add( deck.Military.Infantry.Swordsmen(3) );
    sm.Add( deck.Military.Cavallery.Knights(1) );
    sm.Add( deck.Urban.Arena.BreadandCircuses() );
    sm.Add( deck.Special.Military.Warfare() );
    sm.AddTactic( deck.Tactics.Legion() );

    let result = sm.Calculate();
    expect(result.valid).toEqual(true);
    expect(result.strength.Value()).toEqual(16);

    
});

// Test Modifier

test('Newton modifier', () => {
    let s: Scene = GetEmptyScene();
    s.Age = 3;
    s.Leader = GetCardByCode("LEA18");
    s.Urbans.push(GetCardByCode("ULA01", 2));
    s.Urbans.push(GetCardByCode("ULI02", 3));
    let result: TTASceneValues = TTASceneCalculation(s);
    expect(result.valid).toEqual(true);
    expect(result.science.Value()).toEqual(10);
});



