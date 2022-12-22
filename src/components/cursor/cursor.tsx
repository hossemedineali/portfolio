import { motion,  } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'


function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{width:number|undefined,height:number|undefined}>({
    width:undefined ,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
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
        star.alpha -= 0.01

        // Draw the star
      /*   ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`
        ctx.fill()
 */
        ctx.strokeStyle = 'rgba(255, 255, 255, ${star.alpha})';	
			ctx.lineWidth = 4;			
			ctx.beginPath();
			ctx.moveTo(star.x, star.y);
			ctx.lineTo(star.x, star.y);
			ctx.stroke();
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
      if (randomNumber < 0.5) {
        color = '#00FF00' // neon green
      } else {
        color = '#FF0000' // neon red
      }
      // Add a new star based on the cursor's speed
      stars.push(
        new Star(
          event.clientX,
          event.clientY,
          event.movementX / 10,
          event.movementY / 10,
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
      //animate={{ x: cursorPosition.x, y: cursorPosition.y }}
      ref={canvasRef}
     width={width?width-10:0}
     
     height={1200}
     style={{maxWidth:'100vw'}}
    />
  )
}

export default Canvas
