import { useState, useEffect } from "react"
import { siteconfig } from "../../site.config"
export default function Nav(){
    const [open, setOpen] = useState(false);
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);
    return(
        <>
        <nav className="bg-primary p-4 fixed w-full flex items-center justify-between z-50 shadow-md shadow-secondary/40">
            {/* logo container */}
            <div id="logoContainer" className="flex justify-center items-center gap-4">
                <img src={siteconfig.logImg} alt="Giulio Lab Logo" className="w-14 h-auto md:w-16"/>
                <h1 className="font-serif text-3xl text-neutral font-extrabold md:text-4xl">{siteconfig.logoText}</h1>
            </div>
            {/* mobile menu icon */}
            <div className="relative w-7 h-7 cursor-pointer group overflow-x-hidden" onClick={()=>setOpen(!open)}>
                <span className={`absolute block w-full h-0.5 bg-accent transition-all duration-300 ease-in-out ${open? "rotate-45 top-3" : "top-1"}`}></span>
                <span className={`absolute block w-full h-0.5 bg-accent top-3 transition-all duration-300 ease-in-out ${open? "transform translate-x-full opacity-0" : "opacity-100"}`}></span>
                <span className={`absolute block w-full h-0.5 bg-accent transition-all duration-300 ease-in-out ${open? "-rotate-45 top-3" : "top-5"}`}></span>
            </div>
        </nav>
        {/* mobile menu section */}
        <div className={`fixed w-full transition-all duration-300 ease-in-out z-40 ${
            open 
                ? "opacity-100 translate-y-0 pointer-events-auto" 
                : "opacity-0 -translate-y-4 pointer-events-none"
        }`}>
            <ul className="fixed top-16 bg-primary h-[calc(100vh-4rem)] w-full left-0 right-0 z-50 px-8 pt-16 pb-28 flex flex-col gap-4 divide-y divide-highlight/40 space-y-3 lg:px-20 overflow-y-auto scrollbar-none scroll-smooth">
                {
                    siteconfig.navlinks.map((link,index)=>(
                        <li key={index}>
                            <a 
                                href={`#${link.toLowerCase().replace(/\s+/g, "")}`}  
                                className="py-1 px-2 transition-all duration-300 ease-in-out flex justify-between items-center text-lg cursor-pointer text-neutral hover:scale-105 hover:font-medium focus:scale-105 focus:font-medium hover:text-accent"
                                onClick={() => setOpen(false)}
                            >
                                {link}<span className="text-3xl text-accent">&#62;</span>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
        </>
    )
}