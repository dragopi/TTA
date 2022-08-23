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
    Agriculture           = (token: number = 1) => GetCardByCode("PFA01", token);
    Irrigation            = (token: number = 1) => GetCardByCode("PFA02", token);
    SelectiveBreeding     = (token: number = 1) => GetCardByCode("PFA03", token);
    MechanizedAgriculture = (token: number = 1) => GetCardByCode("PFA04", token);
}
class MineClass {
    Bronze = (token: number = 1) => GetCardByCode("PMI01", token);
    Iron   = (token: number = 1) => GetCardByCode("PMI02", token);
    Coal   = (token: number = 1) => GetCardByCode("PMI03", token);
    Oil    = (token: number = 1) => GetCardByCode("PMI04", token);
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
    Philosophy         = (token: number = 1) => GetCardByCode("ULA01", token);
    Alchemy            = (token: number = 1) => GetCardByCode("ULA02", token);
    ScientificMethod   = (token: number = 1) => GetCardByCode("ULA03", token);
    Computers          = (token: number = 1) => GetCardByCode("ULA04", token);
}

class ArenaClass {
    BreadandCircuses   = (token: number = 1) => GetCardByCode("UAR01", token);
    TeamSports         = (token: number = 1) => GetCardByCode("UAR02", token);
    ProfessionalSports = (token: number = 1) => GetCardByCode("UAR03", token);
}

class TheologyClass {
    Religion           = (token: number = 1) => GetCardByCode("UTE01", token);
    Theology           = (token: number = 1) => GetCardByCode("UTE02", token);
    OrganizedReligion  = (token: number = 1) => GetCardByCode("UTE03", token);
}

class TheatreClass {
    Drama              = (token: number = 1) => GetCardByCode("UTH01", token);
    Opera              = (token: number = 1) => GetCardByCode("UTH02", token);
    Movies             = (token: number = 1) => GetCardByCode("UTH03", token);
}
class PressClass {
    PrintingPress      = (token: number = 1) => GetCardByCode("ULI01", token);
    Journalism         = (token: number = 1) => GetCardByCode("ULI02", token);
    Multimedia         = (token: number = 1) => GetCardByCode("ULI03", token);
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
    Warfare        = () => GetCardByCode("SMI01");
    Strategy       = () => GetCardByCode("SMI02");
    MilitaryTheory = () => GetCardByCode("SMI03");
}
class CivilClass {
    CodeOfLaw      = () => GetCardByCode("SCI01");
    JusticeSystem  = () => GetCardByCode("SCI02");
    CivilService   = () => GetCardByCode("SCI03");
}
class ColonizationClass {
    Cartography    = () => GetCardByCode("SCL01");
    Navigation     = () => GetCardByCode("SCL02");
    Satellites     = () => GetCardByCode("SCL03");
}
class ConstructionClass {
    Masonry        = () => GetCardByCode("SCO01");
    Architecture   = () => GetCardByCode("SCO02");
    Engineering    = () => GetCardByCode("SCO03");
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
    Warriors        = (token: number = 1) => GetCardByCode("MIN01", token);
    Swordsmen       = (token: number = 1) => GetCardByCode("MIN02", token);
    Riflemen        = (token: number = 1) => GetCardByCode("MIN03", token);
    ModernInfantry  = (token: number = 1) => GetCardByCode("MIN04", token);
}
class CavalleryClass {
    Knights         = (token: number = 1) => GetCardByCode("MCA01", token);
    Calvarymen      = (token: number = 1) => GetCardByCode("MCA02", token);
    Tanks           = (token: number = 1) => GetCardByCode("MCA03", token);
}
class ArtilleryClass {
    Cannon          = (token: number = 1) => GetCardByCode("MAR01", token);
    Rockets         = (token: number = 1) => GetCardByCode("MAR02", token);
}

class MilitaryClass {
    public Infantry: InfantryClass;
    public Cavallery: CavalleryClass;
    public Artillery: ArtilleryClass;
    AirForces = (token: number = 1) => GetCardByCode("MAI01", token);

    constructor() {
        this.Infantry = new InfantryClass();
        this.Cavallery = new CavalleryClass();
        this.Artillery = new ArtilleryClass();
    }
}

