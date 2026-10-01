import type {VerticalNavigationProps, NavItem} from "@customTypes/navigation";
import {useNavigate} from "react-router";


const VerticalNavigation = ({listItems,collapsed,setCollapsed}:VerticalNavigationProps) => {
    const navigate = useNavigate();
    
    const handleClick = (e:React.MouseEvent<HTMLLIElement>,navUrl:string) => {
        e.preventDefault();
        setCollapsed(!collapsed);
        navigate(navUrl);
    }
    return (<nav className="">
            <ul className="flex flex-col justify-center items-center gap-5">
                
               {listItems.map((item:NavItem, index:number) => {
                    const {navUrl, navText,navIcon} = item;
                    return (
                        <li className={`outline-slate-400 transition delay-150 duration-300 ease-in-out hover:-translate-z-1 hover:scale-100 hover:bg-slate-400 flex flex-row gap-2  shadow-xl rounded-xl ${!collapsed && "w-full"}`} key={`${navText}-${index}`} onClick={(e) => handleClick(e, navUrl)}>
                            <button >
                                {navIcon}
                            </button>
                            {
                                !collapsed && <span className="uppercase font-medium text-slate-600">{navText}</span>
                            
                            }
                        </li>
                    )
               })}
            </ul>
        </nav>);
        
}
export default VerticalNavigation;