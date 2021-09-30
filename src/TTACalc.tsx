import { TTACard, TTARepoCards, TTATacticCard } from "./TTARepo";

export enum CardType {
    Leader,
    Wonder,
    Military,
    ProductionBuilding,
    UrbanBuilding,
    Governament,
    Special,
    Tactic
}

export interface BoardCard {
    code: string;
    card?: TTACard;
    yellowToken: number;
}

interface Token {
    assignedCard: BoardCard;
    obsolete: boolean;
}

export interface Scene {
    Age: number;
    Leader?: BoardCard;
    Governament?: BoardCard;
    Wonders?: Array<BoardCard>;
    Infantry: Array<BoardCard>;
    Cavallery: Array<BoardCard>;
    Artillery: Array<BoardCard>;
    AirForce: BoardCard;
    Special?: Array<BoardCard>;
    Productions?: Array<BoardCard>;
    Urbans?: Array<BoardCard>;
    Tactic: TTATacticCard;
}

function FillCard(c: BoardCard)
{
    if (c!=null)
        if (c.card==null)
            c.card = TTARepoCards.Instance.Get(c.code);
}

function FillArray(a: Array<BoardCard>)
{
    if (a!=null)
        a.forEach(c => {
            if (c.card==null)
                c.card = TTARepoCards.Instance.Get(c.code)
        });
}

interface LogItem {
    msg: string;
    cardName: string;
}

