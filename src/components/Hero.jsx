import { siteconfig } from "../../site.config"
import Button from "./Button"
import FadeInSection from "./FadeInSection"

export default function Hero(){
    return(
        <div className="w-full relative min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col py-20 md:px-8 lg:px-40" style={{ backgroundImage: `url(${siteconfig.heroImg})` }}>
            {/* overlay the background */}
            <div className="absolute bg-primary/70 w-full h-full"></div>
            {/* hero main container */}
            <div className="relative px-10 flex flex-col gap-4 mb-6 md:gap-6 md:mb-8 lg:gap-10 lg:mb-10">
                <FadeInSection>
                    <div className="flex items-center justify-center gap-2 max-w-2xl md:mx-auto">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        <p className="text-accent text-sm font-bold font-sans uppercase tracking-widest">
                            {siteconfig.heroBusinessName} · {siteconfig.heroBusinessLocation} — {siteconfig.heroBusinessStatus}
                        </p>
                    </div>
                </FadeInSection>
                <FadeInSection delay={0.1}>
                    <p className="text-accent text-sm text-center font-sans italic tracking-wider max-w-xl md:mx-auto">
                        {siteconfig.heroShortBrandPromise}
                    </p>
                </FadeInSection>
                <FadeInSection delay={0.2}>
                    <h1 className="text-4xl text-neutral text-shadow-md text-shadow-secondary text-center font-bold font-serif max-w-sm mx-auto md:max-w-md md:text-5xl lg:max-w-fit">
                        {siteconfig.heroTitle}
                    </h1>
                </FadeInSection>
                <FadeInSection delay={0.3}>
                    <p className="text-lg text-neutral/90 font-sans text-shadow-sm text-shadow-secondary text-center max-w-xl md:mx-auto">
                        {siteconfig.heroPara}
                    </p>
                </FadeInSection>
            </div>
            {/* cta buttons */}
            <FadeInSection delay={0.4}>
                <div id="ctaContainer" className="relative font-sans flex flex-col justify-center items-center gap-4 md:flex-row">
                    <Button btnText={siteconfig.heroCtaText1} btnUrl={"#services"} variant="filled"/>
                    <Button btnText={siteconfig.heroCtaText2} btnUrl={"#contact"} variant="outline"/>
                </div>
            </FadeInSection>
        </div>
    )
}