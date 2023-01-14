import { filterProps, motion } from "framer-motion";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import useWindowSize from "../helper/useWindowSize";

const AboutMe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [width,setWidth]=useState(1)
  const [height,setHeight]=useState(1)

  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)

   
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const adjustX=10
    const adjustY=20
    //0.015 for  about 800px w and up
    //0.025 less than 800
    let fontSize=''
    let paragraphe:string[]=[]
    if(canvas.width<600) {
      fontSize=canvas.width*0.026+'px'
      const textsm=' I am a web \ndeveloper with \na passion  for \ncreating \na visualy \nappealing and \nuser friendly \nwebsite. \nI will be happy to \nbring  my \nexpertise  \nin making  your \nidea a reality'

      paragraphe=textsm.split('\n')
    }
    else {
      fontSize=canvas.width*0.015+'px'
      const text='I am a web developer with \n a passion  for creating \n a visualy appealing and \n user friendly  website. \n I will be happy to bring \n my expertise  in making \n your idea a reality '
    paragraphe=text.split('\n')  
}    
addEventListener('resize',(event)=>{

      if(!canvas)return
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
      canvas.width=window.innerWidth

      canvas.height=window.innerHeight
      //
      fontSize=canvas.width*0.005+'px'
    })
   
    
    const text='I am a web developer with \n a passion  for creating \n a visualy appealing and \n user friendly  website. \n I will be happy to bring \n my expertise  in making \n your idea a reality '
    const tab=text.split('\n')  
    const textsm=' I am a web \ndeveloper with \na passion  for \ncreating \na visualy \nappealing and \nuser friendly \nwebsite. \nI will be happy to \nbring  my \nexpertise  \nin making  your \nidea a reality'
    const tabsm=textsm.split('\n')
    
    ctx.fillStyle = "white";
    ctx.font = `${fontSize} arial`;
    let lineHeight=10
    for(let i=0;i<paragraphe.length;i++){
      lineHeight += ctx.measureText('M').width
      console.log('Lineheight',lineHeight)
      ctx.fillText(paragraphe[i] as string, 2, lineHeight+2*i );
    }
    

    
    const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    //handel mouse
    
    const mouse: { x: number | null; y: number | null; radius: number } = {
      x: null,
      y: null,
      radius: 80,
    };

    window.addEventListener("mousemove", function (event) {
      mouse.x = event.x;
       mouse.y = event.y;

    });
    
    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density:number
      constructor(x: number, y: number) {
        this.x = x ;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density=(Math.random()*10)+1;
      }
      draw(){
        if(!ctx) return
        ctx.fillStyle = 'white'
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.size,15,Math.PI*2)
        ctx.closePath()
        ctx.fill()
      }
      update(){
        if(!mouse||mouse.x==null||mouse.y==null) return
        const dx=mouse.x  -this.x;
        const dy=mouse.y  -this.y;
        const distance =Math.sqrt(dx*dx+dy*dy)
        const forceDirectionX=dx/distance
        const forceDirectionY=dy/distance
        const maxDistance=mouse.radius
         const force =(maxDistance-distance)/maxDistance
         const directionX= forceDirectionX*force*this.density
         const directionY=forceDirectionY*force*this.density
        if(distance<mouse.radius){
          this.x-=directionX
          this.y-=directionY
        
        }else{
    /*   if(this.x!==this.baseX){
        const dx=this.x - this.baseX
        this.x-= dx/10
      }
      if(this.y!==this.baseY){
        const dy=this.y - this.baseY
        this.x-= dy/10
      }  */
      this.x=this.baseX
      this.y=this.baseY
        }
      }
    }
//    var particleArray:Particle[] =[{x:0,y:0,baseX:0,baseY:0,density:0,size:0,draw(){}}]
    let particleArray:Particle[] =[]
    
    function init (){
      if(!canvas) return
  //    particleArray=[{x:0,y:0,baseX:0,baseY:0,density:0,size:0,draw(){}}]
      particleArray=[]
  
      for (let y=0,y2=textCoordinates.height;y<y2;y++){

        for(let x=0,x2=textCoordinates.width;x<x2;x++){
          const point=textCoordinates.data[(y*4*textCoordinates.width)+(x*4)+3]
          if(typeof point =='undefined') return
          
          if(point >128){
            const positionX=x
            const positionY=y
            particleArray.push(new Particle(positionX*5,positionY*5))
          }
        }
      } 
    }
    init()
    function animate(){
      if (!canvas||!ctx) return    
      ctx.clearRect(0,0,canvas.width,canvas.height)
      for (let i=0 ;i<particleArray.length;i++){
        
        particleArray[i]?.draw()
        particleArray[i]?.update()
      }
      requestAnimationFrame(animate)
    }
    animate()


  }, [width,height]);

  return (
    <div className="  h-screen w-full text-6xl">
      <canvas style={{width:'100%',height:'100%',}} className="abolute top-40 left-0  bg-Cyellow font-passion" ref={canvasRef} />
    </div>
  );
};

export default AboutMe;
