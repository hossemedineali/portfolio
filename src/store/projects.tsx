import { boolean } from 'zod'
import create from 'zustand'

interface Projects{
    show:boolean,
    toggleShow:()=>void,
}


const useProjectModal=create<Projects>()(
    (set,get)=>({
        show:false,
        
        toggleShow:()=>set({show:!get().show}),
        
    })
)