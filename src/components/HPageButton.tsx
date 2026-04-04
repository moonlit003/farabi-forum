import { Route, useLocation } from 'preact-iso';
import { ComponentChildren } from 'preact';

interface NavItemProps {
  href?: string;
  label: string;
  icon: ComponentChildren; // Specifically for the SVG/Icon
}

export function HPageButton({href, label, icon} : NavItemProps) {
    const { url, route } = useLocation();

    const handleNav = (e : MouseEvent) => {
        e.preventDefault();
        route(href);
    } 

    return (
        <span className={"flex justify-center items-center py-4 px-4 rounded-sm shadow-md text-white bg-farabi-lightblue flex-col hover:cursor-pointer"} onClick={handleNav}>
            {icon}
            <button className={"hover:cursor-pointer"}>{label}</button> 
        </span>
    );
}