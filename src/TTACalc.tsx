import { BoardCard, Scene } from "./TTATypes";
import { TTARepoCards } from "./TTARepo";

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
}

function OrderByAge(a: Array<BoardCard>)
{
    a.sort(function(a,b){
        return a.card.age - b.card.age;
    });
}

function FillCardsInScene(s: Scene)
{
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

    OrderByAge(s.Wonders);
    OrderByAge(s.Infantry);
    OrderByAge(s.Cavallery);
    OrderByAge(s.Artillery);
    OrderByAge(s.Special);
    OrderByAge(s.Productions);
    OrderByAge(s.Urbans);
}

interface Token {
        assignedCard: BoardCard;
        obsolete: boolean;
    }

export function StrenghtCalculation(s: Scene)
{
    let logs: LogItem[] = [];

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

    FillCardsInScene(s);

    let tempCount: number = 0;
    s.Infantry.forEach(c => {
        for (let index = 0; index < c.yellowToken; index++) {
            infArray.push({
                assignedCard: c,
                obsolete : (Math.abs(c.card.age-s.Age)>1)
            });
        }
        tempCount += (c.yellowToken * c.card.strength);
    });
    infCount = infArray.length;
    strengthFromMilitary += tempCount;
    if (tempCount>0)
        logs.push({msg:"Infantry: " + tempCount});

    tempCount = 0;
    s.Cavallery.forEach(c => {
        for (let index = 0; index < c.yellowToken; index++) {
            cavArray.push({
                assignedCard: c,
                obsolete : (Math.abs(c.card.age-s.Age)>1)
            });
        }
        tempCount += (c.yellowToken * c.card.strength);
    });
    cavCount = cavArray.length;
    strengthFromMilitary += tempCount;
    if (tempCount>0)
        logs.push({msg:"Cavallery: " + tempCount});

    tempCount = 0;
    s.Artillery.forEach(c => {
        for (let index = 0; index < c.yellowToken; index++) {
            artArray.push({
                assignedCard: c,
                obsolete : (Math.abs(c.card.age-s.Age)>1)
            });
        }

        tempCount += (c.yellowToken * c.card.strength);
    });
    artCount = artArray.length;
    strengthFromMilitary += tempCount;
    if (tempCount>0)
        logs.push({msg:"Artillery: " + tempCount});

    tempCount = 0;
    if (s.AirForce != null)
    {
        for (let index = 0; index < s.AirForce.yellowToken; index++) {
            airArray.push({
                assignedCard: s.AirForce,
                obsolete: false
            });
        }
        tempCount += (s.AirForce.yellowToken * s.AirForce.card.strength);
    }
    airCount = airArray.length;
    strengthFromMilitary += tempCount;
    if (tempCount>0)
        logs.push({msg:"Artillery: " + tempCount});

    let genghisMod: boolean = false;
    let dietrichMod: boolean = false;
    if (s.Leader != null)
    {
        if (s.Leader.code=="LEA33") // Zizka
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
        else if (s.Leader.code=="LEA10") // Genghis
        {
            genghisMod = true;
        }
        else if (s.Leader.code=="LEA44") // Dietrich
        {
            dietrichMod = true;
        }
    }

    if (s.Tactic!=null)
    {
        let findTactic: boolean = false;

        do {

            let nInf: number = 0;
            let nCav: number = 0;
            let nArt: number = 0;
            let isObsolete: boolean = false;

            while ((nCav!=s.Tactic.ncav) && (cavArray.length>0))
            {
                if (cavArray.pop().obsolete)
                    isObsolete = true;
                nCav++;
            }

            if ((nCav!=s.Tactic.ncav) && (genghisMod))
            {
                if ((s.Tactic.ncav-nCav-infArray.length) <= 0 )
                    while ((nCav!=s.Tactic.ncav) && (infArray.length>0))
                    {
                        if (infArray.pop().obsolete)
                            isObsolete = true;
                        nCav++;
                    }    
            }

            while ((nInf!=s.Tactic.ninf) && (infArray.length>0))
            {
                if (infArray.pop().obsolete)
                    isObsolete = true;
                nInf++;
            }
            
            while ((nArt!=s.Tactic.nart) && (artArray.length>0))
            {
                if (artArray.pop().obsolete)
                    isObsolete = true;
                nArt++;
            }
            

            if (dietrichMod)
            {
                if ((nArt>0)&&(nArt<s.Tactic.nart))
                    nArt++;
                else if ((nCav>0)&&(nCav<s.Tactic.ncav))
                    nCav++;
                else if ((nInf>0)&&(nInf<s.Tactic.ninf))
                    nInf++;
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

        if (s.Tactic.strengthObs>0)
            strengthFromTactic = (countTactics * s.Tactic.strength) + (countTacticsObs * s.Tactic.strengthObs);
        else
            strengthFromTactic = ((countTactics+countTacticsObs) * s.Tactic.strength);
    }

    if (strengthFromTactic>0)
    {
        logs.push({
            msg: "Obsolete: " + countTacticsObs + "\n" +
                "Modern: " + countTactics + "\n" + 
                "Tactics: " + strengthFromTactic
        });
    }

    let strengthFromAirMod: number = 0;
    if (s.AirForce != null)
    {
        let airToken = s.AirForce.yellowToken;
        let tokenUsed = Math.min(s.AirForce.yellowToken, countTactics);
        strengthFromAirMod += tokenUsed * s.Tactic.strength;

        airToken += tokenUsed;
        strengthFromAirMod += Math.min(s.AirForce.yellowToken, countTacticsObs) * s.Tactic.strengthObs;

        if (strengthFromAirMod>0)
            logs.push({msg: "Airforce Mod: " + strengthFromTactic});
    }

    // SPECIAL BLUE CARD
    let strengthFromSpecials = 0;
    if (s.Special != null)
        s.Special.forEach(blueCard => {
            strengthFromSpecials = Math.max(strengthFromSpecials, blueCard.card.strength);
        });
    if (strengthFromSpecials>0)
        logs.push({msg: "Blue card: " + strengthFromSpecials});


    // URBAN CARD (Arena)
    let strengthFromArena = 0;
    if (s.Urbans != null)
        s.Urbans.forEach(urbanCard => {
            strengthFromArena += urbanCard.card.strength;
        });
    if (strengthFromArena>0)
        logs.push({msg: "Arena: " + strengthFromArena});

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
    if (strengthFromWonder>0)
        logs.push({msg: "Wonder: " + strengthFromWonder});
    
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
        else if (s.Leader.card.code == "LEA43") // Sklodowska
        {
            // TODO: Your best lab gives you strength equal to its level
        }
        strengthFromLeader += s.Leader.card.strength;
    }
    if (strengthFromLeader>0)
        logs.push({msg: "Leader: " + strengthFromLeader});

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

    //console.log("--[  Military ]--");
    //console.log("Strength", strengthFromMilitary);
    //console.log("--[  Tactics ]--");
    //console.log("Obsolete", countTacticsObs);
    //console.log("Modern", countTactics);
    //console.log("Strength", strengthFromTactic);
    //console.log("--[  Air Mod ]--");
    //console.log("Strength", strengthFromAirMod);
    //console.log("----------------");
    //console.log("--[ Leader ]--");
    //console.log("Strength", strengthFromLeader);
    //console.log("----------------");
    
    logs.forEach(l => {
        console.log(l.msg)
    });
    console.log("TOTAL", strengthTotal);
    console.log("----------------");

    return 1;
}

export class TTASceneValue {
    private value: number;
    private logs: LogItem[];

    constructor() {
        this.Reset();
    }

    public Value() {
        return this.value;
    }

    public AddValue(v: number, m: string = "")
    {
        this.value += v;
        if (m!="")
            this.logs.push({msg: m + ": " + v});
    }

    public Logs() {
        return this.logs;
    }

    public Reset() {
        this.value = 0;
        this.logs = [];
    }
}

export class TTASceneValues {
    public food: TTASceneValue;
    public resource: TTASceneValue;
    public culture: TTASceneValue;
    public strength: TTASceneValue;
    public happy: TTASceneValue;
    public science: TTASceneValue;

    constructor() {
        this.food = new TTASceneValue();
        this.resource = new TTASceneValue();
        this.culture = new TTASceneValue();
        this.strength = new TTASceneValue();
        this.happy = new TTASceneValue();
        this.science = new TTASceneValue();
    }
};


export function TTASceneCalculation(s: Scene)
{
    let result: TTASceneValues = new TTASceneValues();

    let cultureTemp: number;
    s.Urbans.forEach(c => {
        cultureTemp = c.card.culture * c.yellowToken;
        if (cultureTemp>0)
            result.culture.AddValue(cultureTemp, c.card.name);
    });

    s.Wonders.forEach(c => {
        cultureTemp = c.card.culture;
        if (cultureTemp>0)
            result.culture.AddValue(cultureTemp, c.card.name);
    });

    if (s.Leader)
        if (s.Leader.card.getSceneValuesModifier)
            console.log(s.Leader.card.getSceneValuesModifier(s));

    console.log("--- CULTURE ---");
    result.culture.Logs().forEach(l => {
        console.log(l.msg)
    });
    console.log("---");
    console.log("TOTAL", result.culture.Value());

    return result;
}