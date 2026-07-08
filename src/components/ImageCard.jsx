export default function ImageCard({imageUrl, imageAlt, menuTitle,menuDescription, menuPrice}){
    return(
            <div className="rounded-lg shadow-md shadow-primary/70 overflow-hidden min-h-96">
                <img src={imageUrl} alt={imageAlt} className="w-full aspect-square object-cover object-center transition-all duration-300 ease-in-out hover:scale-110" loading="lazy"/>
                <div className="p-4 flex flex-col gap-2 min-h-60 ">
                    <h3 className="text-xl font-bold md:text-2xl text-primary">{menuTitle}</h3>
                    <p className="text-sm text-primary/80 font-medium md:font-bold tracking-wider">{menuDescription}</p>
                    <div className="text-md font-bold text-primary"><p>{menuPrice} <span className="text-accent italic uppercase text-sm font-bold">thb</span></p></div>
                </div>
            </div>
    )
}