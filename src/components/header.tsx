

const links=[{tittle:'About'},{ tittle:'Work'},{tittle:'skills'},{tittle:'Contact'}]
const Header = () => {
        return (  <div className="py-5 flex" >
            <h1 className="flex-grow-1 md:ml-10 mr-auto text-2xl font-mono text-white font-semibold ">Hossem edine ali</h1>
            <ul className=" flex-grow justify-evenly hidden md:flex "> 
                {links.map(item=><p key={item.tittle}> {item.tittle}</p>)}
            </ul>
        </div>);
    }
    
    export default Header;