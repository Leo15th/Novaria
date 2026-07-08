import { siteconfig } from "../../site.config"
import Button from "./Button"
import FadeInSection from "./FadeInSection"

export default function Story(){
    return(
        <div className="bg-secondary px-10 py-20 lg:px-40">

            {/* Bronze divider  */}
            <FadeInSection>
                <div className="w-16 h-0.5 bg-highlight mx-auto mb-8"></div>
            </FadeInSection>

            {/* Title */}
            <FadeInSection>
                <h2 className="text-neutral text-3xl font-bold font-serif text-center md:text-4xl lg:text-5xl mb-8 md:mb-10">
                    {siteconfig.storyTitle}
                </h2>
            </FadeInSection>

            {/* Photo + text side by side */}
            <div className="flex flex-col md:flex-row gap-10 mt-4 items-start">

                {/* Chef photo  */}
                <div className="w-full md:w-2/5 shrink-0">
                    <FadeInSection>
                        <img
                            src={siteconfig.storyHeroImgUrl}
                            alt={siteconfig.storyHeroImgAlt}
                            className="w-full max-w-sm mx-auto rounded-lg object-cover object-center aspect-square shadow-lg shadow-neutral/20"
                        />
                    </FadeInSection>
                </div>

                {/* Text  */}
                <div className="flex flex-col gap-6 flex-1">
                    <FadeInSection>
                        <p className="text-lg text-left tracking-wider leading-relaxed text-neutral/90 md:text-justify">
                            {siteconfig.storyPara1}
                        </p>
                    </FadeInSection>
                    <FadeInSection delay={0.1}>
                        <p className="text-lg text-left tracking-wider leading-relaxed text-neutral/90 md:text-justify">
                            {siteconfig.storyPara2}
                        </p>
                    </FadeInSection>
                    <FadeInSection delay={0.2}>
                        <p className="text-lg text-left tracking-wider leading-relaxed text-neutral/90 md:text-justify">
                            {siteconfig.storyPara3}
                        </p>
                    </FadeInSection>
                    <FadeInSection delay={0.3}>
                        <p className="text-lg text-left tracking-wider leading-relaxed text-accent italic md:text-justify">
                            {siteconfig.storyPara4}
                        </p>
                    </FadeInSection>
                </div>
            </div>

            {/* CTA */}
            <FadeInSection>
                <div className="flex justify-center items-center mt-12">
                    <Button btnText={siteconfig.storyCtaText} btnUrl={"#"}/>
                </div>
            </FadeInSection>

        </div>
    )
}