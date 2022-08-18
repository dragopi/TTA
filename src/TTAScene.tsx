import { BoardCard, Scene, TTASceneValues, TTATacticCard } from "./TTATypes";
import { TTARepoCards } from "./TTARepo";
import { TTASceneCalculation } from "./TTACalc";

function GetCardByCode(value: string, token: number = 1) {
    let result: BoardCard = {
        code: value,
        workers: token,
        card: TTARepoCards.Instance.Get(value)
    };
    return result;
}

class FarmClass {
    Agriculture = (token: number = 1) => { return GetCardByCode("PFA01", token) };
    Irrigation = (token: number = 1) => { return GetCardByCode("PFA02", token) };
    SelectiveBreeding = (token: number = 1) => { return GetCardByCode("PFA03", token) };
    MechanizedAgriculture = (token: number = 1) => { return GetCardByCode("PFA04", token) };
}
class MineClass {
    Bronze = (token: number = 1) => { return GetCardByCode("PMI01", token) };
    Iron = (token: number = 1) => { return GetCardByCode("PMI02", token) };
    Coal = (token: number = 1) => { return GetCardByCode("PMI03", token) };
    Oil = (token: number = 1) => { return GetCardByCode("PMI04", token) };
}

class ResourcesClass {
    public Farm: FarmClass;
    public Mine: MineClass;

    constructor() {
        this.Farm = new FarmClass();
        this.Mine = new MineClass();
    }
}

class LabClass {
    Philosophy = (token: number = 1) => { return GetCardByCode("ULA01", token) };
    Alchemy = (token: number = 1) => { return GetCardByCode("ULA02", token) };
    ScientificMethod = (token: number = 1) => { return GetCardByCode("ULA03", token) };
    Computers = (token: number = 1) => { return GetCardByCode("ULA04", token) };
}

class ArenaClass {
    BreadandCircuses = (token: number = 1) => { return GetCardByCode("UAR01", token); }
    TeamSports = (token: number = 1) => { return GetCardByCode("UAR02", token); }
    ProfessionalSports = (token: number = 1) => { return GetCardByCode("UAR03", token); }
}
class TheologyClass {
    Religion = (token: number = 1) => { return GetCardByCode("UTE01", token); }
    Theology = (token: number = 1) => { return GetCardByCode("UTE02", token); }
    OrganizedReligion = (token: number = 1) => { return GetCardByCode("UTE03", token); }
}
class TheatreClass {
    Drama = (token: number = 1) => { return GetCardByCode("UTH01", token); }
    Opera = (token: number = 1) => { return GetCardByCode("UTH02", token); }
    Movies = (token: number = 1) => { return GetCardByCode("UTH03", token); }
}
class PressClass {
    PrintingPress = (token: number = 1) => { return GetCardByCode("ULI01", token); }
    Journalism = (token: number = 1) => { return GetCardByCode("ULI02", token); }
    Multimedia = (token: number = 1) => { return GetCardByCode("ULI03", token); }
}

class UrbanClass {
    public Lab: LabClass;
    public Arena: ArenaClass;
    public Theology: TheologyClass;
    public Theatre: TheatreClass;
    public Press: PressClass;

    constructor() {
        this.Lab = new LabClass();
        this.Arena = new ArenaClass();
        this.Theology = new TheologyClass();
        this.Theatre = new TheatreClass();
        this.Press = new PressClass();
    }
}

class MilitarySpecialClass {
    Warfare = () => { return GetCardByCode("SMI01", 1) };
    Strategy = () => { return GetCardByCode("SMI02", 1) };
    MilitaryTheory = () => { return GetCardByCode("SMI03", 1) };
}
class CivilClass {
    CodeOfLaw = () => { return GetCardByCode("SCI01", 1) };
    JusticeSystem = () => { return GetCardByCode("SCI02", 1) };
    CivilService = () => { return GetCardByCode("SCI03", 1) };
}
class ColonizationClass {
    Cartography = () => { return GetCardByCode("SCL01", 1) };
    Navigation = () => { return GetCardByCode("SCL02", 1) };
    Satellites = () => { return GetCardByCode("SCL03", 1) };
}
class ConstructionClass {
    Masonry = () => { return GetCardByCode("SCO01", 1) };
    Architecture = () => { return GetCardByCode("SCO02", 1) };
    Engineering = () => { return GetCardByCode("SCO03", 1) };
}

