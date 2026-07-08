import { siteconfig } from "../../site.config"

export default function Footer(){
    return(
        <footer className="bg-primary border-t border-highlight/20 px-10 py-12 lg:px-24">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-start">

                {/* Logo + tagline */}
                <div className="flex flex-col items-center gap-2 md:items-start">
                    <div className="flex items-center gap-3">
                        <img src={siteconfig.logImg} alt={`${siteconfig.logoText} Logo`} className="w-8 h-auto"/>
                        <span className="font-serif text-xl text-neutral font-bold">{siteconfig.logoText}</span>
                    </div>
                    <p className="text-neutral/60 text-sm text-center md:text-left max-w-xs">
                        {siteconfig.footerTagline}
                    </p>
                </div>

                {/* Nav links */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-start">
                    {
                        siteconfig.navlinks.map((link, i) => (
                            <a 
                                key={i}
                                href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                                className="text-neutral/70 text-sm hover:text-accent transition-all duration-300 ease-in-out"
                            >
                                {link}
                            </a>
                        ))
                    }
                </div>

                {/* Socials */}
                <div className="flex gap-4">
                    {
                        siteconfig.footerSocials.map((social, i) => (
                            <a 
                                key={i}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent text-sm font-medium uppercase tracking-wider hover:text-neutral transition-all duration-300 ease-in-out"
                            >
                                {social.name}
                            </a>
                        ))
                    }
                </div>

            </div>

            {/* Divider */}
            <div className="w-full h-px bg-highlight/20 my-8"></div>

            {/* Copyright */}
            <p className="text-neutral/50 text-xs text-center">
                {siteconfig.footerCopyright}
            </p>
        </footer>
    )
}