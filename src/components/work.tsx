const Work = () => {
    return ( <div className="h-fit w-full overflow-auto bg-red z-30 ">
                <h1 className=" w-full  text-white text-2xl mx-auto text-center">My work</h1>

                <div className=" flex flex-col  gap-5">
                    <div className="w-full md:w-[550px] h-96 border-2"></div>
                    <div className="w-full md:w-[550px] h-96 border-2"></div>
                    <div className="w-full md:w-[550px] h-96 border-2"></div>
                    <div className="w-full md:w-[550px] h-96 border-2"></div>
                </div>
                
    </div> );
}
 
export default Work;