export function StrenghtCalculation(s: Scene)
{
    let logs: LogItem[] = [];
    FillCard(s.Leader);
    FillCard(s.Governament);
    FillCard(s.AirForce);
    FillCard(s.Leader);
    FillCard(s.Governament);
    FillArray(s.Wonders);
    FillArray(s.Infantry);
    FillArray(s.Cavallery);
    FillArray(s.Artillery);
    FillCard(s.AirForce);
    FillArray(s.Special);
    FillArray(s.Productions);
    FillArray(s.Urbans);

    let countTactics: number = 0;
    let countTacticsObs: number = 0;

    let strengthFromMilitary: number = 0;
    let strengthFromTactic: number = 0;

    let infArray: Array<Token> = [];
    let cavArray: Array<Token> = [];
    let artArray: Array<Token> = [];
    let airArray: Array<Token> = [];
    let infCount: number = 0;
    let cavCount: number = 0;
    let artCount: number = 0;
    let airCount: number = 0;


    s.Infantry.forEach(c => {
        for (let index = 0; index < c.yellowToken; index++) {
            infArray.push({
                assignedCard: c,
                obsolete : (Math.abs(c.card.age-s.Age)>1)
            });
        }

        strengthFromMilitary += (c.yellowToken * c.card.strength);
    });
    infCount = infArray.length;

    s.Cavallery.forEach(c => {
        for (let index = 0; index < c.yellowToken; index++) {
            cavArray.push({
                assignedCard: c,
                obsolete : (Math.abs(c.card.age-s.Age)>1)
            });
        }
        strengthFromMilitary += (c.yellowToken * c.card.strength);
    });
    cavCount = cavArray.length;

    s.Artillery.forEach(c => {
        for (let index = 0; index < c.yellowToken; index++) {
            artArray.push({
                assignedCard: c,
                obsolete : (Math.abs(c.card.age-s.Age)>1)
            });
        }

        strengthFromMilitary += (c.yellowToken * c.card.strength);
    });
    artCount = artArray.length;

    if (s.AirForce != null)
    {
        for (let index = 0; index < s.AirForce.yellowToken; index++) {
            airArray.push({
                assignedCard: s.AirForce,
                obsolete: false
            });
        }
        strengthFromMilitary += (s.AirForce.yellowToken * s.AirForce.card.strength);
    }
    airCount = airArray.length;



    if ((s.Leader != null)&&(s.Leader.code=="LEA33"))
    {
        s.Productions.forEach(c => {
            if (c.card.subtype=="Farm")
                for (let index = 0; index < c.yellowToken; index++) {
                    infArray.push({
                        assignedCard: c,
                        // Each farm count as age "A" infantry -> A = 0
                        obsolete : (Math.abs(0-s.Age)>1)
                    });
                }
        });
    }

    if (s.Tactic!=null)
    {
        let findTactic: boolean = false;

        do {

            let nInf: number = 0;
            let nCav: number = 0;
            let nArt: number = 0;
            let isObsolete: boolean = false;

            while ((nInf!=s.Tactic.ninf) && (infArray.length>0))
            {
                if (infArray.pop().obsolete)
                    isObsolete = true;
                nInf++;
            }
            
            if ((nCav!=s.Tactic.ncav) && (cavArray.length>0))
            {
                if (cavArray.pop().obsolete)
                    isObsolete = true;
                nCav++;
            }

            if ((nArt!=s.Tactic.nart) && (artArray.length>0))
            {
                if (artArray.pop().obsolete)
                    isObsolete = true;
                nArt++;
            }

            findTactic = ((nInf == s.Tactic.ninf) && (nCav == s.Tactic.ncav) && (nArt == s.Tactic.nart))

            if (findTactic)
            {
                if (isObsolete)
                    countTacticsObs++;
                else
                    countTactics++;
            }

        } while (findTactic);

        strengthFromTactic = (countTactics * s.Tactic.strength) + (countTacticsObs * s.Tactic.strengthObs);
    }

    let strengthFromAirMod: number = 0;
    if (s.AirForce != null)
    {
        let airToken = s.AirForce.yellowToken;
        let tokenUsed = Math.min(s.AirForce.yellowToken, countTactics);
        strengthFromAirMod += tokenUsed * s.Tactic.strength;

        airToken += tokenUsed;
        strengthFromAirMod += Math.min(s.AirForce.yellowToken, countTacticsObs) * s.Tactic.strengthObs;
    }

    // SPECIAL BLUE CARD
    let strengthFromSpecials = 0;
    if (s.Special != null)
        s.Special.forEach(blueCard => {
            strengthFromSpecials += blueCard.card.strength;
        });

    // URBAN CARD (Arena)
    let strengthFromArena = 0;
    if (s.Urbans != null)
        s.Urbans.forEach(urbanCard => {
            strengthFromArena += urbanCard.card.strength;
        });

    // Wonder
    let strengthFromWonder = 0;
    if (s.Wonders != null)
        s.Wonders.forEach(wonderCard => {

            if (wonderCard.card.code == "WON05")    // GreatWall
            {
                s.Infantry.forEach(c => {
                    strengthFromWonder += c.yellowToken            
                });

                s.Artillery.forEach(c => {
                    strengthFromWonder += c.yellowToken            
                });
            }

            strengthFromWonder += wonderCard.card.strength;
        });
    
    // Leaders
    let strengthFromLeader = 0;
    if (s.Leader!=null)
    {
        if (s.Leader.card.code == "LEA08") // Joan of Arc
        {
            if (s.Urbans!=null)
                s.Urbans.forEach(c => {
                    if (c.card.code.startsWith("UTE"))  // "U"rban "TE"mple
                    strengthFromLeader += (c.yellowToken * c.card.happy)           
                });
        }
        else if (s.Leader.card.code == "LEA15") // Napoleon
        {
            if (infCount>0)
                strengthFromLeader += 2;
            if (cavCount>0)
                strengthFromLeader += 2;
            if (artCount>0)
                strengthFromLeader += 2;
            if (airCount>0)
                strengthFromLeader += 2;
        }
        else if (s.Leader.card.code == "LEA06") // Alexander
        {
            strengthFromLeader += (infArray.length+cavArray.length)
        }
        strengthFromLeader += s.Leader.card.strength;
    }

    // TOTAL
    let strengthTotal: number = 
        strengthFromMilitary + 
        strengthFromTactic + 
        strengthFromAirMod + 
        strengthFromSpecials +
        strengthFromArena +
        strengthFromWonder +
        strengthFromLeader;

    if (s.Governament != null)
        strengthTotal += s.Governament.card.strength;

    console.log("--[  Military ]--");
    console.log("Strength", strengthFromMilitary);
    console.log("--[  Tactics ]--");
    console.log("Obsolete", countTacticsObs);
    console.log("Modern", countTactics);
    console.log("Strength", strengthFromTactic);
    console.log("--[  Air Mod ]--");
    console.log("Strength", strengthFromAirMod);
    console.log("----------------");
    console.log("--[ Leader ]--");
    console.log("Strength", strengthFromLeader);
    console.log("----------------");
    console.log("TOTAL", strengthTotal);
    console.log("----------------");

    return 1;
}

let tactic: TTATacticCard = {
    age: 1,
    name: "Asd Tactic",
    ninf: 2,
    ncav: 0,
    nart: 0,
    strength: 10,
    strengthObs: null,
    code: "",
    nair: 0
}

let infAgeA: BoardCard = {
    code: "MIN01",
    yellowToken: 3
}

let aircraft: BoardCard = {
    code: "MAI01",
    yellowToken: 2
}

let s: Scene = {
    Age: 1,
    Leader: {code:"LEA08", yellowToken:0},
    Infantry: [infAgeA],
    Cavallery: [],
    Artillery: [],
    AirForce: aircraft,
    Wonders: [{code:"WON05", yellowToken:0}],
    Urbans: [{code:"UTE01", yellowToken:2}],
    Tactic: tactic
}

console.log( StrenghtCalculation(s) );