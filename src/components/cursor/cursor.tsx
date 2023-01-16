import { motion,  } from 'framer-motion'
import { useEffect, useRef,  } from 'react'
import useWindowSize from '../../helper/useWindowSize'

const Canvas = () => {
  // Create a reference to the canvas element
  const canvasRef = useRef<HTMLCanvasElement>(null)
  

  const { width, height } = useWindowSize()


  // Array of stars
  const stars: Star[] = []

  // Star class
  class Star {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    alpha: number
    color: string
    constructor(x: number, y: number, vx: number, vy: number, radius: number, alpha: number,color :string) {
      this.x = x
      this.y = y
      this.vx = vx
      this.vy = vy
      this.radius = radius
      this.alpha = alpha
      this.color = color
    }
  }

  // Set up the canvas and start the update loop
  useEffect(() => {
    console.log("cursor :,",width,height)

    // Get a reference to the canvas element
    const canvas = canvasRef.current

    if(!canvas){
        console.log('no canvas ,will return')
        return
    }
    // Get a reference to the canvas rendering context
    const ctx = canvas.getContext('2d')
    
    if(!ctx){
        console.log('no ctx ,will return')
        return
    }
    // Update function
    function update() {
        if(!ctx){
            console.log('no ctx ,will return')
            return
        }
        if(!canvas){
            console.log('no canvas ,will return')
            return
        }
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Loop through the array of stars
      for (const star of stars) {
        // Update the position of the star
        star.x += star.vx
        star.y += star.vy

        // Fade the star out over time
        star.alpha -= 0.1

        // Draw the star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI)
        ctx.fillStyle = star.color //`rgba(255, 255, 255, ${star.alpha})`
        ctx.fill()


      }

      // Schedule the update function to be called on the next frame
      requestAnimationFrame(update)
    }

    // Start the update loop
    update()
  }, [])

  // Add a star to the array when the mouse moves
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Calculate the cursor's speed
      const speed = Math.sqrt(event.movementX ** 2 + event.movementY ** 2)
       // Generate a random number between 0 and 1
      const randomNumber = Math.random()

      // Choose the color of the star based on the random number
      let color: string
      
      
      if (randomNumber < 0.1) {
        color = '#FFACFC' 
      }else  if(randomNumber<0.2) {
        color = '#FFACFC' 
      }  else if(randomNumber<0.3){
        color = '#F148FB' 
      }
      else if(randomNumber<0.4){
        color = '#F148FB' 
      }
      else if(randomNumber<0.5){
        color = '#7122FA' 
      }
      else if(randomNumber<0.6){
        color = '#712FA' 
      }
      else if(randomNumber<0.7){
        color = '#7122FA' 
      }
      else if(randomNumber<0.8){
        color = '#560A86' 
      }
      else if(randomNumber<0.9){
        color = '#560A86' 
      }
      
      else {
        color = '#560A86' 
      }

      

      if (randomNumber < 0.1) {
        color = '#08f7fe' 
      }else  if(randomNumber<0.2) {
        color = '#08f7fe' 
      }  else if(randomNumber<0.3){
        color = '#09fbd3' 
      }
      else if(randomNumber<0.4){
        color = '#09fbd3' 
      }
      else if(randomNumber<0.5){
        color = '#fe53bb' 
      }
      else if(randomNumber<0.6){
        color = '#fe53bb' 
      }
      else if(randomNumber<0.7){
        color = '#f5d300' 
      }
      else if(randomNumber<0.8){
        color = '#f5d300' 
      }
      else if(randomNumber<0.9){
        color = '#09fbd3' 
      }
      
      else {
        color = '#f5d300' 
      }
       
      stars.push(
        new Star(
          event.clientX,
          event.clientY,
          event.movementX / 5,
          event.movementY / 5,
          5 + speed / 2,
          1,
          color=color
        )
      )
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
     width={width?width-10:0}
     
     height={1200}
     style={{maxWidth:'98vw'}}
    />
  )
}

export default Canvas
