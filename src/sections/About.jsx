function About(){
    return(
        <section id="sobre">
            <div className="text-white bg- pt-20 px-20 text-start align-middle bg-gradient-to-b to-black to-95%">
                <h1 className="uppercase text-7xl text-center font-semibold">Sobre mim</h1>
                <div className="flex flex-row gap-12 text-4xl mt-20 font-opensans leading-10 px-36 text-justify font-light pb-56">
                    {/* PARTE 1 */}
                    <div className="flex-3 w-3/5 pr-10">
                        <p>Sou um desenvolvedor front-end em formação, atualmente cursando Análise e Desenvolvimento de Sistemas na Fatec Franca. Trabalho com Genexus na empresa CHB, onde aplico na prática meus aprendizados e desenvolvo soluções reais para diferentes demandas.</p>
                        <br />
                        <p>Além disso, atuo como freelancer, criando interfaces modernas e funcionais como: landing pages, cardápios online e portfólios — sempre com foco em usabilidade e uma boa experiência do usuário.</p>
                    </div>
                    {/* PARTE 2 */}
                    <div className="flex-1 w-2/5">
                        <h2 className="mx-auto text-start uppercase font-normal">Experiência</h2>
                        <div className="my-4 text-2xl border-l-2 border-slate-300 pl-4 hover:bg-slate-900 p-2 text-start">
                            <span className="font-medium ">07/25 - presente</span>
                            <h3>Desenvolvedor Full-Stack - Genexus</h3>
                            
                        </div>
                        <div className="my-6 text-2xl border-l-2 border-slate-500 pl-4 hover:bg-slate-900 p-2 text-start">
                            <span className="font-medium">08/24 - 07/25</span>
                            <h3>Desenvolvedor Front-End</h3>
                            
                        </div>
                        <div className="my-6 text-2xl border-l-2 border-slate-500 pl-4 hover:bg-slate-900 p-2 text-start">
                            <span className="font-medium">01/23 - presente</span>
                            <h3>Desenvolvedor Front-End - Freelancer</h3>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;