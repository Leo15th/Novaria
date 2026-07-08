import ImageCard from "./ImageCard"
import Button from "./Button"
import FadeInSection from "./FadeInSection"
import { siteconfig } from "../../site.config"
export default function OurMenu(){
    return(
        <div className="bg-neutral px-10 py-20 lg:px-40">
            <div>
                {/* Bronze divider  */}
                <FadeInSection>
                    <div className="w-16 h-0.5 bg-highlight mx-auto mb-8"></div>
                </FadeInSection>
                <FadeInSection>
                <h2 className="text-3xl font-bold text-primary text-center mb-4 md:text-4xl lg:text-5xl lg:mb-10">{siteconfig.menuTitle}</h2>
                <h3 className="text-primary/80 text-center text-lg font-bold md:text-xl lg:text-2xl">{siteconfig.menuSubtitle}</h3>
                </FadeInSection>
            </div>
            <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2 md:gap-10 md:mt-10 lg:grid-cols-4">
                {
                    siteconfig.menuDishes.map((dish, index)=>(
                        <FadeInSection key={index}>
                            <ImageCard
                                imageUrl={dish.image}
                                imageAlt={dish.name}
                                menuTitle={dish.name}
                                menuDescription={dish.description}
                                menuPrice={dish.price}
                            />
                        </FadeInSection>
                    ))
                }
            </div>
            <FadeInSection>
            <div className="flex justify-center items-center mt-10">
                <Button 
                    btnText={siteconfig.menuCtaText}
                    btnUrl={"#"}
                />
            </div>
            </FadeInSection>
        </div>
    )
}