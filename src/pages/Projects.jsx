import Site_Protazio from '../assets/Site_Protazio.png';
import Site_Airbnb from '../assets/Foto_dash_1.png';
import Producao from '../assets/Producao.png';
import info from '../assets/info.png';
import Site_Genexus from '../assets/Site_Genexus.png';

function Projects(){
    return(
        <section id="projetos" className="bg-black text-white pt-20 pb-20 px-20">
            <h1 className="text-7xl text-center font-semibold uppercase mb-16">Projetos</h1>
            <div className="flex flex-row gap-12 text-4xl font-opensans leading-10 px-36 text-justify font-light">
                <div className="grid grid-cols-2 gap-12 mx-auto">
                    <div className="bg-slate-950 p-10 border rounded-4xl border-slate-700 hover:scale-105 hover:border-slate-500 transition-all duration-300">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-start w-96 font-semibold uppercase border-b-slate-500">Landing Page</h2>
                            <img src={info} alt="Mais Informações" className='w-10 hover:scale-105'/>
                        </div>
                        <p className="font-extralight text-slate-500 text-xl py-2">Protázio Music</p>
                        <img src={ Site_Protazio } alt="Site Protázio Music" />
                        <p className='font-extralight text-xl text-slate-500 pt-4 text-center'>Html, CSS e Tailwind</p>
                    </div>
                    <div className="bg-slate-950 p-10 border rounded-4xl border-slate-700 hover:scale-105 hover:border-slate-500 transition-all duration-300">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-start w-96 font-semibold uppercase border-b-slate-500">Dashboard</h2>
                            <img src={info} alt="Mais Informações" className='w-10 hover:scale-105'/>
                        </div>
                        <p className="font-extralight text-slate-500 text-xl py-2">Airbnb Nova York</p>
                        <img src={ Site_Airbnb } alt="Site Airbnb" />
                        <p className='font-extralight text-xl text-slate-500 pt-4 text-center'>Python(pandas,dash e numpy)</p>
                    </div>
                    <div className="bg-slate-950 p-10 border rounded-4xl border-slate-700 hover:scale-105 hover:border-slate-500 transition-all duration-300">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-start w-96 font-semibold uppercase border-b-slate-500">Loja de Jogos</h2>
                            <img src={info} alt="Mais Informações" className='w-10 hover:scale-105'/>
                        </div>
                        <p className="font-extralight text-slate-500 text-xl py-2">Genexus</p>
                        <img src={Site_Genexus} alt="Site Genexus" />
                        <p className='font-extralight text-xl text-slate-500 pt-4 text-center'>Genexus e SQL Server</p>
                    </div>
                    <div className="bg-slate-950 p-10 border rounded-4xl border-slate-700 hover:scale-105 hover:border-slate-500 transition-all duration-300">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-start w-96 font-semibold uppercase border-b-slate-500">Cardápio Online</h2>
                            <img src={info} alt="Mais Informações" className='w-10 hover:scale-105'/>
                        </div>
                        <p className="font-extralight text-slate-500 text-xl py-2">Need Salgados</p>
                        <img src={ Producao } alt="Em produção" />
                        <p className='font-extralight text-xl text-slate-500 pt-4 text-center'>React, Tailwind, Firebase</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;