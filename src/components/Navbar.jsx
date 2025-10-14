function Navbar() {
    return (
    <div className="bg-slate-950 text-white p-4 text-center align-middle ">
        <ul className="flex justify-center gap-8 font-arimo text-lg uppercase"> 
            <a href="#sobre" className="text-white hover:text-slate-500">Sobre</a>
            <a href="#habilidades" className="text-white hover:text-slate-500">Habilidades</a>    
            <a href="#projetos" className="text-white hover:text-slate-500">Projetos</a>
            <a href="#" className="text-white hover:text-slate-500">Contato</a>    
        </ul>
    </div>
    )
}

export default Navbar;