class SpecialClass {
    public Military: MilitarySpecialClass;
    public Civil: CivilClass;
    public Colonization: ColonizationClass;
    public Construction: ConstructionClass;

    constructor() {
        this.Military = new MilitarySpecialClass();
        this.Civil = new CivilClass();
        this.Colonization = new ColonizationClass();
        this.Construction = new ConstructionClass();
    }
}

class InfantryClass {
    Warriors = (token: number = 1) => { return GetCardByCode("MIN01", token) };
    Swordsmen = (token: number = 1) => { return GetCardByCode("MIN02", token) };
    Riflemen = (token: number = 1) => { return GetCardByCode("MIN03", token) };
    ModernInfantry = (token: number = 1) => { return GetCardByCode("MIN04", token) };
}
class CavalleryClass {
    Knights = (token: number = 1) => { return GetCardByCode("MCA01", token) };
    Calvarymen = (token: number = 1) => { return GetCardByCode("MCA02", token) };
    Tanks = (token: number = 1) => { return GetCardByCode("MCA03", token) };
}
class ArtilleryClass {
    Cannon = (token: number = 1) => { return GetCardByCode("MAR01", token) };
    Rockets = (token: number = 1) => { return GetCardByCode("MAR02", token) };
}

class MilitaryClass {
    public Infantry: InfantryClass;
    public Cavallery: CavalleryClass;
    public Artillery: ArtilleryClass;
    AirForces = (token: number = 1) => { return GetCardByCode("MAI01", token) };

    constructor() {
        this.Infantry = new InfantryClass();
        this.Cavallery = new CavalleryClass();
        this.Artillery = new ArtilleryClass();
    }
}

class WondersClass {
    HangingGardens = () => { return GetCardByCode("WON01", 1) };
    LibraryOfAlexandria = () => { return GetCardByCode("WON02", 1) };
    Colossus = () => { return GetCardByCode("WON03", 1) };
    Pyramids = () => { return GetCardByCode("WON04", 1) };
    Colosseum = () => { return GetCardByCode("WON17", 1) };
    RomanRoads = () => { return GetCardByCode("WON18", 1) };
    Stonenhenge = () => { return GetCardByCode("WON19", 1) };
    Acropolis = () => { return GetCardByCode("WON20", 1) };
    GreatWall = () => { return GetCardByCode("WON05", 1) };
    StPetersBasilica = () => { return GetCardByCode("WON06", 1) };
    UniversitasCarolina = () => { return GetCardByCode("WON07", 1) };
    TajMahal = () => { return GetCardByCode("WON08", 1) };
    MachuPicchu = () => { return GetCardByCode("WON21", 1) };
    HimejiCastle = () => { return GetCardByCode("WON22", 1) };
    ForbiddenCity = () => { return GetCardByCode("WON23", 1) };
    SilkRoad = () => { return GetCardByCode("WON24", 1) };
    TranscontinentalRailroad = () => { return GetCardByCode("WON09", 1) };
    EiffelTower = () => { return GetCardByCode("WON10", 1) };
    Kremlin = () => { return GetCardByCode("WON11", 1) };
    OceanLinerService = () => { return GetCardByCode("WON12", 1) };
    HarvardCollege = () => { return GetCardByCode("WON25", 1) };
    StatueOfLiberty = () => { return GetCardByCode("WON26", 1) };
    LouvreMuseum = () => { return GetCardByCode("WON27", 1) };
    SuezCanal = () => { return GetCardByCode("WON28", 1) };
    Hollywood = () => { return GetCardByCode("WON13", 1) };
    Internet = () => { return GetCardByCode("WON14", 1) };
    FirstSpaceFlight = () => { return GetCardByCode("WON15", 1) };
    FastFoodChains = () => { return GetCardByCode("WON16", 1) };
    EmpireStateBuilding = () => { return GetCardByCode("WON29", 1) };
    UnitedNations = () => { return GetCardByCode("WON30", 1) };
    InternationalRedCross = () => { return GetCardByCode("WON31", 1) };
    ManhattanProjects = () => { return GetCardByCode("WON32", 1) };
    AncientRuins = () => { return GetCardByCode("WON99", 1) };
}

