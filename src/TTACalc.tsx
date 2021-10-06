import { BoardCard, Scene, SceneValuesModifier } from "./TTATypes";
import { TTARepoCards, GetBestFromArray } from "./TTARepo";

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
    let resultStrength = new TTASceneValue();

    let logs: LogItem[] = [];

    let countTactics: number = 0;
    let countTacticsObs: number = 0;

    let strengthFromTactic: number = 0;

    let infArray: Array<Token> = [];
    let cavArray: Array<Token> = [];
    let artArray: Array<Token> = [];
    let airArray: Array<Token> = [];

    FillCardsInScene(s);

    s.Infantry.forEach(c => {
        for (let index = 0; index < c.yellowToken; index++) {
            infArray.push({
                assignedCard: c,
                obsolete : (Math.abs(c.card.age-s.Age)>1)
            });
        }
    });

    s.Cavallery.forEach(c => {
        for (let index = 0; index < c.yellowToken; index++) {
            cavArray.push({
                assignedCard: c,
                obsolete : (Math.abs(c.card.age-s.Age)>1)
            });
        }
    });

    s.Artillery.forEach(c => {
        for (let index = 0; index < c.yellowToken; index++) {
            artArray.push({
                assignedCard: c,
                obsolete : (Math.abs(c.card.age-s.Age)>1)
            });
        }
    });

    if (s.AirForce != null)
    {
        for (let index = 0; index < s.AirForce.yellowToken; index++) {
            airArray.push({
                assignedCard: s.AirForce,
                obsolete: false
            });
        }
    }

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
        resultStrength.AddValue(strengthFromTactic, "Tactics (Obsolete: " + countTacticsObs + " - Modern: " + countTactics + ")");
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
            resultStrength.AddValue(strengthFromAirMod, "Air force ability");
    }

    // TOTAL
    let strengthTotal: number = 
        strengthFromTactic + 
        strengthFromAirMod;
    
    logs.forEach(l => {
        console.log(l.msg)
    });
    console.log("TOTAL", strengthTotal);
    console.log("----------------");

    return resultStrength;
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

function ElabCard(s: Scene, c: BoardCard, r: TTASceneValues, evalToken: Boolean = true)
{
    if (c!=null)
        if (c.card!=null)
        {
            let nTk = 1
            if (evalToken)
                nTk = c.yellowToken;

            if ((c.card.happy * nTk)>0)
                r.happy.AddValue(c.card.happy*nTk, c.card.name);
            if ((c.card.food * nTk)>0)
                r.food.AddValue(c.card.food*nTk, c.card.name);
            if ((c.card.resource * nTk)>0)
                r.resource.AddValue(c.card.resource * nTk, c.card.name);
            if ((c.card.science * nTk)>0)
                r.science.AddValue(c.card.science * nTk, c.card.name);
            if ((c.card.culture * nTk)>0)
                r.culture.AddValue(c.card.culture * nTk, c.card.name);
            if ((c.card.strength * nTk)>0)
                r.strength.AddValue(c.card.strength * nTk, c.card.name);

            if (c.card.getSceneValuesModifier)
            {
                let sv: SceneValuesModifier = c.card.getSceneValuesModifier(s);
                if (sv.culture!=0)
                    r.culture.AddValue(sv.culture, c.card.name + " (Mod)");
                if (sv.food!=0)
                    r.food.AddValue(sv.food, c.card.name + " (Mod)");
                if (sv.resource!=0)
                    r.resource.AddValue(sv.resource, c.card.name + " (Mod)");
                if (sv.science!=0)
                    r.science.AddValue(sv.science, c.card.name + " (Mod)");
                if (sv.happy!=0)
                    r.happy.AddValue(sv.happy, c.card.name + " (Mod)");
                if (sv.strength!=0)
                    r.strength.AddValue(sv.strength, c.card.name + " (Mod)");

            }
        }
}

function ElabCards(s:Scene, r: TTASceneValues) {

    s.Infantry.forEach(item => {
        ElabCard(s, item,r);
    });
    s.Cavallery.forEach(item => {
        ElabCard(s, item,r);
    });
    s.Artillery.forEach(item => {
        ElabCard(s, item,r);
    });
    ElabCard(s, s.AirForce, r);
    s.Productions.forEach(item => {
        ElabCard(s, item,r);
    });
    s.Urbans.forEach(item => {
        ElabCard(s, item,r);
    });
    s.Territories.forEach(item => {
        ElabCard(s, item,r);
    });
    s.Wonders.forEach(item => {
        ElabCard(s, item,r, false);
    });

    // Special
    let bestMil = GetBestFromArray(s.Special, "SMI");
    let bestCol = GetBestFromArray(s.Special, "SCL");
    let bestCiv = GetBestFromArray(s.Special, "SCI");
    let bestCon = GetBestFromArray(s.Special, "SCO");
    ElabCard(s, bestMil, r, false);
    ElabCard(s, bestCol, r, false);
    ElabCard(s, bestCiv, r, false);
    ElabCard(s, bestCon, r, false);
    
    ElabCard(s, s.Governament, r, false);
    ElabCard(s, s.Leader, r, false);
}

export function TTASceneCalculation(s: Scene)
{
    let result: TTASceneValues = new TTASceneValues();

    result.strength = StrenghtCalculation(s);

    ElabCards(s, result);
    /*
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
    */
    console.log("--- CULTURE ---");
    result.culture.Logs().forEach(l => {
        console.log(l.msg)
    });
    console.log("---");
    console.log("TOTAL", result.culture.Value());

    return result;
}