class WondersClass {
    HangingGardens           = () => GetCardByCode("WON01");
    LibraryOfAlexandria      = () => GetCardByCode("WON02");
    Colossus                 = () => GetCardByCode("WON03");
    Pyramids                 = () => GetCardByCode("WON04");
    Colosseum                = () => GetCardByCode("WON17");
    RomanRoads               = () => GetCardByCode("WON18");
    Stonenhenge              = () => GetCardByCode("WON19");
    Acropolis                = () => GetCardByCode("WON20");
    GreatWall                = () => GetCardByCode("WON05");
    StPetersBasilica         = () => GetCardByCode("WON06");
    UniversitasCarolina      = () => GetCardByCode("WON07");
    TajMahal                 = () => GetCardByCode("WON08");
    MachuPicchu              = () => GetCardByCode("WON21");
    HimejiCastle             = () => GetCardByCode("WON22");
    ForbiddenCity            = () => GetCardByCode("WON23");
    SilkRoad                 = () => GetCardByCode("WON24");
    TranscontinentalRailroad = () => GetCardByCode("WON09");
    EiffelTower              = () => GetCardByCode("WON10");
    Kremlin                  = () => GetCardByCode("WON11");
    OceanLinerService        = () => GetCardByCode("WON12");
    HarvardCollege           = () => GetCardByCode("WON25");
    StatueOfLiberty          = () => GetCardByCode("WON26");
    LouvreMuseum             = () => GetCardByCode("WON27");
    LouvreMuseum1            = () => GetCardByCode("WON33");
    LouvreMuseum2            = () => GetCardByCode("WON34");
    LouvreMuseum3            = () => GetCardByCode("WON35");
    SuezCanal                = () => GetCardByCode("WON28");
    Hollywood                = () => GetCardByCode("WON13");
    Internet                 = () => GetCardByCode("WON14");
    FirstSpaceFlight         = () => GetCardByCode("WON15");
    FastFoodChains           = () => GetCardByCode("WON16");
    EmpireStateBuilding      = () => GetCardByCode("WON29");
    UnitedNations            = () => GetCardByCode("WON30");
    InternationalRedCross    = () => GetCardByCode("WON31");
    ManhattanProjects        = () => GetCardByCode("WON32");
    AncientRuins             = () => GetCardByCode("WON99");
}

class LeadersClass {
    JuliusCaesar            = () => GetCardByCode("LEA01");
    Homer                   = () => GetCardByCode("LEA02");
    Moses                   = () => GetCardByCode("LEA03");
    Hammurabi               = () => GetCardByCode("LEA04");
    Aristotle               = () => GetCardByCode("LEA05");
    AlexanderTheGreat       = () => GetCardByCode("LEA06");
    Michelangelo            = () => GetCardByCode("LEA07");
    JoanOfArc               = () => GetCardByCode("LEA08");
    LeonardoDaVinci         = () => GetCardByCode("LEA09");
    GenghisKhan             = () => GetCardByCode("LEA10");
    ChristopherColumbus     = () => GetCardByCode("LEA11");
    FrederickBarbarossa     = () => GetCardByCode("LEA12");
    WilliamShakespeare      = () => GetCardByCode("LEA13");
    JamesCook               = () => GetCardByCode("LEA14");
    NapoleonBonaparte       = () => GetCardByCode("LEA15");
    MaximillienRobespierre  = () => GetCardByCode("LEA16");
    JSBach                  = () => GetCardByCode("LEA17");
    IsaacNewton             = () => GetCardByCode("LEA18");
    AlbertEinstein          = () => GetCardByCode("LEA19");
    MahatmaGandhi           = () => GetCardByCode("LEA20");
    RockAndRollIcon         = () => GetCardByCode("LEA21");
    NikolaiTesla            = () => GetCardByCode("LEA22");
    WinstonChurchill        = () => GetCardByCode("LEA23");
    SidMeier                = () => GetCardByCode("LEA24");
    Boudica                 = () => GetCardByCode("LEA25");
    Cleopatra               = () => GetCardByCode("LEA26");
    Hippocrates             = () => GetCardByCode("LEA27");
    Confucius               = () => GetCardByCode("LEA28");
    SunTzu                  = () => GetCardByCode("LEA29");
    Ashoka                  = () => GetCardByCode("LEA30");
    IsabellaOfCastile       = () => GetCardByCode("LEA31");
    EleanorOfAquitaine      = () => GetCardByCode("LEA32");
    JanŽižka                = () => GetCardByCode("LEA33");
    Nostradamus             = () => GetCardByCode("LEA34");
    JohannesGutenberg       = () => GetCardByCode("LEA35");
    Saladin                 = () => GetCardByCode("LEA36");
    CatherineTheGreat       = () => GetCardByCode("LEA37");
    MariaTheresa            = () => GetCardByCode("LEA38");
    JamesWatt               = () => GetCardByCode("LEA39");
    AlfredNobel             = () => GetCardByCode("LEA40");
    AntoniGaudí             = () => GetCardByCode("LEA41");
    CharlesDarwin           = () => GetCardByCode("LEA42");
    MarieCurieSklodowska    = () => GetCardByCode("LEA43");
    MarleneDietrich         = () => GetCardByCode("LEA44");
    SteveJobs               = () => GetCardByCode("LEA45");
    NelsonMandela           = () => GetCardByCode("LEA46");
    PierreDeCubertin        = () => GetCardByCode("LEA47");
    IanFlemming             = () => GetCardByCode("LEA48");
    BillGates               = () => GetCardByCode("LEA49");
}

