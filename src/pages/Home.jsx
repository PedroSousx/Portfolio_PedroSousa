import Header from "../sections/Header";
import About from "../sections/About";
import Habilitys from "../sections/Habilitys";

function Home(){
    return(
        <>
        <div className="min-h-screen bg-gradient-to-r from-sky-950 via-slate-500 to-sky-900 bg-cover bg-center">
            <Header />
            <About />
            <Habilitys />
        </div>
        </>
    )
}

export default Home;