import { useEffect, useRef, useState } from "preact/hooks";
import { NavItem } from "./NavItem";
import { House, Map, Landmark, Menu } from 'lucide-preact';
import { MenuComp } from './MenuComp'
import { useTranslation } from "../i18n";

export function Navbar() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        // Only add the listener if the menu is actually open
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            // Check if click is outside the menu AND outside the toggle button
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <nav className="z-10 fixed w-full h-20 bottom-0 left-0 text-white bg-farabi-blue flex justify-evenly">
            <NavItem href="/farabi-forum-website/" label={t('common.home')} icon={<House/>}/>
            <NavItem href="/farabi-forum-website/farabi" label={t('common.farabi')} icon={<Landmark/>}/>
            <NavItem href="/farabi-forum-website/map" label={t('common.map')} icon={<Map/>}/>
            
            {/* Wrapper div to hold the ref for the menu area */}
            <div ref={menuRef} className="relative flex items-center justify-center">
                <NavItem 
                    label={t('common.menu')} 
                    icon={<Menu/>} 
                    clickHandle={handleMenu} 
                />
                {isOpen && <MenuComp onClose={() => setIsOpen(false)} />}
            </div>
        </nav>
    );
}