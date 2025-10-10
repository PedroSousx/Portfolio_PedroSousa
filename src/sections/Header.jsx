import Navbar from "../components/navbar";
import About from "./About";

function Header(){
    return(
        <header className="" >
            <Navbar />
            <div className="text-white text-center font-opensans text-6xl py-60 align-middle uppercase">
                <h1 className="mb-2 font-light">Olá, eu sou o</h1>
                <span className="font-semibold text-8xl">Pedro Sousa</span>
                <br/>
                <p className="text-2xl px-96 mx-28 my-4 font-light">Desenvolvedor front-end apaixonado por criar interfaces modernas e funcionais</p>
                <button className="text-5xl hover:text-slate-200 bg-slate-950 hover:bg-black pt-4 pb-6 px-20 rounded-xl mt-4 uppercase">Ver projetos</button>
            </div>
        </header>
    )
}

export default Header;