class TacticsClass {
    FightingBand    = () => TTARepoCards.Instance.GetTactic("TAC01");
    Legion          = () => TTARepoCards.Instance.GetTactic("TAC02");
    Phalanx         = () => TTARepoCards.Instance.GetTactic("TAC03");
    HeavyCavalry    = () => TTARepoCards.Instance.GetTactic("TAC04");
    MedievalArmy    = () => TTARepoCards.Instance.GetTactic("TAC05");
    NapoleonicArmy  = () => TTARepoCards.Instance.GetTactic("TAC06");
    DefensiveArmy   = () => TTARepoCards.Instance.GetTactic("TAC07");
    Conquistadores  = () => TTARepoCards.Instance.GetTactic("TAC08");
    Fortifications  = () => TTARepoCards.Instance.GetTactic("TAC09");
    ClassicArmy     = () => TTARepoCards.Instance.GetTactic("TAC10");
    MobileArtillery = () => TTARepoCards.Instance.GetTactic("TAC11");
    Hussars         = () => TTARepoCards.Instance.GetTactic("TAC12");
    Entrenchments   = () => TTARepoCards.Instance.GetTactic("TAC13");
    ModernArmy      = () => TTARepoCards.Instance.GetTactic("TAC14");
    MechanizedArmy  = () => TTARepoCards.Instance.GetTactic("TAC15");
    ShockTroops     = () => TTARepoCards.Instance.GetTactic("TAC16");
    PositionalArmy  = () => TTARepoCards.Instance.GetTactic("TAC17");
}

class TerritoriesClass {
    VastTerritoryI          = () => GetCardByCode("TER01");
    WealthyTerritoryI       = () => GetCardByCode("TER02");
    InhabitedTerritoryI     = () => GetCardByCode("TER03");
    StrategicTerritoryI     = () => GetCardByCode("TER04");
    HistoricTerritoryI      = () => GetCardByCode("TER05");
    DevelopedTerritoryI     = () => GetCardByCode("TER06");
    VastTerritoryII         = () => GetCardByCode("TER07");
    WealthyTerritoryII      = () => GetCardByCode("TER08");
    InhabitedTerritoryII    = () => GetCardByCode("TER09");
    StrategicTerritoryII    = () => GetCardByCode("TER10");
    HistoricTerritoryII     = () => GetCardByCode("TER11");
    DevelopedTerritoryII    = () => GetCardByCode("TER12");
    AutonomousTerritory     = () => GetCardByCode("TER13");
}

class GovernamentsClass {
    Despotism               = () => GetCardByCode("GOV01");
    Monarchy                = () => GetCardByCode("GOV02");
    Theocracy               = () => GetCardByCode("GOV03");
    ConstitutionalMonarchy  = () => GetCardByCode("GOV04");
    Republic                = () => GetCardByCode("GOV05");
    Communism               = () => GetCardByCode("GOV06");
    Democracy               = () => GetCardByCode("GOV07");
    Fundamentalism          = () => GetCardByCode("GOV08");
}

export class TTADeck {
    public Leaders: LeadersClass;
    public Resources: ResourcesClass;
    public Urban: UrbanClass;
    public Special: SpecialClass;
    public Military: MilitaryClass;
    public Wonders: WondersClass;
    public Tactics: TacticsClass;
    public Territories: TerritoriesClass;
    public Governaments: GovernamentsClass;

    constructor() {
        this.Leaders = new LeadersClass();
        this.Resources = new ResourcesClass();
        this.Urban = new UrbanClass();
        this.Special = new SpecialClass();
        this.Military = new MilitaryClass();
        this.Wonders = new WondersClass();
        this.Tactics = new TacticsClass();
        this.Territories = new TerritoriesClass();
        this.Governaments = new GovernamentsClass();
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

    public Tokens(n: number) {
        this.s.yellowToken = n;
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


