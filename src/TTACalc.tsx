import { BoardCard, Scene, SceneValuesModifier, TacticInfoReport, TacticReport, TTAStrengthValue, TTASceneValues } from "./TTATypes";
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
    let resultStrength = new TTAStrengthValue();

    let countTactics: number = 0;
    let countTacticsObs: number = 0;

    let strengthFromTactic: number = 0;

    let infArray: Array<Token> = [];
    let cavArray: Array<Token> = [];
    let artArray: Array<Token> = [];
    let airArray: Array<Token> = [];

    FillCardsInScene(s);

    if (s.Tactic!=null)
    {
        resultStrength.tacticReport.TacticCard = s.Tactic;

        let ageTactic: number = s.Tactic.age;
        s.Infantry.forEach(c => {
            for (let index = 0; index < c.workers; index++) {
                infArray.push({
                    assignedCard: c,
                obsolete : (Math.abs(c.card.age-ageTactic)>1)
                });
            }
        });

        s.Cavallery.forEach(c => {
            for (let index = 0; index < c.workers; index++) {
                cavArray.push({
                    assignedCard: c,
                    obsolete : (Math.abs(c.card.age-ageTactic)>1)
                });
            }
        });

        s.Artillery.forEach(c => {
            for (let index = 0; index < c.workers; index++) {
                artArray.push({
                    assignedCard: c,
                    obsolete : (Math.abs(c.card.age-ageTactic)>1)
                });
            }
        });

        if (s.AirForce != null)
        {
            for (let index = 0; index < s.AirForce.workers; index++) {
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
                        for (let index = 0; index < c.workers; index++) {
                            infArray.push({
                                assignedCard: c,
                                // Each farm count as age "A" infantry -> A = 0
                                obsolete : (Math.abs(0-ageTactic)>1)
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

    
        let findTactic: boolean = false;
        let tacticStrength: number = s.Tactic.strength;
        let tacticStrengthObs: number = s.Tactic.strengthObs;

        if (s.Tactic.code == "TAC12") //Hussars
        {
            let maxAge: number = 0;
            s.Cavallery.forEach(c=>{
                if (c.workers>0)
                    maxAge = Math.max(maxAge, c.card.age);
            });
            tacticStrength += maxAge;
        }

        do {

            let nInf: number = 0;
            let nCav: number = 0;
            let nArt: number = 0;
            let isObsolete: boolean = false;

            let tInfo = new TacticInfoReport();

            while ((nCav!=s.Tactic.ncav) && (cavArray.length>0))
            {
                if (cavArray.pop().obsolete)
                    isObsolete = true;
                nCav++;

                tInfo.Cav.push('C');
            }

            if ((nCav!=s.Tactic.ncav) && (genghisMod))
            {
                if ((s.Tactic.ncav-nCav-infArray.length) <= 0 )
                    while ((nCav!=s.Tactic.ncav) && (infArray.length>0))
                    {
                        if (infArray.pop().obsolete)
                            isObsolete = true;
                        nCav++;

                        tInfo.Cav.push('I');
                    }    
            }

            while ((nInf!=s.Tactic.ninf) && (infArray.length>0))
            {
                if (infArray.pop().obsolete)
                    isObsolete = true;
                nInf++;

                tInfo.Inf.push('I');
            }
            
            while ((nArt!=s.Tactic.nart) && (artArray.length>0))
            {
                if (artArray.pop().obsolete)
                    isObsolete = true;
                nArt++;

                tInfo.Art.push('A');
            }
            

            if (dietrichMod)
            {
                if ((nArt>0)&&(nArt<s.Tactic.nart))
                {
                    nArt++;
                    tInfo.Art.push('Dietrich');
                }
                else if ((nCav>0)&&(nCav<s.Tactic.ncav))
                {
                    nCav++;
                    tInfo.Cav.push('Dietrich');
                }
                else if ((nInf>0)&&(nInf<s.Tactic.ninf))
                {
                    nInf++;
                    tInfo.Inf.push('Dietrich');
                }
            }

            findTactic = ((nInf == s.Tactic.ninf) && (nCav == s.Tactic.ncav) && (nArt == s.Tactic.nart))

            if (findTactic)
            {
                if (isObsolete)
                {
                    countTacticsObs++;
                    tInfo.strength = s.Tactic.strengthObs;
                }
                else
                {
                    countTactics++;
                    tInfo.strength = s.Tactic.strength;
                }
            }

            if (!tInfo.IsEmpty())
                resultStrength.tacticReport.Items.push(tInfo);

        } while (findTactic);

        if (s.Tactic.strengthObs>0)
            strengthFromTactic = (countTactics * tacticStrength) + (countTacticsObs * tacticStrengthObs);
        else
            strengthFromTactic = ((countTactics+countTacticsObs) * tacticStrength);    

        if (strengthFromTactic>0)
        {
            resultStrength.AddValue(strengthFromTactic, "Tactics (Obs: " + countTacticsObs + " - Mod: " + countTactics + ")");

            let strengthFromAirMod: number = 0;
            if (s.AirForce != null)
            {
                let airToken: number = s.AirForce.workers;
                let tokenUsed = Math.min(airToken, countTactics);
                strengthFromAirMod += tokenUsed * tacticStrength;

                airToken -= tokenUsed;
                if (airToken>0)
                    strengthFromAirMod += Math.min(s.AirForce.workers, countTacticsObs) * tacticStrengthObs;

                if (strengthFromAirMod>0)
                    resultStrength.AddValue(strengthFromAirMod, "Air force ability");

                for(let i =0;i<Math.min(s.AirForce.workers, resultStrength.tacticReport.Items.length);i++)
                    resultStrength.tacticReport.Items[i].AirMod = true;
            }
        }

        console.log(resultStrength.tacticReport);
    }

    return resultStrength;
}

function ElabCard(s: Scene, c: BoardCard, r: TTASceneValues, evalToken: Boolean = true)
{
    if (c!=null)
        if (c.card!=null)
        {
            let nTk = 1
            if (evalToken)
                nTk = c.workers;

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
            if ((c.card.ca * nTk)>0)
                r.ca.AddValue(c.card.ca * nTk, c.card.name);
            if ((c.card.ma * nTk)>0)
                r.ma.AddValue(c.card.ma * nTk, c.card.name);

            if (c.card.getSceneValuesModifier)
            {
                let sv: SceneValuesModifier = c.card.getSceneValuesModifier(s, r);
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

    s.Wonders.forEach(item => {
        ElabCard(s, item,r, false);
    });

    s.Wonders.forEach(item => {
        if (item.code=="WON06") // St. Peter's Basilica
            if (r.happy.Value()>0)
            {
                // -1 because "St. Peter's Basilica" does not increase it's own happy face by 1.
                r.happy.AddValue(r.happy.Value()-1, item.card.name + " (Mod)"); 
            }
    });

    
    ElabCard(s, s.Leader, r, false);
}

function ElabFoodConsumption(s:Scene, r: TTASceneValues)
{
    if (s.yellowToken<5)
        r.food.AddValue(-6, "FoodConsumption");
    else if (s.yellowToken<5)
        r.food.AddValue(-4, "FoodConsumption");
    else if (s.yellowToken<9)
        r.food.AddValue(-3, "FoodConsumption");
    else if (s.yellowToken<13)
        r.food.AddValue(-2, "FoodConsumption");
    else if (s.yellowToken<17)
        r.food.AddValue(-1, "FoodConsumption");
    else
        r.food.AddValue(0, "FoodConsumption");
}

export function TTASceneCalculation(s: Scene)
{
    let result: TTASceneValues = new TTASceneValues();

    result.yellowToken = s.yellowToken;

    // Consumption
    ElabFoodConsumption(s, result);

    // Tactic
    result.strength = StrenghtCalculation(s);

    // All cards
    ElabCards(s, result);
    /*
    let cultureTemp: number;
    s.Urbans.forEach(c => {
        cultureTemp = c.card.culture * c.workers;
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