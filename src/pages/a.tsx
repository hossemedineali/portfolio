import { filterProps, motion } from "framer-motion";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import useWindowSize from "../helper/useWindowSize";

const AboutMe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const adjustX=10
    const adjustY=20
    
    ctx.fillStyle = "white";
    ctx.font = "20px veranda";
    ctx.fillText("Hossem", 0, 20);
    

    
    const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    //handel mouse
    
    const mouse: { x: number | null; y: number | null; radius: number } = {
      x: null,
      y: null,
      radius: 50,
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
        this.density=(Math.random()*40)+5;
      }
      draw(){
        if(!ctx) return
        ctx.fillStyle = 'red'
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2)
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


  }, []);

  return (
    <div className="  h-screen w-full text-6xl">
      <canvas className="abolute top-0 left-0  bg-black" ref={canvasRef} />
    </div>
  );
};

export default AboutMe;