class LeadersClass {
    JuliusCaesar = () => { return GetCardByCode("LEA01", 1) };
    Homer = () => { return GetCardByCode("LEA02", 1) };
    Moses = () => { return GetCardByCode("LEA03", 1) };
    Hammurabi = () => { return GetCardByCode("LEA04", 1) };
    Aristotle = () => { return GetCardByCode("LEA05", 1) };
    AlexanderTheGreat = () => { return GetCardByCode("LEA06", 1) };
    Michelangelo = () => { return GetCardByCode("LEA07", 1) };
    JoanOfArc = () => { return GetCardByCode("LEA08", 1) };
    LeonardoDaVinci = () => { return GetCardByCode("LEA09", 1) };
    GenghisKhan = () => { return GetCardByCode("LEA10", 1) };
    ChristopherColumbus = () => { return GetCardByCode("LEA11", 1) };
    FrederickBarbarossa = () => { return GetCardByCode("LEA12", 1) };
    WilliamShakespeare = () => { return GetCardByCode("LEA13", 1) };
    JamesCook = () => { return GetCardByCode("LEA14", 1) };
    NapoleonBonaparte = () => { return GetCardByCode("LEA15", 1) };
    MaximillienRobespierre = () => { return GetCardByCode("LEA16", 1) };
    JSBach = () => { return GetCardByCode("LEA17", 1) };
    IsaacNewton = () => { return GetCardByCode("LEA18", 1) };
    AlbertEinstein = () => { return GetCardByCode("LEA19", 1) };
    MahatmaGandhi = () => { return GetCardByCode("LEA20", 1) };
    RockAndRollIcon = () => { return GetCardByCode("LEA21", 1) };
    NikolaiTesla = () => { return GetCardByCode("LEA22", 1) };
    WinstonChurchill = () => { return GetCardByCode("LEA23", 1) };
    SidMeier = () => { return GetCardByCode("LEA24", 1) };
    Boudica = () => { return GetCardByCode("LEA25", 1) };
    Cleopatra = () => { return GetCardByCode("LEA26", 1) };
    Hippocrates = () => { return GetCardByCode("LEA27", 1) };
    Confucius = () => { return GetCardByCode("LEA28", 1) };
    SunTzu = () => { return GetCardByCode("LEA29", 1) };
    Ashoka = () => { return GetCardByCode("LEA30", 1) };
    IsabellaOfCastile = () => { return GetCardByCode("LEA31", 1) };
    EleanorOfAquitaine = () => { return GetCardByCode("LEA32", 1) };
    JanŽižka = () => { return GetCardByCode("LEA33", 1) };
    Nostradamus = () => { return GetCardByCode("LEA34", 1) };
    JohannesGutenberg = () => { return GetCardByCode("LEA35", 1) };
    Saladin = () => { return GetCardByCode("LEA36", 1) };
    CatherineTheGreat = () => { return GetCardByCode("LEA37", 1) };
    MariaTheresa = () => { return GetCardByCode("LEA38", 1) };
    JamesWatt = () => { return GetCardByCode("LEA39", 1) };
    AlfredNobel = () => { return GetCardByCode("LEA40", 1) };
    AntoniGaudí = () => { return GetCardByCode("LEA41", 1) };
    CharlesDarwin = () => { return GetCardByCode("LEA42", 1) };
    MarieCurieSklodowska = () => { return GetCardByCode("LEA43", 1) };
    MarleneDietrich = () => { return GetCardByCode("LEA44", 1) };
    SteveJobs = () => { return GetCardByCode("LEA45", 1) };
    NelsonMandela = () => { return GetCardByCode("LEA46", 1) };
    PierreDeCubertin = () => { return GetCardByCode("LEA47", 1) };
    IanFlemming = () => { return GetCardByCode("LEA48", 1) };
    BillGates = () => { return GetCardByCode("LEA49", 1) };
}

