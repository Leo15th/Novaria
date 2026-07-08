import FadeInSection from "./FadeInSection"
import { siteconfig } from "../../site.config"
export default function Features(){
    return(
        <div className="bg-secondary px-10 py-20 lg:px-40">
            {/* Bronze divider  */}
            <FadeInSection>
                <div className="w-16 h-0.5 bg-highlight mx-auto mb-8"></div>
            </FadeInSection>

            {/* Title */}
            <FadeInSection>
                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-neutral text-3xl font-bold font-serif text-center md:text-4xl lg:text-5xl mb-8 md:mb-10">
                        {siteconfig.featuresTitle}
                    </h2>
                    <h3 className="text-neutral/80 text-center text-lg font-bold md:text-xl lg:text-2xl">{siteconfig.featuresSubtitle}</h3>
                </div>
            </FadeInSection>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                {
                    siteconfig.features.map((feature, index) => (
                        <FadeInSection key={index} delay={index * 0.1}>
                            <div className="flex flex-col items-center text-center gap-4 p-6 rounded-lg border border-highlight/30 hover:border-accent transition-all duration-300 ease-in-out min-h-72">
                                <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent flex items-center justify-center">
                                    <span className="text-accent text-2xl font-bold">{index + 1}</span>
                                </div>
                                <h3 className="text-neutral text-xl font-bold font-serif">
                                    {feature.title}
                                </h3>
                                <p className="text-neutral/70 text-sm tracking-wide leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </FadeInSection>
                    ))
                }
            </div>
        </div>
    )
}