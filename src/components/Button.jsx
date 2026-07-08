export default function Button({ btnText, btnUrl, variant = "filled", type }) {
    const filledStyles = "bg-accent text-primary border border-transparent hover:bg-neutral hover:text-primary hover:border-accent hover:shadow-md hover:shadow-primary/20";
    
    const outlineStyles = "bg-transparent text-neutral border border-accent hover:bg-accent hover:text-primary hover:shadow-md hover:shadow-primary/20 backdrop-blur-xs";

    const classes = `capitalize px-6 font-sans py-2 w-full md:w-auto text-lg font-medium rounded-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95 inline-block text-center ${
        variant === "outline" ? outlineStyles : filledStyles
    }`;

    if (type === "submit") {
        return (
            <button type="submit" className={classes}>
                {btnText}
            </button>
        );
    }

    return (
        <a className={classes} href={btnUrl}>
            {btnText}
        </a>
    );
}