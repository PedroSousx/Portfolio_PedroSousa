
function Projects(){
    return(
        <section id="projetos" className="bg-black text-white pt-20 pb-20 px-20">
            <h1 className="text-7xl text-center font-semibold uppercase mb-16">Projetos</h1>
            <div className="flex flex-row gap-12 text-4xl font-opensans leading-10 px-36 text-justify font-light">
                <div className="grid grid-cols-2 gap-8 mx-auto">
                    <div className="bg-slate-950 p-6">
                        <h2 className="items-start text-start w-96 font-semibold uppercase border-b-slate-500">Landing Page</h2>
                        <p className="font-extralight text-slate-500 text-xl">Protázio Music</p>
                        
                    </div>
                    <div className="bg-slate-950 p-6">
                        <h2 className="items-start text-start w-96 font-semibold uppercase">Cardápio Online</h2>
                    </div>
                    <div className="bg-slate-950 p-6">
                        <h2 className="items-start text-start w-96 font-semibold uppercase">Loja de Jogos</h2>
                    </div>
                    <div className="bg-slate-950 p-6">
                        <h2 className="items-start text-start w-96 font-semibold uppercase">DashBoard</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;