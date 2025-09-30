import Navbar from "../components/navbar";
import BgImage from '../assets/Background.png';
import About from "./About";

function Header(){
    return(
        <header className="" >
            <Navbar />
            <div className="text-white text-center font-opensans text-6xl py-80 align-middle uppercase">
                <h1 className="mb-2">Olá, eu sou o</h1>
                <span className="font-semibold text-8xl">Pedro Sousa</span>
                <br/>
                <button className="text-5xl hover:text-slate-200 bg-black hover:bg-slate-900 pt-4 pb-6 px-20 rounded-xl mt-4 uppercase">Ver projetos</button>
            </div>
        </header>
    )
}

export default Header;