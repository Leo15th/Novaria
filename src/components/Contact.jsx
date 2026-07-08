import { useState } from "react"
import { siteconfig } from "../../site.config"
import FadeInSection from "./FadeInSection"
import Button from "./Button"

export default function Contact(){
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return(
        <div className="bg-neutral px-10 py-20 lg:px-24">
            <FadeInSection>
                <h2 className="text-3xl font-bold text-primary text-center mb-4 md:text-4xl lg:text-5xl">
                    {siteconfig.contactTitle}
                </h2>
                <p className="text-primary/80 text-center text-lg font-medium mb-12 md:text-xl lg:mb-16">
                    {siteconfig.contactSubtitle}
                </p>
            </FadeInSection>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 max-w-5xl mx-auto">

                {/* Contact info */}
                <FadeInSection>
                    <div className="flex flex-col gap-6">
                        <div>
                            <h3 className="text-accent text-sm font-bold uppercase tracking-widest mb-2">Phone</h3>
                            <p className="text-primary text-lg">{siteconfig.contactPhone}</p>
                        </div>
                        <div>
                            <h3 className="text-accent text-sm font-bold uppercase tracking-widest mb-2">Email</h3>
                            <p className="text-primary text-lg">{siteconfig.contactEmail}</p>
                        </div>
                        <div>
                            <h3 className="text-accent text-sm font-bold uppercase tracking-widest mb-2">Address</h3>
                            <p className="text-primary text-lg">{siteconfig.contactAddress}</p>
                        </div>
                        <div>
                            <h3 className="text-accent text-sm font-bold uppercase tracking-widest mb-2">Hours</h3>
                            {siteconfig.contactHours.map((h, i) => (
                                <p key={i} className="text-primary/80 text-base flex justify-between max-w-xs">
                                    <span>{h.day}</span>
                                    <span>{h.time}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                </FadeInSection>

                {/* Contact form */}
                <FadeInSection delay={0.1}>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-primary text-neutral placeholder-neutral/50 px-4 py-3 rounded-lg border border-highlight/30 focus:border-accent focus:outline-none transition-all duration-300"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-primary text-neutral placeholder-neutral/50 px-4 py-3 rounded-lg border border-highlight/30 focus:border-accent focus:outline-none transition-all duration-300"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="bg-primary text-neutral placeholder-neutral/50 px-4 py-3 rounded-lg border border-highlight/30 focus:border-accent focus:outline-none transition-all duration-300 resize-none"
                        />
                        <Button btnText={siteconfig.contactCtaText} btnUrl={null} type="submit"/>
                    </form>
                </FadeInSection>

            </div>
        </div>
    )
}