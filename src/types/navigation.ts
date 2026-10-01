export interface NavItem {
    navUrl:string, 
    navText:string,
    navIcon:React.ReactNode
}
export interface VerticalNavigationProps {
    listItems: Array<NavItem>,
    collapsed:boolean,
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}