import Benefits from "../../components/Benefits/Benefits"
import Caracteristics from "../../components/Caracteristics/Caracteristics"
import FAQ from "../../components/FAQ/FAQ."
import Start from "../../components/Start/Start"
import StartNow from "../../components/StartNow/StartNow"
import WhyUs from "../../components/WhyUs/WhyUs"

const Page = () => {
    return(
        <div>
            <Start />
            <Benefits />
            <WhyUs />
            <StartNow />
            <Caracteristics />
            <FAQ />
        </div>
    )
}

export default Page