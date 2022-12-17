import { useEffect, useRef, useState } from 'react'

const Sphere = () => {
  // Create a reference to the canvas element
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Set up the canvas and start the update loop
  useEffect(() => {
    // Get a reference to the canvas element
    const canvas = canvasRef.current

    if(!canvas) return
    // Get a reference to the canvas rendering context
    const ctx = canvas.getContext('2d')

    // Set the canvas size to match the window size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Set up the sphere
    const sphereRadius = 200
    const sphereX = canvas.width / 2
    const sphereY = canvas.height / 2
    const sphereZ = sphereRadius

    // Set up the camera
    const cameraX = canvas.width / 2
    const cameraY = canvas.height / 2
    const cameraZ = 0

    // Update function
    function update() {
      // Clear the canvas
      if(!canvas||!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Loop through the points on the sphere
      for (let i = 0; i < 360; i += 10) {
        for (let j = -90; j <= 90; j += 10) {
          // Calculate the position of the point on the sphere
          const x = sphereX + sphereRadius * Math.cos(i / 180 * Math.PI) * Math.cos(j / 180 * Math.PI)
          const y = sphereY + sphereRadius * Math.sin(i / 180 * Math.PI) * Math.cos(j / 180 * Math.PI)
          const z = sphereZ + sphereRadius * Math.sin(j / 180 * Math.PI)

          // Calculate the distance between the point and the camera
          const distance = Math.sqrt((x - cameraX) ** 2 + (y - cameraY) ** 2 + (z - cameraZ) ** 2)

          // Calculate the projection
          const scale = (sphereRadius / (sphereRadius + distance)) * 2
          const projectionX = (x - cameraX) * scale + cameraX
          const projectionY = (y - cameraY) * scale + cameraY

          // Draw the point
          ctx.beginPath()
          ctx.arc(projectionX, projectionY, 2, 0, 2 * Math.PI)
          ctx.fillStyle = '#ffffff'
          ctx.fill()
        }
      }

      // Schedule the update function to be called on the next frame
      requestAnimationFrame(update)
    }

    // Start the update loop
    update()
  }, [])

  // Set up the sphere to follow the cursor
  const [sphereX, setSphereX] = useState(0)
  const [sphereY, setSphereY] = useState(0)
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setSphereX(event.clientX)
      setSphereY(event.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
  )
}


export default Sphere