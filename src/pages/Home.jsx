import Header from "@/components/Header";
import Main from "../components/Main";
import Footer from "@/components/Footer";
import { me } from "@/data";

const Home = () => {
    return(
        <>
        <Header/>
        <Main me={me} />
        <Footer/>
        </>
    )
}

export default Home