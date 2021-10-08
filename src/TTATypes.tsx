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
    pop?: number;
    box?: number;
    getSceneValuesModifier?: (s: Scene, currentValues: TTASceneValues) => (SceneValuesModifier);
};

export class SceneValuesModifier {
    public food: number;
    public resource: number;
    public culture: number;
    public strength: number;
    public happy: number;
    public science: number;

    constructor() {
        this.food = 0;
        this.resource = 0;
        this.culture = 0;
        this.strength = 0;
        this.happy = 0;
        this.science = 0;
    }
};

export type TTATacticCard = {
    code: string,
    name: string,
    age: number,
    strength: number,
    strengthObs: number,
    ninf: number,
    ncav: number,
    nart: number,
    nair: number
}
export interface BoardCard {
    code: string;
    card?: TTACard;
    workers: number;
}

export interface Scene {
    Age: number;
    yellowToken: number;
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
    Territories?: Array<BoardCard>;
    Tactic: TTATacticCard;
}

interface LogItem {
    msg: string;
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
    public ca: TTASceneValue;
    public ma: TTASceneValue;
    public yellowToken: number;

    constructor() {
        this.food = new TTASceneValue();
        this.resource = new TTASceneValue();
        this.culture = new TTASceneValue();
        this.strength = new TTASceneValue();
        this.happy = new TTASceneValue();
        this.science = new TTASceneValue();
        this.ca = new TTASceneValue();
        this.ma = new TTASceneValue();
        this.yellowToken = 0;
    }
};