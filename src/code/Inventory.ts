import League from './League';
import Leagues from './Leagues'
import Team from './team';

import InterSmall from '../assets/serie-a/small/inter.png'
import InterBig from '../assets/serie-a/big/inter.png'

import MilanSmall from '../assets/serie-a/small/milan.png'
import MilanBig from '../assets/serie-a/big/milan.png'

import RomaSmall from '../assets/serie-a/small/roma.png'
import RomaBig from '../assets/serie-a/big/roma.png'

import NapoliSmall from '../assets/serie-a/small/napoli.png'
import NapoliBig from '../assets/serie-a/big/napoli.png'

import JuventusSmall from '../assets/serie-a/small/juventus.png'
import JuventusBig from '../assets/serie-a/big/juventus.png'

import ComoSmall from '../assets/serie-a/small/como.png'
import ComoBig from '../assets/serie-a/big/como.png'

import AtalantaSmall from '../assets/serie-a/small/atalanta.png'
import AtalantaBig from '../assets/serie-a/big/atalanta.png'

import BolognaSmall from '../assets/serie-a/small/bologna.png'
import BolognaBig from '../assets/serie-a/big/bologna.png'

import LazioSmall from '../assets/serie-a/small/lazio.png'
import LazioBig from '../assets/serie-a/big/lazio.png'

import UdineseSmall from '../assets/serie-a/small/udinese.png'
import UdineseBig from '../assets/serie-a/big/udinese.png'

import SassuoloSmall from '../assets/serie-a/small/sassuolo.png'
import SassuoloBig from '../assets/serie-a/big/sassuolo.png'

import CagliariSmall from '../assets/serie-a/small/cagliari.png'
import CagliariBig from '../assets/serie-a/big/cagliari.png'

import GenoaSmall from '../assets/serie-a/small/genoa.png'
import GenoaBig from '../assets/serie-a/big/genoa.png'

import CremoneseSmall from '../assets/serie-a/small/cremonese.png'
import CremoneseBig from '../assets/serie-a/big/cremonese.png'

import ParmaSmall from '../assets/serie-a/small/parma.png'
import ParmaBig from '../assets/serie-a/big/parma.png'

import TorinoSmall from '../assets/serie-a/small/torino.png'
import TorinoBig from '../assets/serie-a/big/torino.png'

import LecceSmall from '../assets/serie-a/small/lecce.png'
import LecceBig from '../assets/serie-a/big/lecce.png'

import FiorentinaSmall from '../assets/serie-a/small/fiorentina.png'
import FiorentinaBig from '../assets/serie-a/big/fiorentina.png'

import VeronaSmall from '../assets/serie-a/small/verona.png'
import VeronaBig from '../assets/serie-a/big/verona.png'

import PisaSmall from '../assets/serie-a/small/pisa.png'
import PisaBig from '../assets/serie-a/big/pisa.png'
import Match from './Match';


export default class Inventory {
    public static getLeague(league: Leagues) : League | null {
        if(league === Leagues.SerieA)
            return Inventory.buildSerieALeague();

        return null;
    }
    
    private static buildSerieALeague = () => {
        const inter = new Team("Inter", "inter", InterSmall, InterBig);
        const milan = new Team("Milan", "milan", MilanSmall, MilanBig);
        const roma = new Team("Roma", "roma", RomaSmall, RomaBig);
        const napoli = new Team("Napoli", "napoli", NapoliSmall, NapoliBig);
        const juventus = new Team("Juventus", "juventus", JuventusSmall, JuventusBig);
        const como = new Team("Como", "como", ComoSmall, ComoBig);
        const atalanta = new Team("Atalanta", "atalanta", AtalantaSmall, AtalantaBig);
        const bologna = new Team("Bologna", "bologna", BolognaSmall, BolognaBig);
        const lazio = new Team("Lazio", "lazio", LazioSmall, LazioBig);
        const udinese = new Team("Udinese", "udinese", UdineseSmall, UdineseBig);
        const sassuolo = new Team("Sassuolo", "sassuolo", SassuoloSmall, SassuoloBig);
        const cagliari = new Team("Cagliari", "cagliari", CagliariSmall, CagliariBig);
        const genoa = new Team("Genoa", "genoa", GenoaSmall, GenoaBig);
        const cremonese = new Team("Cremonese", "cremonese", CremoneseSmall, CremoneseBig);
        const parma = new Team("Parma", "parma", ParmaSmall, ParmaBig);
        const torino = new Team("Torino", "torino", TorinoSmall, TorinoBig);
        const lecce = new Team("Lecce", "lecce", LecceSmall, LecceBig);
        const fiorentina = new Team("Fiorentina", "fiorentina", FiorentinaSmall, FiorentinaBig);
        const verona = new Team("Verona", "verona", VeronaSmall, VeronaBig);
        const pisa = new Team("Pisa", "pisa", PisaSmall, PisaBig);

        var teams = [inter, milan, roma, napoli, juventus, como, atalanta, bologna, lazio, udinese, sassuolo, cagliari, genoa, cremonese, parma, torino, lecce, fiorentina, verona, pisa];
        var matches = [
            new Match(lazio, genoa),
            new Match(napoli, fiorentina),
            new Match(torino, lecce),
            new Match(cremonese, inter),
            new Match(udinese, roma), 
            new Match(pisa, sassuolo),
            new Match(cagliari, verona),
            new Match(como, atalanta),
            new Match(parma, juventus),
            new Match(bologna, milan)
        ];

        var league = new League("Serie A");
        league.setTeams(teams);
        league.setMatches(matches);

        return league;

    }
}