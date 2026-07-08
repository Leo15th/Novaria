import { siteconfig } from "../../site.config"
import FadeInSection from "./FadeInSection"

function StarRating({ rating }) {
    return (
        <div className="flex gap-1 justify-center">
            {[...Array(5)].map((_, i) => (
                <span key={i} className={i < rating ? "text-accent" : "text-highlight/30"}>
                    ★
                </span>
            ))}
        </div>
    )
}

export default function Reviews(){
    return(
        <div className="bg-secondary px-10 py-20 lg:px-24">
            <FadeInSection>
                <h2 className="text-3xl font-bold text-neutral text-center mb-4 md:text-4xl lg:text-5xl">
                    {siteconfig.reviewsTitle}
                </h2>
                <p className="text-neutral/80 text-center text-lg font-medium mb-12 md:text-xl lg:mb-16">
                    {siteconfig.reviewsSubtitle}
                </p>
            </FadeInSection>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                {
                    siteconfig.reviews.map((review, i) => (
                        <FadeInSection key={i} delay={i * 0.1}>
                            <div className="flex flex-col items-center text-center gap-4 p-6 rounded-lg border border-highlight/30 hover:border-accent transition-all duration-300 ease-in-out h-full">
                                <StarRating rating={review.rating} />
                                <p className="text-neutral/90 text-sm md:text-base tracking-wide leading-relaxed italic">
                                    "{review.quote}"
                                </p>
                                <p className="text-accent text-sm font-bold uppercase tracking-widest mt-auto">
                                    {review.name}
                                </p>
                            </div>
                        </FadeInSection>
                    ))
                }
            </div>
        </div>
    )
}