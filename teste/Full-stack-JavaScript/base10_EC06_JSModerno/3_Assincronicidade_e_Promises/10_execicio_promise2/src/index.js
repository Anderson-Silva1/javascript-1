import Spacesip from "./Spaceship";
import Spaceship_engine from "./Spaceship_engine";

const sophia = new Spacesip("Sophia", 10, 5, 70)
const amsterda = new Spacesip("Amsterda", 14, 10, 40)
const dwarfStar = new Spacesip("Estrela-Anã", 20, 4, 80)

const turnOnSophia = new Spaceship_engine(sophia)
const turnOnAmsterda = new Spaceship_engine(amsterda)
const turnOnDwarfStar = new Spaceship_engine(dwarfStar)

turnOnSophia.turnOn()
turnOnAmsterda.turnOn()
turnOnDwarfStar.turnOn()