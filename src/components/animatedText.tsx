
import {motion} from 'framer-motion'


const AnimatedText:React.FC<{text:string}> = ({text}) => {

        const t=text.split(' ')

        const container= {
            hidden:{opacity:0},
            visible:(i=1)=>({
                opacity:1,
                transition:{
                    staggerChildren:0.12,
                    delayChildren:0.04*i,
                   
                }
            }),
        }

        const child={
            visible:{
                opacity:1,
                y:0,
                x:0,
                transition:{
                    type:'spring',
                    damping:12,
                    stiffness:100
                },
            
            },
            hidden:{
                opacity:0,
                y:20,
                x:-20,
                transition:{
                    type:'spring',
                    damping:12,
                    stiffness:100,
                },
            }
        }
        console.log(t)
        return ( <motion.div className='overflow-hidde flex' variants={container} initial='hidden' animate='visible'>
                    {t.map((t,i)=>{
                        return <motion.span variants={child} key={i} className='mr-[5px] text-white text-2xl font-mono font-bold'>{t}</motion.span>
                    })}
        </motion.div> );
    }
    
    export default AnimatedText;