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
    yellowToken: number;
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