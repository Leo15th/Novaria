import { motion } from "motion/react"
import { Children } from "react"
export default function FadeInSection({children, delay = 0}){
    return(
        <>
            <motion.div
                initial={{opacity: 0, y:24}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.6, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </>
    )
}