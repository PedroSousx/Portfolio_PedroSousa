function Navbar() {
    return (
    <div className="bg-black text-white p-4 text-center align-middle">
        <ul className="flex justify-center gap-8 font-arimo text-xl uppercase"> 
            <a href="#sobre" className="text-white hover:text-slate-500">Sobre</a>
            <a href="#habilidades" className="text-white hover:text-slate-500">Habilidades</a>    
            <a href="#" className="text-white hover:text-slate-500">Projetos</a>
            <a href="#" className="text-white hover:text-slate-500">Contato</a>    
        </ul>
    </div>
    )
}

export default Navbar;