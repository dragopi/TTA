import { TTACard, TTATacticCard, SceneValuesModifier, Scene, BoardCard } from "./TTATypes";


function GetBestLab(s: Scene)
{
    return GetBestFromArray(s.Urbans, "ULA");
}
function GetBestTemple(s: Scene)
{
    return GetBestFromArray(s.Urbans, "UTE");
}
function GetBestTheater(s: Scene)
{
    return GetBestFromArray(s.Urbans, "UTH");
}
function GetBestLibrary(s: Scene)
{
    return GetBestFromArray(s.Urbans, "ULI");
}

export function GetBestFromArray(a: Array<BoardCard>, codeprefix: string)
{
    let result: BoardCard = null;
    let nAge: number = -1;
    a.forEach(c => {
        if((c.code.startsWith(codeprefix))&&(c.workers>0))
        {
            if(c.card.age>nAge)
            {
                result = c;
                nAge = c.card.age;
            }
        }
    });
    return result;
}

let CARD_PFA01: TTACard = {
    code: "PFA01",
    type: "Production",
    subtype: "Farm",
    name: "Agriculture",
    age: 0,
    light_cost: 0,
    rock_cost: 2,
    food: 1,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_PFA02: TTACard = {
    code: "PFA02",
    type: "Production",
    subtype: "Farm",
    name: "Irrigation",
    age: 1,
    light_cost: 3,
    rock_cost: 4,
    food: 2,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_PFA03: TTACard = {
    code: "PFA03",
    type: "Production",
    subtype: "Farm",
    name: "Selective Breeding",
    age: 2,
    light_cost: 5,
    rock_cost: 6,
    food: 3,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_PFA04: TTACard = {
    code: "PFA04",
    type: "Production",
    subtype: "Farm",
    name: "Mechanized Agriculture",
    age: 3,
    light_cost: 7,
    rock_cost: 8,
    food: 5,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_PMI01: TTACard = {
    code: "PMI01",
    type: "Production",
    subtype: "Mine",
    name: "Bronze",
    age: 0,
    light_cost: 0,
    rock_cost: 2,
    food: null,
    resource: 1,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_PMI02: TTACard = {
    code: "PMI02",
    type: "Production",
    subtype: "Mine",
    name: "Iron",
    age: 1,
    light_cost: 5,
    rock_cost: 5,
    food: null,
    resource: 2,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_PMI03: TTACard = {
    code: "PMI03",
    type: "Production",
    subtype: "Mine",
    name: "Coal",
    age: 2,
    light_cost: 7,
    rock_cost: 8,
    food: null,
    resource: 3,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_PMI04: TTACard = {
    code: "PMI04",
    type: "Production",
    subtype: "Mine",
    name: "Oil",
    age: 3,
    light_cost: 9,
    rock_cost: 11,
    food: null,
    resource: 5,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_UTE01: TTACard = {
    code: "UTE01",
    type: "Urban",
    subtype: "Temple",
    name: "Religion",
    age: 0,
    light_cost: 0,
    rock_cost: 3,
    food: null,
    resource: null,
    culture: 1,
    strength: null,
    happy: 1,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_UTE02: TTACard = {
    code: "UTE02",
    type: "Urban",
    subtype: "Temple",
    name: "Theology",
    age: 1,
    light_cost: 2,
    rock_cost: 5,
    food: null,
    resource: null,
    culture: 1,
    strength: null,
    happy: 2,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_UTE03: TTACard = {
    code: "UTE03",
    type: "Urban",
    subtype: "Temple",
    name: "Organized Religion",
    age: 2,
    light_cost: 4,
    rock_cost: 7,
    food: null,
    resource: null,
    culture: 1,
    strength: null,
    happy: 3,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_ULA01: TTACard = {
    code: "ULA01",
    type: "Urban",
    subtype: "Lab",
    name: "Philosophy",
    age: 0,
    light_cost: 0,
    rock_cost: 3,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: 1,
    ca: null,
    ma: null,
    text: null
}

let CARD_ULA02: TTACard = {
    code: "ULA02",
    type: "Urban",
    subtype: "Lab",
    name: "Alchemy",
    age: 1,
    light_cost: 4,
    rock_cost: 6,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: 2,
    ca: null,
    ma: null,
    text: null
}

let CARD_ULA03: TTACard = {
    code: "ULA03",
    type: "Urban",
    subtype: "Lab",
    name: "Scientific Method",
    age: 2,
    light_cost: 6,
    rock_cost: 8,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: 3,
    ca: null,
    ma: null,
    text: null
}

let CARD_ULA04: TTACard = {
    code: "ULA04",
    type: "Urban",
    subtype: "Lab",
    name: "Computers",
    age: 3,
    light_cost: 8,
    rock_cost: 10,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: 5,
    ca: null,
    ma: null,
    text: null
}

let CARD_UAR01: TTACard = {
    code: "UAR01",
    type: "Urban",
    subtype: "Arena",
    name: "Bread and Circuses",
    age: 1,
    light_cost: 3,
    rock_cost: 4,
    food: null,
    resource: null,
    culture: null,
    strength: 1,
    happy: 2,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_UAR02: TTACard = {
    code: "UAR02",
    type: "Urban",
    subtype: "Arena",
    name: "Team Sports",
    age: 2,
    light_cost: 5,
    rock_cost: 6,
    food: null,
    resource: null,
    culture: null,
    strength: 2,
    happy: 3,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_UAR03: TTACard = {
    code: "UAR03",
    type: "Urban",
    subtype: "Arena",
    name: "Professional Sports",
    age: 3,
    light_cost: 7,
    rock_cost: 8,
    food: null,
    resource: null,
    culture: null,
    strength: 3,
    happy: 4,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_ULI01: TTACard = {
    code: "ULI01",
    type: "Urban",
    subtype: "Library",
    name: "Printing Press",
    age: 1,
    light_cost: 3,
    rock_cost: 4,
    food: null,
    resource: null,
    culture: 1,
    strength: null,
    happy: null,
    science: 1,
    ca: null,
    ma: null,
    text: null
}

let CARD_ULI02: TTACard = {
    code: "ULI02",
    type: "Urban",
    subtype: "Library",
    name: "Journalism",
    age: 2,
    light_cost: 6,
    rock_cost: 8,
    food: null,
    resource: null,
    culture: 2,
    strength: null,
    happy: null,
    science: 2,
    ca: null,
    ma: null,
    text: null
}

let CARD_ULI03: TTACard = {
    code: "ULI03",
    type: "Urban",
    subtype: "Library",
    name: "Multimedia",
    age: 3,
    light_cost: 9,
    rock_cost: 11,
    food: null,
    resource: null,
    culture: 3,
    strength: null,
    happy: null,
    science: 3,
    ca: null,
    ma: null,
    text: null
}

let CARD_UTH01: TTACard = {
    code: "UTH01",
    type: "Urban",
    subtype: "Theater",
    name: "Drama",
    age: 1,
    light_cost: 4,
    rock_cost: 5,
    food: null,
    resource: null,
    culture: 2,
    strength: null,
    happy: 1,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_UTH02: TTACard = {
    code: "UTH02",
    type: "Urban",
    subtype: "Theater",
    name: "Opera",
    age: 2,
    light_cost: 7,
    rock_cost: 9,
    food: null,
    resource: null,
    culture: 3,
    strength: null,
    happy: 1,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_UTH03: TTACard = {
    code: "UTH03",
    type: "Urban",
    subtype: "Theater",
    name: "Movies",
    age: 3,
    light_cost: 10,
    rock_cost: 12,
    food: null,
    resource: null,
    culture: 4,
    strength: null,
    happy: 1,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_MIN01: TTACard = {
    code: "MIN01",
    type: "Military",
    subtype: "Infantry",
    name: "Warriors",
    age: 0,
    light_cost: 0,
    rock_cost: 2,
    food: null,
    resource: null,
    culture: null,
    strength: 1,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_MIN02: TTACard = {
    code: "MIN02",
    type: "Military",
    subtype: "Infantry",
    name: "Swordsmen",
    age: 1,
    light_cost: 3,
    rock_cost: 3,
    food: null,
    resource: null,
    culture: null,
    strength: 2,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_MIN03: TTACard = {
    code: "MIN03",
    type: "Military",
    subtype: "Infantry",
    name: "Riflemen",
    age: 2,
    light_cost: 5,
    rock_cost: 5,
    food: null,
    resource: null,
    culture: null,
    strength: 3,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_MIN04: TTACard = {
    code: "MIN04",
    type: "Military",
    subtype: "Infantry",
    name: "Modern Infantry",
    age: 3,
    light_cost: 8,
    rock_cost: 7,
    food: null,
    resource: null,
    culture: null,
    strength: 5,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_MCA01: TTACard = {
    code: "MCA01",
    type: "Military",
    subtype: "Cavalry",
    name: "Knights",
    age: 1,
    light_cost: 4,
    rock_cost: 3,
    food: null,
    resource: null,
    culture: null,
    strength: 2,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_MCA02: TTACard = {
    code: "MCA02",
    type: "Military",
    subtype: "Cavalry",
    name: "Calvarymen",
    age: 2,
    light_cost: 6,
    rock_cost: 5,
    food: null,
    resource: null,
    culture: null,
    strength: 3,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_MCA03: TTACard = {
    code: "MCA03",
    type: "Military",
    subtype: "Cavalry",
    name: "Tanks",
    age: 3,
    light_cost: 9,
    rock_cost: 7,
    food: null,
    resource: null,
    culture: null,
    strength: 5,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_MAR01: TTACard = {
    code: "MAR01",
    type: "Military",
    subtype: "Artillery",
    name: "Cannon",
    age: 2,
    light_cost: 7,
    rock_cost: 5,
    food: null,
    resource: null,
    culture: null,
    strength: 3,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_MAR02: TTACard = {
    code: "MAR02",
    type: "Military",
    subtype: "Artillery",
    name: "Rockets",
    age: 3,
    light_cost: 10,
    rock_cost: 7,
    food: null,
    resource: null,
    culture: null,
    strength: 5,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_MAI01: TTACard = {
    code: "MAI01",
    type: "Military",
    subtype: "Air Force",
    name: "Air Forces",
    age: 3,
    light_cost: 11,
    rock_cost: 7,
    food: null,
    resource: null,
    culture: null,
    strength: 5,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Each unit also doubles the Tactics card bonus for 1 army"
}

let CARD_WON01: TTACard = {
    code: "WON01",
    type: "Wonder",
    subtype: "Wonder",
    name: "Hanging Gardens",
    age: 0,
    light_cost: null,
    rock_cost: 6,
    food: null,
    resource: null,
    culture: 1,
    strength: null,
    happy: 2,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_WON02: TTACard = {
    code: "WON02",
    type: "Wonder",
    subtype: "Wonder",
    name: "Library of Alexandria",
    age: 0,
    light_cost: null,
    rock_cost: 6,
    food: null,
    resource: null,
    culture: 1,
    strength: null,
    happy: null,
    science: 1,
    ca: null,
    ma: null,
    text: "You may have 1 extra civil and 1 extra military card in your hand"
}

let CARD_WON03: TTACard = {
    code: "WON03",
    type: "Wonder",
    subtype: "Wonder",
    name: "Colossus",
    age: 0,
    light_cost: null,
    rock_cost: 6,
    food: null,
    resource: null,
    culture: 1,
    strength: 1,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "You have +1 bonus when colonizing a new territory"
}

let CARD_WON04: TTACard = {
    code: "WON04",
    type: "Wonder",
    subtype: "Wonder",
    name: "Pyramids",
    age: 0,
    light_cost: null,
    rock_cost: 6,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: 1,
    ma: null,
    text: null
}

let CARD_WON05: TTACard = {
    code: "WON05",
    type: "Wonder",
    subtype: "Wonder",
    name: "Great Wall",
    age: 1,
    light_cost: null,
    rock_cost: 10,
    food: null,
    resource: null,
    culture: 1,
    strength: null,
    happy: 1,
    science: null,
    ca: null,
    ma: null,
    text: "Adds +1 to your strength for each infantry and artillery unit",
    getSceneValuesModifier: (s:Scene) => {
        let result = new SceneValuesModifier();
        let countToken: number = 0;
        s.Infantry.forEach(c => {
            countToken += c.workers            
        });
        s.Artillery.forEach(c => {
            countToken += c.workers
        });
        result.strength += countToken;
        return result;
    }
}

let CARD_WON06: TTACard = {
    code: "WON06",
    type: "Wonder",
    subtype: "Wonder",
    name: "St. Peter's Basilica",
    age: 1,
    light_cost: null,
    rock_cost: 8,
    food: null,
    resource: null,
    culture: 2,
    strength: null,
    happy: 1,
    science: null,
    ca: null,
    ma: null,
    text: "Each of your other cards that produce at least 1 happy face produce 1 more happy face. St. Peter's Basilica produces +2 culture and +1 happy face. St. Peter's Basilica does not increase it's own happy face by 1."
}

let CARD_WON07: TTACard = {
    code: "WON07",
    type: "Wonder",
    subtype: "Wonder",
    name: "Universitas Carolina",
    age: 1,
    light_cost: null,
    rock_cost: 9,
    food: null,
    resource: null,
    culture: 1,
    strength: null,
    happy: null,
    science: 2,
    ca: null,
    ma: null,
    text: null
}

let CARD_WON08: TTACard = {
    code: "WON08",
    type: "Wonder",
    subtype: "Wonder",
    name: "Taj Mahal",
    age: 1,
    light_cost: null,
    rock_cost: 8,
    food: null,
    resource: null,
    culture: 3,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_WON09: TTACard = {
    code: "WON09",
    type: "Wonder",
    subtype: "Wonder",
    name: "Transcontinental Railroad",
    age: 2,
    light_cost: null,
    rock_cost: 12,
    food: null,
    resource: null,
    culture: null,
    strength: 5,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "One of your best mines produces twice as many resources"
}

let CARD_WON10: TTACard = {
    code: "WON10",
    type: "Wonder",
    subtype: "Wonder",
    name: "Eiffel Tower",
    age: 2,
    light_cost: null,
    rock_cost: 13,
    food: null,
    resource: null,
    culture: 4,
    strength: null,
    happy: 1,
    science: null,
    ca: null,
    ma: null,
    text: null
}

let CARD_WON11: TTACard = {
    code: "WON11",
    type: "Wonder",
    subtype: "Wonder",
    name: "Kremlin",
    age: 2,
    light_cost: null,
    rock_cost: 12,
    food: null,
    resource: null,
    culture: 3,
    strength: null,
    happy: -2,
    science: null,
    ca: 1,
    ma: 1,
    text: null
}

let CARD_WON12: TTACard = {
    code: "WON12",
    type: "Wonder",
    subtype: "Wonder",
    name: "Ocean Liner Service",
    age: 2,
    light_cost: null,
    rock_cost: 12,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Once per turn, you can increase your population without a civil action for 5 food less"
}

let CARD_WON13: TTACard = {
    code: "WON13",
    type: "Wonder",
    subtype: "Wonder",
    name: "Hollywood",
    age: 3,
    light_cost: null,
    rock_cost: 16,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Immediately score 2 culture per level of each of your theaters and libraries"
}

let CARD_WON14: TTACard = {
    code: "WON14",
    type: "Wonder",
    subtype: "Wonder",
    name: "Internet",
    age: 3,
    light_cost: null,
    rock_cost: 14,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Immediately score 2 culture per level of each of your labs and libraries"
}

let CARD_WON15: TTACard = {
    code: "WON15",
    type: "Wonder",
    subtype: "Wonder",
    name: "First Space Flight",
    age: 3,
    light_cost: null,
    rock_cost: 16,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Immediately score 1 culture per level of each of your technology cards"
}

let CARD_WON16: TTACard = {
    code: "WON16",
    type: "Wonder",
    subtype: "Wonder",
    name: "Fast Food Chains",
    age: 3,
    light_cost: null,
    rock_cost: 16,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Immediately score 1 culture every military/urban worker, 2 culture every farmer/miner"
}

let CARD_WON17: TTACard = {
    code: "WON17",
    type: "Wonder",
    subtype: "Wonder",
    name: "Colosseum",
    age: 0,
    light_cost: null,
    rock_cost: 6,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: 1,
    science: null,
    ca: null,
    ma: 1,
    text: "Gain an extra happy face and one military action. You develop infantry an cavalry technologies with a science discount equal to their level. Whenever you do, score 2 culture."
}

let CARD_WON18: TTACard = {
    code: "WON18",
    type: "Wonder",
    subtype: "Wonder",
    name: "Roman Roads",
    age: 0,
    light_cost: null,
    rock_cost: 5,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Gain an extra yellow token and an extra blue token. This effect varies by age: At Age Ⅰ: produce 1 resource. At Age Ⅱ: produce 1 science. At Age Ⅲ: produce 2 culture.",
    getSceneValuesModifier: (s:Scene) => {
        let result = new SceneValuesModifier();
        if (s.Age==1)
            result.resource = 1;
        else if (s.Age==2)
            result.science = 1;
        else if (s.Age>2)
            result.culture = 1;
        return result;
    }
}

let CARD_WON19: TTACard = {
    code: "WON19",
    type: "Wonder",
    subtype: "Wonder",
    name: "Stonenhenge",
    age: 0,
    light_cost: null,
    rock_cost: 6,
    food: null,
    resource: null,
    culture: 1,
    strength: null,
    happy: 1,
    science: null,
    ca: null,
    ma: null,
    text: "1 happy face, +1 culture. For each stage of Stonehenge you build, immediately score science equal to that stage's cost."
}

let CARD_WON20: TTACard = {
    code: "WON20",
    type: "Wonder",
    subtype: "Wonder",
    name: "Acropolis",
    age: 0,
    light_cost: null,
    rock_cost: 5,
    food: null,
    resource: null,
    culture: 1,
    strength: 1,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "1 strength, +1 culture. Your urban building limit is 1 higher. Peaceful change of government costs you 1 science less for each urban building you have."
}

let CARD_WON21: TTACard = {
    code: "WON21",
    type: "Wonder",
    subtype: "Wonder",
    name: "Machu Picchu",
    age: 1,
    light_cost: null,
    rock_cost: 9,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "1 blue token. Your best Age A or Age I farm and your best Age A and Age I mine produce one extra blue token.",
    getSceneValuesModifier: (s:Scene) => {
        let result = new SceneValuesModifier();
        let bestFarm = GetBestFromArray(s.Productions, "PFA");
        if (bestFarm)
            result.food += (bestFarm.card.food);
        let bestMine = GetBestFromArray(s.Productions, "PMI");
        if (bestMine)
            result.resource += (bestMine.card.resource);
        return result;
    }
}

let CARD_WON22: TTACard = {
    code: "WON22",
    type: "Wonder",
    subtype: "Wonder",
    name: "Himeji Castle",
    age: 1,
    light_cost: null,
    rock_cost: 9,
    food: null,
    resource: null,
    culture: 2,
    strength: 2,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "When evaluating a war or an aggression, you may choose one of your units. Add its strength to your strength temporarily. It also gives you 3 culture if attacking or 3 strength if defending. After evaluation, sacrifice the unit."
}

let CARD_WON23: TTACard = {
    code: "WON23",
    type: "Wonder",
    subtype: "Wonder",
    name: "Forbidden City",
    age: 1,
    light_cost: null,
    rock_cost: 8,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: 1,
    ma: null,
    text: "Up to two of your discontent workers are ignored."
}

let CARD_WON24: TTACard = {
    code: "WON24",
    type: "Wonder",
    subtype: "Wonder",
    name: "Silk Road",
    age: 1,
    light_cost: null,
    rock_cost: 7,
    food: null,
    resource: null,
    culture: 2,
    strength: null,
    happy: null,
    science: 1,
    ca: null,
    ma: null,
    text: "The benefit of the first action card you play on your turn are increased by 1. This effect applies as soon as the first stage is built."
}

let CARD_WON25: TTACard = {
    code: "WON25",
    type: "Wonder",
    subtype: "Wonder",
    name: "Harvard College",
    age: 2,
    light_cost: null,
    rock_cost: 11,
    food: null,
    resource: null,
    culture: 1,
    strength: null,
    happy: null,
    science: 3,
    ca: null,
    ma: null,
    text: "Once per turn, you may play an action card you took during that turn."
}

let CARD_WON26: TTACard = {
    code: "WON26",
    type: "Wonder",
    subtype: "Wonder",
    name: "Statue of Liberty",
    age: 2,
    light_cost: null,
    rock_cost: 12,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Your government produce culture equal to its level."
}

let CARD_WON27: TTACard = {
    code: "WON27",
    type: "Wonder",
    subtype: "Wonder",
    name: "Louvre Museum",
    age: 2,
    light_cost: null,
    rock_cost: 13,
    food: null,
    resource: null,
    culture: 2,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "The Louver keeps its blue tokens when completed. Each can be spent during your Action Phase to gain 2 resource. The Louvre produce an extra 1 culture per blue token on it."
}

let CARD_WON28: TTACard = {
    code: "WON28",
    type: "Wonder",
    subtype: "Wonder",
    name: "Suez Canal",
    age: 2,
    light_cost: null,
    rock_cost: 12,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "When you complete this wonder, you may colonize a territory in your hand. You produce an extra 1 resource for each colony you have."
}

let CARD_WON29: TTACard = {
    code: "WON29",
    type: "Wonder",
    subtype: "Wonder",
    name: "Empire State Building",
    age: 3,
    light_cost: null,
    rock_cost: 17,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Compare your science, culture, and strength rating, and your food and resource production with your opponents. For each you have higher than anyone else, score 7/8/9 culture (in a 2/3/4-player game)."
}

let CARD_WON30: TTACard = {
    code: "WON30",
    type: "Wonder",
    subtype: "Wonder",
    name: "United Nations",
    age: 3,
    light_cost: null,
    rock_cost: 16,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Score 4 culture for each wonder, each special (blue) technology, or each type of urban building you have, whichever is highest. You may reveal an Age Ⅲ event from your hand, Evaluate it immediately, then return it to your hand."
}

let CARD_WON31: TTACard = {
    code: "WON31",
    type: "Wonder",
    subtype: "Wonder",
    name: "International Red Cross",
    age: 3,
    light_cost: null,
    rock_cost: 15,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Other player may also work on this wonder. Unlike you, they are limited to 1 stage per turn. For each stage, the player who build it immediately scores 6 culture. When completed, you score 1 culture for each colony in play."
}

let CARD_WON32: TTACard = {
    code: "WON32",
    type: "Wonder",
    subtype: "Wonder",
    name: "Manhattan Projects",
    age: 3,
    light_cost: null,
    rock_cost: 14,
    food: null,
    resource: null,
    culture: null,
    strength: 13,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "You immediately score culture equal to your science rating."
}

let CARD_LEA01: TTACard = {
    code: "LEA01",
    type: "Leader",
    subtype: "Leader",
    name: "Julius Caesar",
    age: 0,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: 1,
    happy: null,
    science: null,
    ca: null,
    ma: 1,
    text: "You gain +1 strength and +1 military action. Once per game, you may play another political action after already playing one."
}

let CARD_LEA02: TTACard = {
    code: "LEA02",
    type: "Leader",
    subtype: "Leader",
    name: "Homer",
    age: 0,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: 1,
    science: null,
    ca: null,
    ma: null,
    text: "Each round, you have extra 1 resource for building military; +1 happy face. When you replace Homer, instead of getting a civil action back, you may slide Homer under one of your finished wonders; that wonder now has +1 happy face. This happy face is not removed due to Ravages of Time."
}

let CARD_LEA03: TTACard = {
    code: "LEA03",
    type: "Leader",
    subtype: "Leader",
    name: "Moses",
    age: 0,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Increasing your population costs you 1 food less"
}

let CARD_LEA04: TTACard = {
    code: "LEA04",
    type: "Leader",
    subtype: "Leader",
    name: "Hammurabi",
    age: 0,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: 1,
    ma: -1,
    text: "You can use a military action as a civil action. Taking a leader from the card row costs you 1 action less."
}

let CARD_LEA05: TTACard = {
    code: "LEA05",
    type: "Leader",
    subtype: "Leader",
    name: "Aristotle",
    age: 0,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Every time you take a technology card from the card row, you score 1 science point"
}

let CARD_LEA06: TTACard = {
    code: "LEA06",
    type: "Leader",
    subtype: "Leader",
    name: "Alexander the Great",
    age: 0,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Each of your military units gives you an additional +1 strength. As a political action, you may remove Alexander the Great from play to add a yellow token to your yellow bank.",
    getSceneValuesModifier: (s:Scene) => {
        let result = new SceneValuesModifier();
        s.Infantry.forEach(c => {
            result.strength += c.workers;
        });
        s.Cavallery.forEach(c => {
            result.strength += c.workers;
        });
        s.Artillery.forEach(c => {
            result.strength += c.workers;
        });
        result.strength += s.AirForce.workers;
        return result;
    }
}

let CARD_LEA07: TTACard = {
    code: "LEA07",
    type: "Leader",
    subtype: "Leader",
    name: "Michelangelo",
    age: 1,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Temples, theaters, & wonders produce 1 extra culture per happy face; you don't spend extra civil actions per wonder for wonder cards",
    getSceneValuesModifier: (s:Scene) => {
        let result = new SceneValuesModifier();
        s.Urbans.forEach(c => {
            if (c.card.code.startsWith("UT"))
                result.culture += (c.card.happy * c.workers);
        });
        s.Wonders.forEach(c => {
            result.culture += (c.card.happy);
        });
        return result;
    }
}

let CARD_LEA08: TTACard = {
    code: "LEA08",
    type: "Leader",
    subtype: "Leader",
    name: "Joan of Arc",
    age: 1,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: 1,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: 1,
    text: "Temples and your government give you +1 strength for each happy face, during the Politics Phase you can see the top card of the Current Events deck.",
    getSceneValuesModifier: (s:Scene) => {
        let result = new SceneValuesModifier();
        if (s.Governament)
            result.strength += s.Governament.card.happy;
        s.Urbans.forEach(c => {
            if(c.card.code.startsWith("UTE"))
                result.strength += (c.card.happy * c.workers);
        });
        return result;
    }
}

let CARD_LEA09: TTACard = {
    code: "LEA09",
    type: "Leader",
    subtype: "Leader",
    name: "Leonardo Da Vinci",
    age: 1,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Best lab or library produces extra science: +1 per level; When you play a technology card, produce 1 resource",
    getSceneValuesModifier: (s:Scene) => {
        let result = new SceneValuesModifier();
        let bestLab = GetBestLab(s);
        let bestLib = GetBestLibrary(s);
        if ((bestLab)&&(bestLib))
            result.science += Math.max(bestLab.card.age+1, bestLib.card.age);
        else if (bestLib)
            result.science += bestLib.card.age;
        else if (bestLab)
            result.science += (bestLab.card.age+1);
        return result;
    }
}

let CARD_LEA10: TTACard = {
    code: "LEA10",
    type: "Leader",
    subtype: "Leader",
    name: "Genghis Khan",
    age: 1,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "You may count one of your infantry as calvary for tactics purposes. Gives +3 culture if your civilization is one of the two strongest (strongest in 2 player) civilizations."
}

let CARD_LEA11: TTACard = {
    code: "LEA11",
    type: "Leader",
    subtype: "Leader",
    name: "Christopher Columbus",
    age: 1,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Once during the game, you can use political action to colonize a territory in your hand without sacrificing units"
}

let CARD_LEA12: TTACard = {
    code: "LEA12",
    type: "Leader",
    subtype: "Leader",
    name: "Frederick Barbarossa",
    age: 1,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "For 1 military action, you can increase your population by 1 worker, and build a new military unit with it. Costs 1 food and 1 resource less."
}

let CARD_LEA13: TTACard = {
    code: "LEA13",
    type: "Leader",
    subtype: "Leader",
    name: "William Shakespeare",
    age: 2,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: 1,
    science: null,
    ca: null,
    ma: null,
    text: "Each library-theater pair produces an additional 2 culture. If you have a library you can discover and build theaters for one science/resource less, and vice versa. +1 happy face."
}

let CARD_LEA14: TTACard = {
    code: "LEA14",
    type: "Leader",
    subtype: "Leader",
    name: "James Cook",
    age: 2,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "When colonizing, each colonization bonus card has an additional +1. Colonies produce 2 culture each",
    getSceneValuesModifier: (s:Scene) => {
        let result = new SceneValuesModifier();
        s.Territories.forEach(c => {
            result.culture += 2;
        });
        return result;
    }
}

let CARD_LEA15: TTACard = {
    code: "LEA15",
    type: "Leader",
    subtype: "Leader",
    name: "Napoleon Bonaparte",
    age: 2,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: 2,
    text: "You get a +2 military bonus for each different type of unit you have",
    getSceneValuesModifier: (s:Scene) => {
        let result = new SceneValuesModifier();
        let countArmy: number = 0;
        s.Infantry.forEach(c => {countArmy += c.workers;});
        if(countArmy>0)
            result.strength += 2;
        countArmy = 0;
        s.Cavallery.forEach(c => {countArmy += c.workers;});
        if(countArmy>0)
            result.strength += 2;
        countArmy = 0;
        s.Artillery.forEach(c => {countArmy += c.workers;});
        if(countArmy>0)
            result.strength += 2;
        countArmy = 0;
        if (s.AirForce.workers>0)
            result.strength += 2;
        return result;
    }
}

let CARD_LEA16: TTACard = {
    code: "LEA16",
    type: "Leader",
    subtype: "Leader",
    name: "Maximillien Robespierre",
    age: 2,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: 1,
    text: "Revolutions cost you all your military actions instead of all your civil actions. Gain 3 culture when declaring a revolution."
}

let CARD_LEA17: TTACard = {
    code: "LEA17",
    type: "Leader",
    subtype: "Leader",
    name: "J.S. Bach",
    age: 2,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "It costs you 1 science less to discover theater techs; theaters cost 1 less resource to build and produce 1 extra culture"
}

let CARD_LEA18: TTACard = {
    code: "LEA18",
    type: "Leader",
    subtype: "Leader",
    name: "Isaac Newton",
    age: 2,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "You best lab or library produces extra science equal to its level; every time you play a technology card, get 1 spent civil action back"
}

let CARD_LEA19: TTACard = {
    code: "LEA19",
    type: "Leader",
    subtype: "Leader",
    name: "Albert Einstein",
    age: 3,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Your best lab or library produces extra science: 1 per level; Score 3 culture when you play a tech card"
}

let CARD_LEA20: TTACard = {
    code: "LEA20",
    type: "Leader",
    subtype: "Leader",
    name: "Mahatma Gandhi",
    age: 3,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: 2,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Mahatma Gandhi produces +2 culture. You may not play aggression or war cards; opponents pay 2x the military actions to play them against you."
}

let CARD_LEA21: TTACard = {
    code: "LEA21",
    type: "Leader",
    subtype: "Leader",
    name: "Rock & Roll Icon",
    age: 3,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: 2,
    science: null,
    ca: null,
    ma: null,
    text: "Best theater produces twice as much culture"
}

let CARD_LEA22: TTACard = {
    code: "LEA22",
    type: "Leader",
    subtype: "Leader",
    name: "Nikolai Tesla",
    age: 3,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Each lab produces resources: 1 per level; it costs other players 1 extra resource to build or upgrade labs or libraries"
}

let CARD_LEA23: TTACard = {
    code: "LEA23",
    type: "Leader",
    subtype: "Leader",
    name: "Winston Churchill",
    age: 3,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Each turn, you can choose to either gain 3 culture or 3 resources for military units + 3 science for military unit technologies."
}

let CARD_LEA24: TTACard = {
    code: "LEA24",
    type: "Leader",
    subtype: "Leader",
    name: "Sid Meier",
    age: 3,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Each of your labs produces culture: 1 per level; each lab produces 1 less science",
    getSceneValuesModifier: (s:Scene) => {
        let result = new SceneValuesModifier();
        
        s.Urbans.forEach(c => {
            if ((c.card.code.startsWith("ULA"))&&(c.workers>0))
            {
                result.culture += (c.card.age * c.workers);
                result.science -= (c.workers);
            }
        });
        return result;
    }
}

let CARD_LEA25: TTACard = {
    code: "LEA25",
    type: "Leader",
    subtype: "Leader",
    name: "Boudica",
    age: 0,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "At the start of your turn: if you are one of the two weakest players, gain two resource for building and upgrading units. Otherwise, gain 1 food, 1 resource, or 1 science point."
}

let CARD_LEA26: TTACard = {
    code: "LEA26",
    type: "Leader",
    subtype: "Leader",
    name: "Cleopatra",
    age: 0,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "During your action phase, you have an extra resource for building wonders or for building and upgrading urban buildings."
}

let CARD_LEA27: TTACard = {
    code: "LEA27",
    type: "Leader",
    subtype: "Leader",
    name: "Hippocrates",
    age: 0,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "At the start of your turn, take an extra yellow token from the box and put it above your government card(up to a maximum of 3). After losing yellow tokens at the end of Age I, Ⅱ and Ⅲ, add one of these yellow tokens to your yellow bank."
}

let CARD_LEA28: TTACard = {
    code: "LEA28",
    type: "Leader",
    subtype: "Leader",
    name: "Confucius",
    age: 0,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Whenever you prepare an event and when Confucius leaves play, score 1 science point. You can prepare non-event military cards as events. When revealed, non-event cards are treated as \"Everyone gains 1 science point\" events"
}

let CARD_LEA29: TTACard = {
    code: "LEA29",
    type: "Leader",
    subtype: "Leader",
    name: "Sun Tzu",
    age: 0,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: 1,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "You gain +1 strength. You skip your Make Tactics Available step during Start-of-Action. You draw 2 additional military cards during your End-of-Turn. When this card leaves play, slide it under your currant tactic, it permanently gains +1 strength."
}

let CARD_LEA30: TTACard = {
    code: "LEA30",
    type: "Leader",
    subtype: "Leader",
    name: "Ashoka",
    age: 0,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "If you have civil cards of two different colors in your hand, you produce an extra resource. If three or more colors, you produce an extra food and an extra resource."
}

let CARD_LEA31: TTACard = {
    code: "LEA31",
    type: "Leader",
    subtype: "Leader",
    name: "Isabella of Castile",
    age: 1,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: 1,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    box: 2,
    text: "You produce an extra resource and gains two extra Blue tokens. During colonization, you may pay 1, 3, or 6 resource to gain +1, +2, +3 colonization point."
}

let CARD_LEA32: TTACard = {
    code: "LEA32",
    type: "Leader",
    subtype: "Leader",
    name: "Eleanor of Aquitaine",
    age: 1,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Whenever you prepare an event, you draw two military cards. Scores 1 culture For each military card you have to discard at the end of your turn. When Eleanor is replaced, get 3 civil actions back instead of 1."
}

let CARD_LEA33: TTACard = {
    code: "LEA33",
    type: "Leader",
    subtype: "Leader",
    name: "Jan Žižka",
    age: 1,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: 1,
    text: "You gain an extra military action. For Purpose of tactics, each of your farm can be considered as an Age A infantry or artillery unit. Each of your armies produce 1 culture."
}

let CARD_LEA34: TTACard = {
    code: "LEA34",
    type: "Leader",
    subtype: "Leader",
    name: "Nostradamus",
    age: 1,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "When you prepare an event, score an extra 3 culture. When Another player prepare an event, look at it. When determining who is the weakest during events, or defending against aggressions, you have +3 strength."
}

let CARD_LEA35: TTACard = {
    code: "LEA35",
    type: "Leader",
    subtype: "Leader",
    name: "Johannes Gutenberg",
    age: 1,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Each turn, you have an extra civil action for taking, developing, building or upgrading your labs and libraries, with a discount of 1 science or 1 resource. Whenever you use this action, score 2 culture."
}

let CARD_LEA36: TTACard = {
    code: "LEA36",
    type: "Leader",
    subtype: "Leader",
    name: "Saladin",
    age: 1,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Immediately after your Action Phase, decide either to increase your strength by 2 or to gain 1 civil action. Either lasts until the next decision or until Saladin leaves play."
}

let CARD_LEA37: TTACard = {
    code: "LEA37",
    type: "Leader",
    subtype: "Leader",
    name: "Catherine the Great",
    age: 2,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: 2,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: 1,
    text: "Gain an extra military action and produce 2 culture. Once per game, as a political action, you may cause each civilization with a lower strength rating to lose 1 yellow token. if at least one token is lose (two in a 4-player game), you gain 1 yellow token."
}

let CARD_LEA38: TTACard = {
    code: "LEA38",
    type: "Leader",
    subtype: "Leader",
    name: "Maria Theresa",
    age: 2,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Whenever you gain or increase your population, score 1 science and 1 culture. At the start of your Action Phase, you get 1 resource for building and upgrading military units(3 if you are one of the two weakest players)."
}

let CARD_LEA39: TTACard = {
    code: "LEA39",
    type: "Leader",
    subtype: "Leader",
    name: "James Watt",
    age: 2,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Your farms and mines and their technologies have a reduced cost: At Age Ⅲ: -4 resource, -4 science. At Age Ⅱ: -2 resource, -2 science. When Watt leaves play, score culture equal to the production of your best farm or mine."
}

let CARD_LEA40: TTACard = {
    code: "LEA40",
    type: "Leader",
    subtype: "Leader",
    name: "Alfred Nobel",
    age: 2,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: 2,
    strength: null,
    happy: null,
    science: 2,
    ca: null,
    ma: null,
    text: "You gain +2 strength and produce +2 science If Nobel is replaced, do not get 1 civil action back. Instead, put this card by the culture track. From then on, any civilization scores 4 culture at the end of a turn in which it developed at least 2 technologies."
}

let CARD_LEA41: TTACard = {
    code: "LEA41",
    type: "Leader",
    subtype: "Leader",
    name: "Antoni Gaudí",
    age: 2,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Developing an urban building technology cost you 1 science less for each other type of urban buildings you have. Your best urban building of each type produce 1 extra culture.",
    getSceneValuesModifier: (s:Scene) => {
        let levelLab: number = 0;
        let levelTheology: number = 0;
        let levelTheater: number = 0;
        let levelLibrary: number = 0;
        let levelArena: number = 0;
        s.Urbans.forEach(c => {
            if ((c.card.code.startsWith("UTH"))&&(c.workers>0))
                levelTheater = Math.max(levelTheater, c.card.age);
            else if ((c.card.code.startsWith("UTE"))&&(c.workers>0))
                levelTheology = Math.max(levelTheology, c.card.age);
            else if ((c.card.code.startsWith("ULI"))&&(c.workers>0))
                levelLibrary = Math.max(levelLibrary, c.card.age);
            else if ((c.card.code.startsWith("UAR"))&&(c.workers>0))
                levelArena = Math.max(levelArena, c.card.age);
                else if ((c.card.code.startsWith("ULA"))&&(c.workers>0))
                levelLab= Math.max(levelLab, c.card.age);
        });

        let result = new SceneValuesModifier();
        result.culture = (levelTheater + levelTheology + levelLibrary + levelArena + levelLab);
        return result;
    }
}

let CARD_LEA42: TTACard = {
    code: "LEA42",
    type: "Leader",
    subtype: "Leader",
    name: "Charles Darwin",
    age: 2,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Each of your temples gives you one happy face less. Each of your labs and libraries produces 1 extra culture. Taking a technology card cost you 1 civil action less, but no less than 1.",
    getSceneValuesModifier: (s:Scene) => {
        let result = new SceneValuesModifier();
        s.Urbans.forEach(c => {
            if (c.card.subtype == "Temple")
                result.happy -= c.workers;
            else if (c.card.code.startsWith("ULA")||c.card.code.startsWith("ULI"))
                result.culture += c.workers;
        });
        return result;
    }
}

let CARD_LEA43: TTACard = {
    code: "LEA43",
    type: "Leader",
    subtype: "Leader",
    name: "Marie Curie Sklodowska",
    age: 3,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Your best mine produces science equal to its level. Your best lab gives you strength equal to its level. Sklodowska produces culture equal to the better of these two.",
    getSceneValuesModifier: (s:Scene) => {
        let result = new SceneValuesModifier();
        let levelMine: number = 0;
        s.Productions.forEach(c => {
            if ((c.card.subtype == "Mine")&&(c.workers>0))
                levelMine = Math.max(levelMine, (c.card.age+1));
        });
        let levelLab: number = 0;
        s.Urbans.forEach(c => {
            if ((c.card.subtype == "Lab")&&(c.workers>0))
                levelLab = Math.max(levelLab, (c.card.age+1));
        });

        result.science = levelMine;
        result.strength = levelLab;
        result.culture = Math.max(levelMine, levelLab);
        return result;
    }
}

let CARD_LEA44: TTACard = {
    code: "LEA44",
    type: "Leader",
    subtype: "Leader",
    name: "Marlene Dietrich",
    age: 3,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Each of your best theaters produces an extra 1 culture and 1 happy face. One of your infantry, cavalry, or artillery units counts twice for purpose of tactics.",
    getSceneValuesModifier: (s:Scene) => {
        let result = new SceneValuesModifier();
        let levelTheater: number = 0;
        let workers: number = 0;
        s.Urbans.forEach(c => {
            if ((c.card.subtype == "Theater")&&(c.workers>0))
                if (c.card.age>levelTheater)
                {
                    levelTheater = c.card.age;
                    workers = c.workers;
                }
        });
        
        result.happy = workers;
        result.culture = workers;
        return result;
    }
}

let CARD_LEA45: TTACard = {
    code: "LEA45",
    type: "Leader",
    subtype: "Leader",
    name: "Steve Jobs",
    age: 3,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Your best lab gives you happy faces equal to its level. Whenever you develop a technology, you may pay 1 resource to score 4 culture.",
    getSceneValuesModifier: (s:Scene) => {
        let result = new SceneValuesModifier();
        let levelLab: number = 0;
        s.Urbans.forEach(c => {
            if ((c.card.subtype == "Lab")&&(c.workers>0))
                levelLab = Math.max(levelLab, (c.card.age)+1);
        });
        result.happy = levelLab;
        return result;
    }
}

let CARD_LEA46: TTACard = {
    code: "LEA46",
    type: "Leader",
    subtype: "Leader",
    name: "Nelson Mandela",
    age: 3,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: 2,
    strength: null,
    happy: null,
    science: null,
    ca: 1,
    ma: null,
    text: "You gain an extra civil action and produce 2 culture. If you have no discontent workers, taking this card costs 2 civil actions more. Ate the end of your turn, score 1 culture for each surplus happy face.",
    getSceneValuesModifier: (s:Scene) => {
        let result = new SceneValuesModifier();
        // TODO: Add Population value and hapy face sum
        return result;
    }
}

let CARD_LEA47: TTACard = {
    code: "LEA47",
    type: "Leader",
    subtype: "Leader",
    name: "Pierre de Cubertin",
    age: 3,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Each of your arenas produces 2 culture. Once per game, before your political action, you may declare the Olympic Games: score 8 culture, and until the start of your next turn, whoever plays a war or aggression loses 8 culture.",
    getSceneValuesModifier: (s:Scene) => {
        let result = new SceneValuesModifier();
        s.Urbans.forEach(c => {
            if (c.card.subtype == "Arena")
                result.culture += (c.workers*2);
        });
        return result;
    }
}

let CARD_LEA48: TTACard = {
    code: "LEA48",
    type: "Leader",
    subtype: "Leader",
    name: "Ian Flemming",
    age: 3,
    light_cost: null,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Your best library and theater each produce extra culture equal to their levels. At the beginning of your Politics Phase, you may look at one player's military cards. You cannot choose the same player on two consecutive turns.",
    getSceneValuesModifier: (s:Scene) => {
        let levelTheater: number = 0;
        let levelLibrary: number = 0;
        s.Urbans.forEach(c => {
            if ((c.card.subtype == "Theater")&&(c.workers>0))
                levelTheater = Math.max(levelTheater, c.card.age);
            else if ((c.card.subtype == "Library")&&(c.workers>0))
                levelLibrary = Math.max(levelLibrary, c.card.age);
        });

        let result = new SceneValuesModifier();
        result.culture = (levelTheater + levelLibrary);
        return result;
    }
}

let CARD_GOV01: TTACard = {
    code: "GOV01",
    type: "Govt",
    subtype: "Govt",
    name: "Despotism",
    age: 0,
    light_cost: 0,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: 4,
    ma: 2,
    text: "Building limit: 2"
}

let CARD_GOV02: TTACard = {
    code: "GOV02",
    type: "Govt",
    subtype: "Govt",
    name: "Monarchy",
    age: 1,
    light_cost: 9,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: 5,
    ma: 3,
    text: "Building limit: 3"
}

let CARD_GOV03: TTACard = {
    code: "GOV03",
    type: "Govt",
    subtype: "Govt",
    name: "Theocracy",
    age: 1,
    light_cost: 7,
    rock_cost: null,
    food: null,
    resource: null,
    culture: 1,
    strength: null,
    happy: 2,
    science: null,
    ca: 4,
    ma: 3,
    text: "Building limit: 3"
}

let CARD_GOV04: TTACard = {
    code: "GOV04",
    type: "Govt",
    subtype: "Govt",
    name: "Constitutional Monarchy",
    age: 2,
    light_cost: 12,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: 6,
    ma: 4,
    text: "Building limit: 3"
}

let CARD_GOV05: TTACard = {
    code: "GOV05",
    type: "Govt",
    subtype: "Govt",
    name: "Republic",
    age: 2,
    light_cost: 14,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: 7,
    ma: 2,
    text: "Building limit: 3"
}

let CARD_GOV06: TTACard = {
    code: "GOV06",
    type: "Govt",
    subtype: "Govt",
    name: "Communism",
    age: 3,
    light_cost: 17,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: -1,
    science: null,
    ca: 7,
    ma: 5,
    text: "Building limit: 4"
}

let CARD_GOV07: TTACard = {
    code: "GOV07",
    type: "Govt",
    subtype: "Govt",
    name: "Democracy",
    age: 3,
    light_cost: 21,
    rock_cost: null,
    food: null,
    resource: null,
    culture: 2,
    strength: null,
    happy: null,
    science: null,
    ca: 7,
    ma: 3,
    text: "Building limit: 4"
}

let CARD_GOV08: TTACard = {
    code: "GOV08",
    type: "Govt",
    subtype: "Govt",
    name: "Fundamentalism",
    age: 3,
    light_cost: 19,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: 5,
    happy: null,
    science: null,
    ca: 6,
    ma: 5,
    text: "Building limit: 4"
}

let CARD_SMI01: TTACard = {
    code: "SMI01",
    type: "Special",
    subtype: "Military",
    name: "Warfare",
    age: 1,
    light_cost: 4,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: 1,
    happy: null,
    science: null,
    ca: null,
    ma: 1,
    text: null
}

let CARD_SMI02: TTACard = {
    code: "SMI02",
    type: "Special",
    subtype: "Military",
    name: "Strategy",
    age: 2,
    light_cost: 8,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: 3,
    happy: null,
    science: null,
    ca: null,
    ma: 2,
    text: null
}

let CARD_SMI03: TTACard = {
    code: "SMI03",
    type: "Special",
    subtype: "Military",
    name: "Military Theory",
    age: 3,
    light_cost: 12,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: 5,
    happy: null,
    science: null,
    ca: null,
    ma: 3,
    text: null
}

let CARD_SCI01: TTACard = {
    code: "SCI01",
    type: "Special",
    subtype: "Civil",
    name: "Code of Laws",
    age: 1,
    light_cost: 6,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: 1,
    ma: null,
    text: null
}

let CARD_SCI02: TTACard = {
    code: "SCI02",
    type: "Special",
    subtype: "Civil",
    name: "Justice System",
    age: 2,
    light_cost: 7,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: 1,
    ma: null,
    text: "Add 3 blue tokens"
}

let CARD_SCI03: TTACard = {
    code: "SCI03",
    type: "Special",
    subtype: "Civil",
    name: "Civil Service",
    age: 3,
    light_cost: 10,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: 2,
    ma: null,
    text: "Add 3 blue tokens"
}

let CARD_SCL01: TTACard = {
    code: "SCL01",
    type: "Special",
    subtype: "Colonization",
    name: "Cartography",
    age: 1,
    light_cost: 4,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: 1,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Get a +2 bonus when colonizing new territories"
}

let CARD_SCL02: TTACard = {
    code: "SCL02",
    type: "Special",
    subtype: "Colonization",
    name: "Navigation",
    age: 2,
    light_cost: 6,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: 2,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Get a +3 bonus when colonizing new territories"
}

let CARD_SCL03: TTACard = {
    code: "SCL03",
    type: "Special",
    subtype: "Colonization",
    name: "Satellites",
    age: 3,
    light_cost: 8,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: 3,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Get a +4 bonus when colonizing new territories"
}

let CARD_SCO01: TTACard = {
    code: "SCO01",
    type: "Special",
    subtype: "Construction",
    name: "Masonry",
    age: 1,
    light_cost: 3,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Level I, II, and III buildings cost 1 less resource; can build up to 2 stages of wonder in 1 civil action"
}

let CARD_SCO02: TTACard = {
    code: "SCO02",
    type: "Special",
    subtype: "Construction",
    name: "Architecture",
    age: 2,
    light_cost: 6,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Level I buildings cost 1 less resource; level II & III 2 less; can build up to 3 stages of wonder in 1 civil action"
}

let CARD_SCO03: TTACard = {
    code: "SCO03",
    type: "Special",
    subtype: "Construction",
    name: "Engineering",
    age: 3,
    light_cost: 9,
    rock_cost: null,
    food: null,
    resource: null,
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Level I buildings cost 1 less resource; level II 2 less, and level III 3 less; can build up to 4 stages of wonder in 1 civil action"
}

let CARD_TAC01: TTATacticCard = {
    code: "TAC01",
    name: "Fighting Band",
    age: 1,
    strength: 1,
    strengthObs: 0,
    ninf: 2,
    ncav: 0,
    nart: 0,
    nair: 0
}

let CARD_TAC02: TTATacticCard = {
    code: "TAC02",
    name: "Legion",
    age: 1,
    strength: 2,
    strengthObs: 0,
    ninf: 3,
    ncav: 0,
    nart: 0,
    nair: 0
}

let CARD_TAC03: TTATacticCard = {
    code: "TAC03",
    name: "Phalanx",
    age: 1,
    strength: 3,
    strengthObs: 0,
    ninf: 2,
    ncav: 1,
    nart: 0,
    nair: 0
}

let CARD_TAC04: TTATacticCard = {
    code: "TAC04",
    name: "Heavy Cavalry",
    age: 1,
    strength: 4,
    strengthObs: 0,
    ninf: 0,
    ncav: 3,
    nart: 0,
    nair: 0
}

let CARD_TAC05: TTATacticCard = {
    code: "TAC05",
    name: "Medieval Army",
    age: 1,
    strength: 2,
    strengthObs: 0,
    ninf: 1,
    ncav: 1,
    nart: 0,
    nair: 0
}

let CARD_TAC06: TTATacticCard = {
    code: "TAC06",
    name: "Napoleonic Army",
    age: 2,
    strength: 7,
    strengthObs: 4,
    ninf: 1,
    ncav: 1,
    nart: 1,
    nair: 0
}

let CARD_TAC07: TTATacticCard = {
    code: "TAC07",
    name: "Defensive Army",
    age: 2,
    strength: 6,
    strengthObs: 3,
    ninf: 2,
    ncav: 0,
    nart: 1,
    nair: 0
}

let CARD_TAC08: TTATacticCard = {
    code: "TAC08",
    name: "Conquistadores",
    age: 2,
    strength: 5,
    strengthObs: 3,
    ninf: 1,
    ncav: 2,
    nart: 0,
    nair: 0
}

let CARD_TAC09: TTATacticCard = {
    code: "TAC09",
    name: "Fortifications",
    age: 2,
    strength: 5,
    strengthObs: 3,
    ninf: 0,
    ncav: 0,
    nart: 2,
    nair: 0
}

let CARD_TAC10: TTATacticCard = {
    code: "TAC10",
    name: "Classic Army",
    age: 2,
    strength: 8,
    strengthObs: 4,
    ninf: 2,
    ncav: 2,
    nart: 0,
    nair: 0
}

let CARD_TAC11: TTATacticCard = {
    code: "TAC11",
    name: "Mobile Artillery",
    age: 2,
    strength: 5,
    strengthObs: 3,
    ninf: 0,
    ncav: 1,
    nart: 1,
    nair: 0
}

let CARD_TAC12: TTATacticCard = {
    code: "TAC12",
    name: "Hussars",
    age: 2,
    strength: 2,
    strengthObs: 0,
    ninf: 0,
    ncav: 2,
    nart: 0,
    nair: 0
}

let CARD_TAC13: TTATacticCard = {
    code: "TAC13",
    name: "Entrenchments",
    age: 3,
    strength: 9,
    strengthObs: 5,
    ninf: 1,
    ncav: 0,
    nart: 2,
    nair: 0
}

let CARD_TAC14: TTATacticCard = {
    code: "TAC14",
    name: "Modern Army",
    age: 3,
    strength: 13,
    strengthObs: 7,
    ninf: 2,
    ncav: 1,
    nart: 1,
    nair: 0
}

let CARD_TAC15: TTATacticCard = {
    code: "TAC15",
    name: "Mechanized Army",
    age: 3,
    strength: 10,
    strengthObs: 5,
    ninf: 0,
    ncav: 1,
    nart: 2,
    nair: 0
}

let CARD_TAC16: TTATacticCard = {
    code: "TAC16",
    name: "Shock Troops",
    age: 3,
    strength: 11,
    strengthObs: 6,
    ninf: 1,
    ncav: 3,
    nart: 0,
    nair: 0
}

let CARD_TAC17: TTATacticCard = {
    code: "TAC17",
    name: "Positional Army",
    age: 3,
    strength: 12,
    strengthObs: 6,
    ninf: 2,
    ncav: 0,
    nart: 2,
    nair: 0
}

let CARD_TER01: TTACard = {
    code: "TER01",
    name: "Vast Territory",
    age: 1,
    strength: 0,
    pop: 3,
    box: -1,
    happy: 0,
    ca: 0,
    ma: 0,
    text: "Add 3 food",
    type: "Territory",
    subtype: "Territory",
    light_cost: 0,
    rock_cost: 0,
    food: 0,
    resource: 0,
    culture: 0,
    science: 0
}

let CARD_TER02: TTACard = {
    code: "TER02",
    name: "Wealthy Territory",
    age: 1,
    strength: 0,
    pop: 0,
    box: 3,
    happy: 0,
    ca: 0,
    ma: 0,
    text: "add 6 rock",
    type: "Territory",
    subtype: "Territory",
    light_cost: 0,
    rock_cost: 0,
    food: 0,
    resource: 0,
    culture: 0,
    science: 0
}

let CARD_TER03: TTACard = {
    code: "TER03",
    name: "Inhabited Territory",
    age: 1,
    strength: 0,
    pop: 2,
    box: 0,
    happy: 0,
    ca: 0,
    ma: 0,
    text: "Add 1 pop to reserve and 1 ready to play",
    type: "Territory",
    subtype: "Territory",
    light_cost: 0,
    rock_cost: 0,
    food: 0,
    resource: 0,
    culture: 0,
    science: 0
}

let CARD_TER04: TTACard = {
    code: "TER04",
    name: "Strategic Territory",
    age: 1,
    strength: 2,
    pop: 0,
    box: 0,
    happy: 0,
    ca: 0,
    ma: 0,
    text: "Add 3 military card",
    type: "Territory",
    subtype: "Territory",
    light_cost: 0,
    rock_cost: 0,
    food: 0,
    resource: 0,
    culture: 0,
    science: 0
}

let CARD_TER05: TTACard = {
    code: "TER05",
    name: "Historic Territory",
    age: 1,
    strength: 0,
    pop: 0,
    box: 0,
    happy: 1,
    ca: 0,
    ma: 0,
    text: "Add 6 culture point",
    type: "Territory",
    subtype: "Territory",
    light_cost: 0,
    rock_cost: 0,
    food: 0,
    resource: 0,
    culture: 0,
    science: 0
}

let CARD_TER06: TTACard = {
    code: "TER06",
    name: "Developed Territory",
    age: 1,
    strength: 0,
    pop: 1,
    box: 1,
    happy: 0,
    ca: 0,
    ma: 0,
    text: "Add 3 science",
    type: "Territory",
    subtype: "Territory",
    light_cost: 0,
    rock_cost: 0,
    food: 0,
    resource: 0,
    culture: 0,
    science: 0
}

let CARD_TER07: TTACard = {
    code: "TER07",
    name: "Vast Territory",
    age: 2,
    strength: 0,
    pop: 4,
    box: -1,
    happy: 0,
    ca: 0,
    ma: 0,
    text: "Add 4 food",
    type: "Territory",
    subtype: "Territory",
    light_cost: 0,
    rock_cost: 0,
    food: 0,
    resource: 0,
    culture: 0,
    science: 0
}

let CARD_TER08: TTACard = {
    code: "TER08",
    name: "Wealthy Territory",
    age: 2,
    strength: 0,
    pop: 0,
    box: 4,
    happy: 0,
    ca: 0,
    ma: 0,
    text: "Add 9 rock",
    type: "Territory",
    subtype: "Territory",
    light_cost: 0,
    rock_cost: 0,
    food: 0,
    resource: 0,
    culture: 0,
    science: 0
}

let CARD_TER09: TTACard = {
    code: "TER09",
    name: "Inhabited Territory",
    age: 2,
    strength: 0,
    pop: 3,
    box: 0,
    happy: 0,
    ca: 0,
    ma: 0,
    text: "Add 3 pop to reserve and 2 ready to play",
    type: "Territory",
    subtype: "Territory",
    light_cost: 0,
    rock_cost: 0,
    food: 0,
    resource: 0,
    culture: 0,
    science: 0
}

let CARD_TER10: TTACard = {
    code: "TER10",
    name: "Strategic Territory",
    age: 2,
    strength: 4,
    pop: 0,
    box: 0,
    happy: 0,
    ca: 0,
    ma: 0,
    text: "Add 5 military card",
    type: "Territory",
    subtype: "Territory",
    light_cost: 0,
    rock_cost: 0,
    food: 0,
    resource: 0,
    culture: 0,
    science: 0
}

let CARD_TER11: TTACard = {
    code: "TER11",
    name: "Historic Territory",
    age: 2,
    strength: 0,
    pop: 0,
    box: 0,
    happy: 2,
    ca: 0,
    ma: 0,
    text: "Add 11 culture point",
    type: "Territory",
    subtype: "Territory",
    light_cost: 0,
    rock_cost: 0,
    food: 0,
    resource: 0,
    culture: 0,
    science: 0
}

let CARD_TER12: TTACard = {
    code: "TER12",
    name: "Developed Territory",
    age: 1,
    strength: 0,
    pop: 2,
    box: 2,
    happy: 0,
    ca: 0,
    ma: 0,
    text: "Add 5 science",
    type: "Territory",
    subtype: "Territory",
    light_cost: 0,
    rock_cost: 0,
    food: 0,
    resource: 0,
    culture: 0,
    science: 0
}

let CARD_TER13: TTACard = {
    code: "TER13",
    name: "Autonomous Territory",
    age: 2,
    strength: 0,
    pop: 0,
    box: -2,
    happy: 0,
    ca: 1,
    ma: 1,
    text: "Choose one: Gain 4 science, 5 rock, 6 food, or 7 culture point.",
    type: "Territory",
    subtype: "Territory",
    light_cost: 0,
    rock_cost: 0,
    food: 0,
    resource: 0,
    culture: 0,
    science: 0
}

export class TTARepoCards {

    private static _instance: TTARepoCards;
    private internalRepo: Map<string, TTACard>;
    private internalTacticRepo: Map<string, TTATacticCard>;    
    private FillRepo() {
        this.internalRepo = new Map<string, TTACard>([
            ["PFA01", CARD_PFA01],
            ["PFA02", CARD_PFA02],
            ["PFA03", CARD_PFA03],
            ["PFA04", CARD_PFA04],
            ["PMI01", CARD_PMI01],
            ["PMI02", CARD_PMI02],
            ["PMI03", CARD_PMI03],
            ["PMI04", CARD_PMI04],
            ["UTE01", CARD_UTE01],
            ["UTE02", CARD_UTE02],
            ["UTE03", CARD_UTE03],
            ["ULA01", CARD_ULA01],
            ["ULA02", CARD_ULA02],
            ["ULA03", CARD_ULA03],
            ["ULA04", CARD_ULA04],
            ["UAR01", CARD_UAR01],
            ["UAR02", CARD_UAR02],
            ["UAR03", CARD_UAR03],
            ["ULI01", CARD_ULI01],
            ["ULI02", CARD_ULI02],
            ["ULI03", CARD_ULI03],
            ["UTH01", CARD_UTH01],
            ["UTH02", CARD_UTH02],
            ["UTH03", CARD_UTH03],
            ["MIN01", CARD_MIN01],
            ["MIN02", CARD_MIN02],
            ["MIN03", CARD_MIN03],
            ["MIN04", CARD_MIN04],
            ["MCA01", CARD_MCA01],
            ["MCA02", CARD_MCA02],
            ["MCA03", CARD_MCA03],
            ["MAR01", CARD_MAR01],
            ["MAR02", CARD_MAR02],
            ["MAI01", CARD_MAI01],
            ["WON01", CARD_WON01],
            ["WON02", CARD_WON02],
            ["WON03", CARD_WON03],
            ["WON04", CARD_WON04],
            ["WON05", CARD_WON05],
            ["WON06", CARD_WON06],
            ["WON07", CARD_WON07],
            ["WON08", CARD_WON08],
            ["WON09", CARD_WON09],
            ["WON10", CARD_WON10],
            ["WON11", CARD_WON11],
            ["WON12", CARD_WON12],
            ["WON13", CARD_WON13],
            ["WON14", CARD_WON14],
            ["WON15", CARD_WON15],
            ["WON16", CARD_WON16],
            ["WON17", CARD_WON17],
            ["WON18", CARD_WON18],
            ["WON19", CARD_WON19],
            ["WON20", CARD_WON20],
            ["WON21", CARD_WON21],
            ["WON22", CARD_WON22],
            ["WON23", CARD_WON23],
            ["WON24", CARD_WON24],
            ["WON25", CARD_WON25],
            ["WON26", CARD_WON26],
            ["WON27", CARD_WON27],
            ["WON28", CARD_WON28],
            ["WON29", CARD_WON29],
            ["WON30", CARD_WON30],
            ["WON31", CARD_WON31],
            ["WON32", CARD_WON32],
            ["LEA01", CARD_LEA01],
            ["LEA02", CARD_LEA02],
            ["LEA03", CARD_LEA03],
            ["LEA04", CARD_LEA04],
            ["LEA05", CARD_LEA05],
            ["LEA06", CARD_LEA06],
            ["LEA07", CARD_LEA07],
            ["LEA08", CARD_LEA08],
            ["LEA09", CARD_LEA09],
            ["LEA10", CARD_LEA10],
            ["LEA11", CARD_LEA11],
            ["LEA12", CARD_LEA12],
            ["LEA13", CARD_LEA13],
            ["LEA14", CARD_LEA14],
            ["LEA15", CARD_LEA15],
            ["LEA16", CARD_LEA16],
            ["LEA17", CARD_LEA17],
            ["LEA18", CARD_LEA18],
            ["LEA19", CARD_LEA19],
            ["LEA20", CARD_LEA20],
            ["LEA21", CARD_LEA21],
            ["LEA22", CARD_LEA22],
            ["LEA23", CARD_LEA23],
            ["LEA24", CARD_LEA24],
            ["LEA25", CARD_LEA25],
            ["LEA26", CARD_LEA26],
            ["LEA27", CARD_LEA27],
            ["LEA28", CARD_LEA28],
            ["LEA29", CARD_LEA29],
            ["LEA30", CARD_LEA30],
            ["LEA31", CARD_LEA31],
            ["LEA32", CARD_LEA32],
            ["LEA33", CARD_LEA33],
            ["LEA34", CARD_LEA34],
            ["LEA35", CARD_LEA35],
            ["LEA36", CARD_LEA36],
            ["LEA37", CARD_LEA37],
            ["LEA38", CARD_LEA38],
            ["LEA39", CARD_LEA39],
            ["LEA40", CARD_LEA40],
            ["LEA41", CARD_LEA41],
            ["LEA42", CARD_LEA42],
            ["LEA43", CARD_LEA43],
            ["LEA44", CARD_LEA44],
            ["LEA45", CARD_LEA45],
            ["LEA46", CARD_LEA46],
            ["LEA47", CARD_LEA47],
            ["LEA48", CARD_LEA48],
            ["GOV01", CARD_GOV01],
            ["GOV02", CARD_GOV02],
            ["GOV03", CARD_GOV03],
            ["GOV04", CARD_GOV04],
            ["GOV05", CARD_GOV05],
            ["GOV06", CARD_GOV06],
            ["GOV07", CARD_GOV07],
            ["GOV08", CARD_GOV08],
            ["SMI01", CARD_SMI01],
            ["SMI02", CARD_SMI02],
            ["SMI03", CARD_SMI03],
            ["SCI01", CARD_SCI01],
            ["SCI02", CARD_SCI02],
            ["SCI03", CARD_SCI03],
            ["SCL01", CARD_SCL01],
            ["SCL02", CARD_SCL02],
            ["SCL03", CARD_SCL03],
            ["SCO01", CARD_SCO01],
            ["SCO02", CARD_SCO02],
            ["SCO03", CARD_SCO03],
            ["TER01", CARD_TER01],
            ["TER02", CARD_TER02],
            ["TER03", CARD_TER03],
            ["TER04", CARD_TER04],
            ["TER05", CARD_TER05],
            ["TER06", CARD_TER06],
            ["TER07", CARD_TER07],
            ["TER08", CARD_TER08],
            ["TER09", CARD_TER09],
            ["TER10", CARD_TER10],
            ["TER11", CARD_TER11],
            ["TER12", CARD_TER12],
            ["TER13", CARD_TER13]
        ]);
    }

    private FillTactics() {
        this.internalTacticRepo = new Map<string, TTATacticCard>([
            ["TAC01", CARD_TAC01],
            ["TAC02", CARD_TAC02],
            ["TAC03", CARD_TAC03],
            ["TAC04", CARD_TAC04],
            ["TAC05", CARD_TAC05],
            ["TAC06", CARD_TAC06],
            ["TAC07", CARD_TAC07],
            ["TAC08", CARD_TAC08],
            ["TAC09", CARD_TAC09],
            ["TAC10", CARD_TAC10],
            ["TAC11", CARD_TAC11],
            ["TAC12", CARD_TAC12],
            ["TAC13", CARD_TAC13],
            ["TAC14", CARD_TAC14],
            ["TAC15", CARD_TAC15],
            ["TAC16", CARD_TAC16],
            ["TAC17", CARD_TAC17]
        ]);
    }

    private constructor() {
        this.FillRepo();
        this.FillTactics();
    }

    public static get Instance(): TTARepoCards {
        return this._instance || (this._instance = new this());
    }

    public Get(cardName: string) {
        return this.internalRepo.get(cardName);
    }

    public GetTactic(cardName: string) {
        return this.internalTacticRepo.get(cardName);
    }

    public GetLeaders() {
        let leaders = Array<TTACard>();
        leaders.push(this.internalRepo.get("LEA01"));
        leaders.push(this.internalRepo.get("LEA02"));
        leaders.push(this.internalRepo.get("LEA03"));
        leaders.push(this.internalRepo.get("LEA04"));
        leaders.push(this.internalRepo.get("LEA05"));
        leaders.push(this.internalRepo.get("LEA06"));
        leaders.push(this.internalRepo.get("LEA07"));
        leaders.push(this.internalRepo.get("LEA08"));
        leaders.push(this.internalRepo.get("LEA09"));
        leaders.push(this.internalRepo.get("LEA10"));
        leaders.push(this.internalRepo.get("LEA11"));
        leaders.push(this.internalRepo.get("LEA12"));
        leaders.push(this.internalRepo.get("LEA13"));
        leaders.push(this.internalRepo.get("LEA14"));
        leaders.push(this.internalRepo.get("LEA15"));
        leaders.push(this.internalRepo.get("LEA16"));
        leaders.push(this.internalRepo.get("LEA17"));
        leaders.push(this.internalRepo.get("LEA18"));
        leaders.push(this.internalRepo.get("LEA19"));
        leaders.push(this.internalRepo.get("LEA20"));
        leaders.push(this.internalRepo.get("LEA21"));
        leaders.push(this.internalRepo.get("LEA22"));
        leaders.push(this.internalRepo.get("LEA23"));
        leaders.push(this.internalRepo.get("LEA24"));
        leaders.push(this.internalRepo.get("LEA25"));
        leaders.push(this.internalRepo.get("LEA26"));
        leaders.push(this.internalRepo.get("LEA27"));
        leaders.push(this.internalRepo.get("LEA28"));
        leaders.push(this.internalRepo.get("LEA29"));
        leaders.push(this.internalRepo.get("LEA30"));
        leaders.push(this.internalRepo.get("LEA31"));
        leaders.push(this.internalRepo.get("LEA32"));
        leaders.push(this.internalRepo.get("LEA33"));
        leaders.push(this.internalRepo.get("LEA34"));
        leaders.push(this.internalRepo.get("LEA35"));
        leaders.push(this.internalRepo.get("LEA36"));
        leaders.push(this.internalRepo.get("LEA37"));
        leaders.push(this.internalRepo.get("LEA38"));
        leaders.push(this.internalRepo.get("LEA39"));
        leaders.push(this.internalRepo.get("LEA40"));
        leaders.push(this.internalRepo.get("LEA41"));
        leaders.push(this.internalRepo.get("LEA42"));
        leaders.push(this.internalRepo.get("LEA43"));
        leaders.push(this.internalRepo.get("LEA44"));
        leaders.push(this.internalRepo.get("LEA45"));
        leaders.push(this.internalRepo.get("LEA46"));
        leaders.push(this.internalRepo.get("LEA47"));
        leaders.push(this.internalRepo.get("LEA48"));
        return leaders;
    }

    public GetTactics() {
        let tactics = Array<TTATacticCard>();
        tactics.push(this.internalTacticRepo.get("TAC01"));
        tactics.push(this.internalTacticRepo.get("TAC02"));
        tactics.push(this.internalTacticRepo.get("TAC03"));
        tactics.push(this.internalTacticRepo.get("TAC04"));
        tactics.push(this.internalTacticRepo.get("TAC05"));
        tactics.push(this.internalTacticRepo.get("TAC06"));
        tactics.push(this.internalTacticRepo.get("TAC07"));
        tactics.push(this.internalTacticRepo.get("TAC08"));
        tactics.push(this.internalTacticRepo.get("TAC09"));
        tactics.push(this.internalTacticRepo.get("TAC10"));
        tactics.push(this.internalTacticRepo.get("TAC11"));
        tactics.push(this.internalTacticRepo.get("TAC12"));
        tactics.push(this.internalTacticRepo.get("TAC13"));
        tactics.push(this.internalTacticRepo.get("TAC14"));
        tactics.push(this.internalTacticRepo.get("TAC15"));
        tactics.push(this.internalTacticRepo.get("TAC16"));
        tactics.push(this.internalTacticRepo.get("TAC17"));
        return tactics;
    }

    public GetWonders(age:number) {
        let wonders = Array<TTACard>();
        if (age==0)
        {
            wonders.push(this.internalRepo.get("WON01"));
            wonders.push(this.internalRepo.get("WON02"));
            wonders.push(this.internalRepo.get("WON03"));
            wonders.push(this.internalRepo.get("WON04"));
            wonders.push(this.internalRepo.get("WON17"));
            wonders.push(this.internalRepo.get("WON18"));
            wonders.push(this.internalRepo.get("WON19"));
            wonders.push(this.internalRepo.get("WON20"));
        }
        else if (age==1)
        {
            wonders.push(this.internalRepo.get("WON05"));
            wonders.push(this.internalRepo.get("WON06"));
            wonders.push(this.internalRepo.get("WON07"));
            wonders.push(this.internalRepo.get("WON08"));
            wonders.push(this.internalRepo.get("WON21"));
            wonders.push(this.internalRepo.get("WON22"));
            wonders.push(this.internalRepo.get("WON23"));
            wonders.push(this.internalRepo.get("WON24"));
        }
        else if (age==2)
        {
            wonders.push(this.internalRepo.get("WON09"));
            wonders.push(this.internalRepo.get("WON10"));
            wonders.push(this.internalRepo.get("WON11"));
            wonders.push(this.internalRepo.get("WON12"));
            wonders.push(this.internalRepo.get("WON25"));
            wonders.push(this.internalRepo.get("WON26"));
            wonders.push(this.internalRepo.get("WON27"));
            wonders.push(this.internalRepo.get("WON28"));
        }
        else if (age==3)
        {
            wonders.push(this.internalRepo.get("WON13"));
            wonders.push(this.internalRepo.get("WON14"));
            wonders.push(this.internalRepo.get("WON15"));
            wonders.push(this.internalRepo.get("WON16"));
            wonders.push(this.internalRepo.get("WON29"));
            wonders.push(this.internalRepo.get("WON30"));
            wonders.push(this.internalRepo.get("WON31"));
            wonders.push(this.internalRepo.get("WON32"));
        }
        return wonders;
    }

    public GetTerritories() {
        let territories = Array<TTACard>();
        territories.push(this.internalRepo.get("TER01"));
        territories.push(this.internalRepo.get("TER02"));
        territories.push(this.internalRepo.get("TER03"));
        territories.push(this.internalRepo.get("TER04"));
        territories.push(this.internalRepo.get("TER05"));
        territories.push(this.internalRepo.get("TER06"));
        territories.push(this.internalRepo.get("TER07"));
        territories.push(this.internalRepo.get("TER08"));
        territories.push(this.internalRepo.get("TER09"));
        territories.push(this.internalRepo.get("TER10"));
        territories.push(this.internalRepo.get("TER11"));
        territories.push(this.internalRepo.get("TER12"));
        territories.push(this.internalRepo.get("TER13"));
        return territories;
    }

    public GetGovernaments() {
        let governaments = Array<TTACard>();
        governaments.push(this.internalRepo.get("GOV01"));
        governaments.push(this.internalRepo.get("GOV02"));
        governaments.push(this.internalRepo.get("GOV03"));
        governaments.push(this.internalRepo.get("GOV04"));
        governaments.push(this.internalRepo.get("GOV05"));
        governaments.push(this.internalRepo.get("GOV06"));
        governaments.push(this.internalRepo.get("GOV07"));
        governaments.push(this.internalRepo.get("GOV08"));
        return governaments;
    }
}

function MakeBoardCard(card: TTACard, values: [key: string])
{
  return {
    code: card.code,
    card: card,
    workers: Number((values[card.code+"_tk"])?values[card.code+"_tk"]:0)
  }
}

export function MakeScene(values: [key: string])
{
  console.log("CalculateScene: START");

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

  if (values["age"]!=null)
    s.Age = values["age"];

  if (values["tokens"]!=null)
    s.yellowToken = parseInt(values["tokens"]);

  if (values["leader"])
    s.Leader = {
      code: values["leader"],
      workers: 0
    };

  if (values["governament"])
    s.Leader = {
      code: values["governament"],
      workers: 0
    };
  
  if (values["tactic"])
    s.Tactic = TTARepoCards.Instance.GetTactic(values["tactic"]);
  
  if (values["wonder0"])
    s.Wonders.push({
      code: values["wonder0"],
      workers: 0
    });
  if (values["wonder1"])
    s.Wonders.push({
      code: values["wonder1"],
      workers: 0
    });
  if (values["wonder2"])
    s.Wonders.push({
      code: values["wonder2"],
      workers: 0
    });
  if (values["wonder3"])
    s.Wonders.push({
      code: values["wonder3"],
      workers: 0
    });

  for (let key in values) {
    let value = values[key];
    //console.log(key + " => " + value);
    if (value != "on")
        continue;
    if (!key.includes("_"))
    {
      let card = TTARepoCards.Instance.Get(key);
      if (card!=null)
      {
        if (card.code.startsWith("MIN"))
          s.Infantry.push(MakeBoardCard(card, values));
        else if (card.code.startsWith("MCA"))
          s.Cavallery.push(MakeBoardCard(card, values));
        else if (card.code.startsWith("MAR"))
          s.Artillery.push(MakeBoardCard(card, values));
        else if (card.code.startsWith("MAI"))
          s.AirForce=(MakeBoardCard(card, values));
        else if (card.code.startsWith("WON"))
          s.Wonders.push(MakeBoardCard(card, values));
        else if (card.code.startsWith("P"))
          s.Productions.push(MakeBoardCard(card, values));
        else if (card.code.startsWith("U"))
          s.Urbans.push(MakeBoardCard(card, values));
        else if (card.code.startsWith("S"))
          s.Special.push({
            code: card.code,
            card: card,
            workers: 1
          });
        else if (card.code.startsWith("TER"))
          s.Territories.push({
            code: card.code,
            card: card,
            workers: 1
          });
      }
    }
  }
  console.log(s);
  console.log("IValueToScene: END");
  return s;
}