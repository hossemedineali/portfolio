import { motion ,useScroll, useTransform} from "framer-motion";

const LogoSVG = () => {

    const { scrollY } = useScroll()
    const x=useTransform(scrollY,[125,300],['0','-100px'])

    const pathLength=useTransform(scrollY,[0,120],[1,0])
  return (
    <motion.div initial={{left:'50%',top:'50%',translateX:'-50%',translateY:'-50%'}} animate={{left:'5px',top:'15px',translateX:0,translateY:0}} transition={{duration:2,delay:2}} className='fixed' >
        
  <motion.svg initial={{}} className='w-[50vw] h-[16vw]  sm:w-[320px] sm:h-[80px] xl:w-[420px] xl:h-[110px]  ' viewBox="0 0 319 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-outside-1_7_68" maskUnits="userSpaceOnUse" x="0.320007" y="0.640015" width="319" height="69" fill="black">
<rect fill="white" x="0.320007" y="0.640015" width="319" height="69"/>
<motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2}} className='shadow-2xl shadow-primary'           d="M42.64 3.60001C45.2 3.60001 46.48 14 46.48 34.8C46.48 55.6 45.2 66 42.64 66C40.08 66 38.8 61.392 38.8 52.176C38.8 43.024 34 38.448 24.4 38.448C14.8 38.448 10 43.024 10 52.176C10 61.392 8.72001 66 6.16001 66C3.60001 66 2.32001 55.6 2.32001 34.8C2.32001 14 3.60001 3.60001 6.16001 3.60001C8.72001 3.60001 10 8.20801 10 17.424C10 26.64 14.8 31.248 24.4 31.248C34 31.248 38.8 26.64 38.8 17.424C38.8 8.20801 40.08 3.60001 42.64 3.60001Z"/>
<motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2}}            d="M66.688 66.96L55.36 50.064V19.824L67.264 2.64001H90.112L101.44 19.536V50.064L90.112 66.96H66.688ZM86.368 59.568L93.76 47.184V22.512L86.368 10.032H70.432L63.04 22.512V47.184L70.432 59.568H86.368Z"/>
<motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2}}          d="M114.544 45.744C116.848 45.744 118.128 47.792 118.384 51.888L127.792 59.76H139.6L146.128 54.288V46.608L142.576 42.672L139.504 40.464C137.904 39.824 135.984 39.152 133.744 38.448C131.504 37.68 129.168 36.848 126.736 35.952L119.056 32.304L113.104 25.2V15.024L117.808 7.24801L126.736 2.64001H142.384L152.752 13.488C152.624 19.568 151.44 22.608 149.2 22.608C146.832 22.608 145.616 20.464 145.552 16.176L138.256 9.93601H127.408L120.784 14.736V22.416L124.144 26.448L128.944 28.752C130.352 29.264 131.6 29.712 132.688 30.096C133.84 30.48 134.64 30.736 135.088 30.864C136.048 31.312 136.944 31.664 137.776 31.92C138.224 32.112 139.024 32.464 140.176 32.976C141.328 33.424 142.864 34 144.784 34.704L149.392 38.256L153.808 44.592V57.456L143.632 66.96H126.544L115.696 60.24L110.896 51.12C110.896 49.456 110.864 48.272 110.8 47.568C110.8 46.8 111.024 46.32 111.472 46.128C111.984 45.872 113.008 45.744 114.544 45.744Z"/>
<motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2}}          d="M168.544 45.744C170.848 45.744 172.128 47.792 172.384 51.888L181.792 59.76H193.6L200.128 54.288V46.608L196.576 42.672L193.504 40.464C191.904 39.824 189.984 39.152 187.744 38.448C185.504 37.68 183.168 36.848 180.736 35.952L173.056 32.304L167.104 25.2V15.024L171.808 7.24801L180.736 2.64001H196.384L206.752 13.488C206.624 19.568 205.44 22.608 203.2 22.608C200.832 22.608 199.616 20.464 199.552 16.176L192.256 9.93601H181.408L174.784 14.736V22.416L178.144 26.448L182.944 28.752C184.352 29.264 185.6 29.712 186.688 30.096C187.84 30.48 188.64 30.736 189.088 30.864C190.048 31.312 190.944 31.664 191.776 31.92C192.224 32.112 193.024 32.464 194.176 32.976C195.328 33.424 196.864 34 198.784 34.704L203.392 38.256L207.808 44.592V57.456L197.632 66.96H180.544L169.696 60.24L164.896 51.12C164.896 49.456 164.864 48.272 164.8 47.568C164.8 46.8 165.024 46.32 165.472 46.128C165.984 45.872 167.008 45.744 168.544 45.744Z"/>
<motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2}}          d="M244.336 58.8C256.496 58.8 262.576 59.984 262.576 62.352C262.576 64.784 255.216 66 240.496 66C225.712 66 218.32 55.6 218.32 34.8C218.32 14 225.68 3.60001 240.4 3.60001C255.12 3.60001 262.48 4.78401 262.48 7.15201C262.48 9.58401 256.4 10.8 244.24 10.8C232.08 10.8 226 14.224 226 21.072C226 27.92 230.992 31.344 240.976 31.344C250.896 31.344 255.856 32.528 255.856 34.896C255.856 37.328 250.896 38.544 240.976 38.544C230.992 38.544 226 41.904 226 48.624C226 55.408 232.112 58.8 244.336 58.8Z"/>
<motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2}}          d="M312.64 3.60001C315.2 3.60001 316.48 14 316.48 34.8C316.48 55.6 315.2 66 312.64 66C310.08 66 308.8 59.12 308.8 45.36C308.8 31.728 307.04 31.728 303.52 45.36C299.936 59.12 296.896 66 294.4 66C291.904 66 288.864 59.184 285.28 45.552C281.76 32.048 280 32.048 280 45.552C280 59.184 278.72 66 276.16 66C273.6 66 272.32 55.6 272.32 34.8C272.32 14 273.6 3.60001 276.16 3.60001C278.72 3.60001 282.4 12.272 287.2 29.616C292 46.96 296.8 46.96 301.6 29.616C306.4 12.272 310.08 3.60001 312.64 3.60001Z"/>
</mask>
<motion.path style={{x}} initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2}}          d="M42.64 3.60001C45.2 3.60001 46.48 14 46.48 34.8C46.48 55.6 45.2 66 42.64 66C40.08 66 38.8 61.392 38.8 52.176C38.8 43.024 34 38.448 24.4 38.448C14.8 38.448 10 43.024 10 52.176C10 61.392 8.72001 66 6.16001 66C3.60001 66 2.32001 55.6 2.32001 34.8C2.32001 14 3.60001 3.60001 6.16001 3.60001C8.72001 3.60001 10 8.20801 10 17.424C10 26.64 14.8 31.248 24.4 31.248C34 31.248 38.8 26.64 38.8 17.424C38.8 8.20801 40.08 3.60001 42.64 3.60001Z" stroke="#994AA6" strokeWidth="6" mask="url(#path-1-outside-1_7_68)"/>
<motion.path style={{pathLength}} initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2}}          d="M66.688 66.96L55.36 50.064V19.824L67.264 2.64001H90.112L101.44 19.536V50.064L90.112 66.96H66.688ZM86.368 59.568L93.76 47.184V22.512L86.368 10.032H70.432L63.04 22.512V47.184L70.432 59.568H86.368Z" stroke="#994AA6" strokeWidth="6" mask="url(#path-1-outside-1_7_68)"/>
<motion.path style={{pathLength}} initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2}}          d="M114.544 45.744C116.848 45.744 118.128 47.792 118.384 51.888L127.792 59.76H139.6L146.128 54.288V46.608L142.576 42.672L139.504 40.464C137.904 39.824 135.984 39.152 133.744 38.448C131.504 37.68 129.168 36.848 126.736 35.952L119.056 32.304L113.104 25.2V15.024L117.808 7.24801L126.736 2.64001H142.384L152.752 13.488C152.624 19.568 151.44 22.608 149.2 22.608C146.832 22.608 145.616 20.464 145.552 16.176L138.256 9.93601H127.408L120.784 14.736V22.416L124.144 26.448L128.944 28.752C130.352 29.264 131.6 29.712 132.688 30.096C133.84 30.48 134.64 30.736 135.088 30.864C136.048 31.312 136.944 31.664 137.776 31.92C138.224 32.112 139.024 32.464 140.176 32.976C141.328 33.424 142.864 34 144.784 34.704L149.392 38.256L153.808 44.592V57.456L143.632 66.96H126.544L115.696 60.24L110.896 51.12C110.896 49.456 110.864 48.272 110.8 47.568C110.8 46.8 111.024 46.32 111.472 46.128C111.984 45.872 113.008 45.744 114.544 45.744Z" stroke="#994AA6" strokeWidth="6" mask="url(#path-1-outside-1_7_68)"/>
<motion.path style={{pathLength}} initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2}}           d="M168.544 45.744C170.848 45.744 172.128 47.792 172.384 51.888L181.792 59.76H193.6L200.128 54.288V46.608L196.576 42.672L193.504 40.464C191.904 39.824 189.984 39.152 187.744 38.448C185.504 37.68 183.168 36.848 180.736 35.952L173.056 32.304L167.104 25.2V15.024L171.808 7.24801L180.736 2.64001H196.384L206.752 13.488C206.624 19.568 205.44 22.608 203.2 22.608C200.832 22.608 199.616 20.464 199.552 16.176L192.256 9.93601H181.408L174.784 14.736V22.416L178.144 26.448L182.944 28.752C184.352 29.264 185.6 29.712 186.688 30.096C187.84 30.48 188.64 30.736 189.088 30.864C190.048 31.312 190.944 31.664 191.776 31.92C192.224 32.112 193.024 32.464 194.176 32.976C195.328 33.424 196.864 34 198.784 34.704L203.392 38.256L207.808 44.592V57.456L197.632 66.96H180.544L169.696 60.24L164.896 51.12C164.896 49.456 164.864 48.272 164.8 47.568C164.8 46.8 165.024 46.32 165.472 46.128C165.984 45.872 167.008 45.744 168.544 45.744Z" stroke="#994AA6" strokeWidth="6" mask="url(#path-1-outside-1_7_68)"/>
<motion.path style={{pathLength}} initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2}}           d="M244.336 58.8C256.496 58.8 262.576 59.984 262.576 62.352C262.576 64.784 255.216 66 240.496 66C225.712 66 218.32 55.6 218.32 34.8C218.32 14 225.68 3.60001 240.4 3.60001C255.12 3.60001 262.48 4.78401 262.48 7.15201C262.48 9.58401 256.4 10.8 244.24 10.8C232.08 10.8 226 14.224 226 21.072C226 27.92 230.992 31.344 240.976 31.344C250.896 31.344 255.856 32.528 255.856 34.896C255.856 37.328 250.896 38.544 240.976 38.544C230.992 38.544 226 41.904 226 48.624C226 55.408 232.112 58.8 244.336 58.8Z" stroke="#994AA6" strokeWidth="6" mask="url(#path-1-outside-1_7_68)"/>
<motion.path style={{pathLength}} initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2}}           d="M312.64 3.60001C315.2 3.60001 316.48 14 316.48 34.8C316.48 55.6 315.2 66 312.64 66C310.08 66 308.8 59.12 308.8 45.36C308.8 31.728 307.04 31.728 303.52 45.36C299.936 59.12 296.896 66 294.4 66C291.904 66 288.864 59.184 285.28 45.552C281.76 32.048 280 32.048 280 45.552C280 59.184 278.72 66 276.16 66C273.6 66 272.32 55.6 272.32 34.8C272.32 14 273.6 3.60001 276.16 3.60001C278.72 3.60001 282.4 12.272 287.2 29.616C292 46.96 296.8 46.96 301.6 29.616C306.4 12.272 310.08 3.60001 312.64 3.60001Z" stroke="#994AA6" strokeWidth="6" mask="url(#path-1-outside-1_7_68)"/>
</motion.svg> 
 









    </motion.div>
  );
};

export default LogoSVG;
