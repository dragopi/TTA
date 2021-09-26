export type TTACard = {
    code: string;
    type: string;
    subtype: string;
    name: string;
    age: number;
    light_cost: number;
    rock_cost: number;
    food: number;
    resource: number;
    culture: number;
    strength: number;
    happy: number;
    science: number;
    ca: number;
    ma: number;
    text: string;
};

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
};

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
};

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
};

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
};

let CARD_PMN01: TTACard = {
    code: "PMN01",
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
};

let CARD_PMN02: TTACard = {
    code: "PMN02",
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
};

let CARD_PMN03: TTACard = {
    code: "PMN03",
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
};

let CARD_PMN04: TTACard = {
    code: "PMN04",
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
};

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
};

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
};

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
};

let CARD_ULB01: TTACard = {
    code: "ULB01",
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
};

let CARD_ULB02: TTACard = {
    code: "ULB02",
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
};

let CARD_ULB03: TTACard = {
    code: "ULB03",
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
};

let CARD_ULB04: TTACard = {
    code: "ULB04",
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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

let CARD_MAF01: TTACard = {
    code: "MAF01",
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
};

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
};

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
};

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
};

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
};

let CARD_WON05: TTACard = {
    code: "WON05",
    type: "Wonder",
    subtype: "Wonder",
    name: "Great Wall",
    age: 1,
    light_cost: null,
    rock_cost: 9,
    food: null,
    resource: null,
    culture: 1,
    strength: null,
    happy: 1,
    science: null,
    ca: null,
    ma: null,
    text: "Adds +1 to your strength for each infantry and artillery unit"
};

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
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Each of your happy faces counts twice"
};

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
};

let CARD_WON08: TTACard = {
    code: "WON08",
    type: "Wonder",
    subtype: "Wonder",
    name: "Taj Mahal",
    age: 1,
    light_cost: null,
    rock_cost: 9,
    food: null,
    resource: null,
    culture: 3,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: null
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
    text: null
};

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
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Each round, you have extra 1 resource for building military; up to 2 warriors produce 1 culture each"
};

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
};

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
    text: null
};

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
};

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
    text: "Each of your military units gives you an additional +1 strength"
};

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
    text: "Temples, theaters, & wonders produce 1 extra culture per happy face; 1 less civil action for wonder cards"
};

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
    culture: null,
    strength: null,
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Temples give you +1 strength for each happy face; score 5 culture when aggression or war played on you"
};

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
    text: "Best lab or library produces extra science: +1 per level; When you play a technology card, produce 1 resource"
};

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
    text: "Ignore effects of your tactics card. Each of your cavalry units get +1 strength and produces +1 culture"
};

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
};

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
    text: "For 1 civil action, you can increase your population by 1 worker, and build a new military unit with it. Costs 1 food and 1 resource less"
};

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
    happy: null,
    science: null,
    ca: null,
    ma: null,
    text: "Each of your libraries produces an extra 1 culture. Each library-theater pair produces an additional 2 culture"
};

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
    text: "When colonizing, each colonization bonus card has an additional +1. Colonies produce 2 culture each"
};

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
    ma: 1,
    text: "\r\nThe tactics bonus of your best army is doubled"
};

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
    text: "Revolution costs you all your military actions instead of all your civil actions"
};

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
};

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
};

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
};

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
    text: "You may not play aggression or war cards; opponents pay 2x the military actions to play them against you"
};

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
};

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
};

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
    text: "Military unit techs cost you 3 science less; defense bonus cards count twice; when war is declared on you, new units cost 2 resource less to build"
};

let CARD_LEA24: TTACard = {
    code: "LEA24",
    type: "Leader",
    subtype: "Leader",
    name: "Game Designer",
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
    text: "Each of your labs produces culture: 1 per level; each lab produces 1 less science"
};

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
};

let CARD_GOV02: TTACard = {
    code: "GOV02",
    type: "Govt",
    subtype: "Govt",
    name: "Monarchy",
    age: 1,
    light_cost: null,
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
};

let CARD_GOV03: TTACard = {
    code: "GOV03",
    type: "Govt",
    subtype: "Govt",
    name: "Theocracy",
    age: 1,
    light_cost: null,
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
};

let CARD_GOV04: TTACard = {
    code: "GOV04",
    type: "Govt",
    subtype: "Govt",
    name: "Constitutional Monarchy",
    age: 2,
    light_cost: null,
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
};

let CARD_GOV05: TTACard = {
    code: "GOV05",
    type: "Govt",
    subtype: "Govt",
    name: "Republic",
    age: 2,
    light_cost: null,
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
};

let CARD_GOV06: TTACard = {
    code: "GOV06",
    type: "Govt",
    subtype: "Govt",
    name: "Communism",
    age: 3,
    light_cost: null,
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
};

let CARD_GOV07: TTACard = {
    code: "GOV07",
    type: "Govt",
    subtype: "Govt",
    name: "Democracy",
    age: 3,
    light_cost: null,
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
};

let CARD_GOV08: TTACard = {
    code: "GOV08",
    type: "Govt",
    subtype: "Govt",
    name: "Fundamentalism",
    age: 3,
    light_cost: null,
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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

let CARD_SCN01: TTACard = {
    code: "SCN01",
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
};

let CARD_SCN02: TTACard = {
    code: "SCN02",
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
};

let CARD_SCN03: TTACard = {
    code: "SCN03",
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
};

export class TTARepoCards {

    private static _instance: TTARepoCards;
    private internalRepo: Map<string, TTACard>;    
    private FillRepo() {
        this.internalRepo = new Map<string, TTACard>([
            ["PFA01", CARD_PFA01],
            ["PFA02", CARD_PFA02],
            ["PFA03", CARD_PFA03],
            ["PFA04", CARD_PFA04],
            ["PMN01", CARD_PMN01],
            ["PMN02", CARD_PMN02],
            ["PMN03", CARD_PMN03],
            ["PMN04", CARD_PMN04],
            ["UTE01", CARD_UTE01],
            ["UTE02", CARD_UTE02],
            ["UTE03", CARD_UTE03],
            ["ULB01", CARD_ULB01],
            ["ULB02", CARD_ULB02],
            ["ULB03", CARD_ULB03],
            ["ULB04", CARD_ULB04],
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
            ["MAF01", CARD_MAF01],
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
            ["SCN01", CARD_SCN01],
            ["SCN02", CARD_SCN02],
            ["SCN03", CARD_SCN03]
        ]);
    }

    private constructor() {
        this.FillRepo();
    }

    public static get Instance(): TTARepoCards {
        return this._instance || (this._instance = new this());
    }

    public Get(cardName: string) {
        return this.internalRepo.get(cardName);
    }
}