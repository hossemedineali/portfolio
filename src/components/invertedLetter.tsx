import { motion } from "framer-motion";

const InvertedLetter:React.FC<{l:string}> = ({l}) => {
    return (<motion.span whileHover={{y:10}} initial={{rotate:90}} animate={{rotate:0}} transition={{duration:2,delay:4}}> 
            {l}
    </motion.span>  );
}
 
export default InvertedLetter;