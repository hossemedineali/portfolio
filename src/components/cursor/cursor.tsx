import { motion,  } from 'framer-motion'
import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
    <motion.div
      animate={{ x: cursorPosition.x, y: cursorPosition.y }}
      transition={{type:'spring',stiffness:250,damping:200}}
      className="custom-cursor"
      style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 20,
          height: 20,
          borderRadius: '50%',
          backgroundColor: 'red',
          zIndex: 999,
        }}
        />
        <motion.div
      animate={{ x: cursorPosition.x, y: cursorPosition.y }}
      className="custom-cursor"
      style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 20,
          height: 20,
          borderRadius: '50%',
          backgroundColor: 'blue',
          zIndex: 999,
        }}
        transition={{type:'spring',stiffness:500}}
        />
        <motion.div
      animate={{ x: cursorPosition.x, y: cursorPosition.y }}
      className="custom-cursor"
      transition={{type:'spring',stiffness:100}}
      style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 20,
          height: 20,
          borderRadius: '50%',
          backgroundColor: 'yellow',
          zIndex: 999,
        }}
        />
        
        </>
  )
}

export default CustomCursor
