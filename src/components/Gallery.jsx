import FadeInSection from "./FadeInSection"
import { siteconfig } from "../../site.config";
import Button from "./Button";
export default function Gallery(){
    return(
        <div className="bg-neutral px-10 py-20 lg:px-24">
            <FadeInSection>
            <h2 className="text-3xl font-bold text-primary text-center mb-8 md:text-4xl lg:text-5xl lg:mb-12">{siteconfig.galleryTitle}</h2>
            </FadeInSection>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {
                    siteconfig.galleryPhotos.map((photo, i)=>(
                        <FadeInSection key={i}>
                            <div className="rounded-lg overflow-hidden shadow-md shadow-secondary/70">
                                <img 
                                    src={photo.imageUrl} 
                                    alt={photo.imageAlt} 
                                    className="aspect-square object-cover object-center transition-all duration-300 ease-in-out hover:scale-110" 
                                    loading="lazy"
                                />
                            </div>
                        </FadeInSection>
                    ))
                }
            </div>
            <FadeInSection>
                <div className="flex justify-center items-center mt-10">
                    <Button 
                        btnText={siteconfig.galleryCtaText}
                        btnUrl={"#"}
                    />
                </div>
            </FadeInSection>
        </div>
    )
}