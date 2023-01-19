import create from 'zustand'



interface Projects{
    //show:boolean,
    prjectNumber:number,
    //toggleShow:()=>void,
    setProjectNumber:(x:number)=>void
}
const useProjectModal=create<Projects>()(
    (set)=>({
      //  show:false,
        prjectNumber:0,
        //toggleShow:()=>set({show:!get().show}),
        setProjectNumber:(x)=>set({prjectNumber:x})
    })
)

interface Scroll{
    scrtollto:number,
    setScrollTo:(x:number)=>void
}

const useScrollTo=create<Scroll>(
    (set)=>({
        scrtollto:0,
        setScrollTo:(x)=>set({scrtollto:x})
    })
)

export {useProjectModal,useScrollTo}