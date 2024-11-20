import Header from "../Header"
import Footer from "../Footer"
import HeroSection from "./HeroSection"
import Section01 from "./Section01"
import Section02 from "./Section02"
import Section03 from "./Section03"

export default function LandingPage(){
    return(
        <div className="LandingPage">
            <Header></Header>
                <div className="LPmainContent">
                    <HeroSection></HeroSection>
                    <Section01></Section01>
                    <Section02></Section02>
                    <Section03></Section03>
                </div>
            <Footer></Footer>
        </div>
    )
}