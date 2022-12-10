import { useCycle } from "framer-motion";
import Header from "../header";
import Menu from "../sections/menu";

type props={
    children:JSX.Element
}

const Layout:React.FC<props> = (props) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    return ( <div className="relative min-h-screen mx-auto bg-[#1d1d1d] ">
            <Header toggleOpen={toggleOpen} isOpen={isOpen}/>
            {isOpen&&<Menu toggleOpen={toggleOpen} isOpen={isOpen}/>}
            <main>
                {props.children}
                </main>
    </div> );
}
 
export default Layout;