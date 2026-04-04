import { Route, useLocation } from 'preact-iso';
import { ComponentChildren, MouseEventHandler, TargetedMouseEvent } from 'preact';

interface NavItemProps {
  href?: string;
  label: string;
  icon: ComponentChildren; // Specifically for the SVG/Icon
  menuComp? : any;
  clickHandle?: any;
}

export function NavItem({href, label, icon, menuComp, clickHandle} : NavItemProps) {
    const { url, route } = useLocation();

    const handleNav = (e : MouseEvent) => {
        e.preventDefault();
        route(href);
    } 

    return (
        <span className={"flex justify-center items-center aspect-square flex-col hover:cursor-pointer"} onClick={clickHandle ? clickHandle : handleNav}>
            {icon}
            {menuComp}
            <button className={"hover:cursor-pointer"}>{label}</button> 
        </span>
    );
}