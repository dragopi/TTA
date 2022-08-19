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

test('SceneCalculation InvalidScenario1 sm', () => {
    let sm = new TTASceneManager();
    let deck = new TTADeck();

    sm.Age(2)
    sm.Add( deck.Military.AirForces());
    
    let result = sm.Calculate();
    expect(result.valid).toEqual(false);
});

test('SceneCalculation InvalidScenario2', () => {

    let s: Scene = GetEmptyScene();
    s.Age = 1;
    s.Leader = GetCardByCode("LEA18");
    let result: TTASceneValues = TTASceneCalculation(s);
    expect(result.valid).toEqual(false);

});

test('SceneCalculation InvalidScenario2 sm', () => {
    let sm = new TTASceneManager();
    let deck = new TTADeck();

    sm.Age(1)
    sm.Add( deck.Leaders.IsaacNewton() );
    
    let result = sm.Calculate();
    expect(result.valid).toEqual(false);
});


test('SceneCalculation InvalidScenario3', () => {

    let s: Scene = GetEmptyScene();

    s.Age = 3;
    s.Leader = GetCardByCode("LEA01");
    let result: TTASceneValues = TTASceneCalculation(s);
    expect(result.valid).toEqual(false);
});
test('SceneCalculation InvalidScenario3 sm', () => {
    let sm = new TTASceneManager();
    let deck = new TTADeck();

    sm.Age(3)
    sm.Add( deck.Leaders.JuliusCaesar() );
    
    let result = sm.Calculate();
    expect(result.valid).toEqual(false);
});

test('SceneCalculation InvalidScenario4', () => {

    let s: Scene = GetEmptyScene();
    s.Age = 4;
    s.Leader = GetCardByCode("LEA15");
    let result: TTASceneValues = TTASceneCalculation(s);
    expect(result.valid).toEqual(false);
});
test('SceneCalculation InvalidScenario4 sm', () => {
    let sm = new TTASceneManager();
    let deck = new TTADeck();

    sm.Age(4)
    sm.Add( deck.Leaders.NapoleonBonaparte() );
    
    let result = sm.Calculate();
    expect(result.valid).toEqual(false);
});

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

test('StrengthCalculation Scenario1 sm', () => {


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

test('StrengthCalculation Scenario2 sm', () => {


    let sm = new TTASceneManager();
    let deck = new TTADeck();

    sm.Age(3)
    sm.Add( deck.Leaders.CharlesDarwin() );
    sm.Add( deck.Military.Infantry.Warriors(1) );
    sm.Add( deck.Military.Infantry.Riflemen(2) );
    sm.Add( deck.Military.Artillery.Cannon(1) );

    sm.Add( deck.Resources.Farm.Agriculture(1) );
    sm.Add( deck.Resources.Farm.SelectiveBreeding(1) );
    sm.Add( deck.Resources.Mine.Iron(3) );

    sm.Add( deck.Urban.Lab.Philosophy(2) );
    sm.Add( deck.Urban.Arena.TeamSports(1) );

    sm.Add( deck.Special.Civil.CodeOfLaw() );
    sm.Add( deck.Special.Colonization.Navigation() );

    sm.Add( deck.Wonders.AncientRuins() );
    sm.Add( deck.Wonders.UniversitasCarolina() );
    sm.Add( deck.Wonders.HarvardCollege() );
    sm.Add( deck.Wonders.EiffelTower() );

    sm.AddTactic( deck.Tactics.DefensiveArmy() );

    let result = sm.Calculate();
    expect(result.valid).toEqual(true);
    expect(result.strength.Value()).toEqual(20);
    expect(result.happy.Value()).toEqual(4);
    expect(result.science.Value()).toEqual(7);
    expect(result.culture.Value()).toEqual(10);

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
test('Newton modifier sm', () => {
    
    let sm = new TTASceneManager();
    let deck = new TTADeck();

    sm.Age(3)
    sm.Add( deck.Leaders.IsaacNewton() );
    sm.Add( deck.Urban.Lab.Philosophy(2) );
    sm.Add( deck.Urban.Press.Journalism(3) );

    let result = sm.Calculate();
    expect(result.valid).toEqual(true);
    expect(result.science.Value()).toEqual(10);
});

test('CookSuez modifier', () => {
    
    let sm = new TTASceneManager();
    let deck = new TTADeck();

    sm.Age(2)
    sm.Add( deck.Leaders.JamesCook() );
    sm.Add( deck.Wonders.SuezCanal() );
    sm.Add( deck.Territories.DevelopedTerritoryI() );
    sm.Add( deck.Territories.HistoricTerritoryI() );
    sm.Add( deck.Territories.InhabitedTerritoryI() );

    let result = sm.Calculate();
    expect(result.valid).toEqual(true);
    expect(result.resource.Value()).toEqual(3);
    expect(result.culture.Value()).toEqual(6);

    sm.Add( deck.Territories.DevelopedTerritoryI() );
    sm.Add( deck.Territories.HistoricTerritoryI() );
    sm.Add( deck.Territories.InhabitedTerritoryI() );

    result = sm.Calculate();
    expect(result.valid).toEqual(true);
    expect(result.resource.Value()).toEqual(6);
    expect(result.culture.Value()).toEqual(12);
});