class TacticsClass {
    FightingBand = () => TTARepoCards.Instance.GetTactic("TAC01");
    Legion = () => TTARepoCards.Instance.GetTactic("TAC02");
    Phalanx = () => TTARepoCards.Instance.GetTactic("TAC03");
    HeavyCavalry = () => TTARepoCards.Instance.GetTactic("TAC04");
    MedievalArmy = () => TTARepoCards.Instance.GetTactic("TAC05");
    NapoleonicArmy = () => TTARepoCards.Instance.GetTactic("TAC06");
    DefensiveArmy = () => TTARepoCards.Instance.GetTactic("TAC07");
    Conquistadores = () => TTARepoCards.Instance.GetTactic("TAC08");
    Fortifications = () => TTARepoCards.Instance.GetTactic("TAC09");
    ClassicArmy = () => TTARepoCards.Instance.GetTactic("TAC10");
    MobileArtillery = () => TTARepoCards.Instance.GetTactic("TAC11");
    Hussars = () => TTARepoCards.Instance.GetTactic("TAC12");
    Entrenchments = () => TTARepoCards.Instance.GetTactic("TAC13");
    ModernArmy = () => TTARepoCards.Instance.GetTactic("TAC14");
    MechanizedArmy = () => TTARepoCards.Instance.GetTactic("TAC15");
    ShockTroops = () => TTARepoCards.Instance.GetTactic("TAC16");
    PositionalArmy = () => TTARepoCards.Instance.GetTactic("TAC17");
}

export class TTADeck {
    public Leaders: LeadersClass;
    public Resources: ResourcesClass;
    public Urban: UrbanClass;
    public Special: SpecialClass;
    public Military: MilitaryClass;
    public Wonders: WondersClass;
    public Tactics: TacticsClass;

    constructor() {
        this.Leaders = new LeadersClass();
        this.Resources = new ResourcesClass();
        this.Urban = new UrbanClass();
        this.Special = new SpecialClass();
        this.Military = new MilitaryClass();
        this.Wonders = new WondersClass();
        this.Tactics = new TacticsClass();
    }
}

export class TTASceneManager {

    private s: Scene;

    private ResetScene() {
        this.s = {
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
    }

    public Reset() {
        this.ResetScene();
    }

    public Age(era: number) {
        this.s.Age = era;
    }

    public AddTactic(card: TTATacticCard) {
        this.s.Tactic = card;
    }

    public Add(card: BoardCard) {
        if (card.code.startsWith("MIN"))
            this.s.Infantry.push(card);
        else if (card.code.startsWith("MCA"))
            this.s.Cavallery.push(card);
        else if (card.code.startsWith("MAR"))
            this.s.Artillery.push(card);
        else if (card.code.startsWith("MAI"))
            this.s.AirForce = (card);
        else if (card.code.startsWith("WON"))
            this.s.Wonders.push(card);
        else if (card.code.startsWith("P"))
            this.s.Productions.push(card);
        else if (card.code.startsWith("U"))
            this.s.Urbans.push(card);
        else if (card.code.startsWith("S"))
            this.s.Special.push(card);
        else if (card.code.startsWith("TER"))
            this.s.Territories.push(card);
        else if (card.code.startsWith("GOV"))
            this.s.Governament = card;
        else if (card.code.startsWith("LEA"))
            this.s.Leader = card;
    }

    private GetScene() {
        let result: Scene = {
            Age: this.s.Age,
            yellowToken: this.s.yellowToken,
            Leader: this.s.Leader,
            Governament: this.s.Governament,
            Wonders: this.s.Wonders,
            Infantry: this.s.Infantry,
            Cavallery: this.s.Cavallery,
            Artillery: this.s.Artillery,
            AirForce: this.s.AirForce,
            Special: this.s.Special,
            Productions: this.s.Productions,
            Urbans: this.s.Urbans,
            Territories: this.s.Territories,
            Tactic: this.s.Tactic
        };
        return result; 
    }

    public Calculate():TTASceneValues {
        return TTASceneCalculation(this.s);
    }

    constructor() {
        this.Reset();
    }
}


