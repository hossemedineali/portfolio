import create from "zustand";

interface Hovered {
    isHovered:boolean,
    hoveredIndex:number,
    setIsHovered:(x:boolean)=>void,
    setHoveredIndex:(x:number)=>void
}

export const useSphereHovered=create<Hovered>()(
    (set)=>({
      isHovered:false,
      hoveredIndex:-1,
      setIsHovered:(x)=>set({isHovered:x}),
      setHoveredIndex:(x)=>set({hoveredIndex:x})
    })
)