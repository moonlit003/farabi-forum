import { HPageButton } from "../components/HPageButton";
import { Calendar, Mic, UsersRound, Newspaper, MessagesSquare, Handshake, UserRound } from 'lucide-preact';
import { useTranslation } from "../i18n";

export function Home(props) {
    const { t } = useTranslation();

    // 1. Массив с данными для кнопок
    const menuItems = [
        { href: "/farabi-forum", label: t('common.farabi-forum'), icon: <Calendar /> },
        { href: "/programme", label: t('common.conference-1'), icon: <Mic /> },
        { href: "/sections", label: t('common.conference-2'), icon: <UsersRound /> },
        { href: "/mazhilis", label: t('common.session'), icon: <Newspaper /> },
        { href: "/discussion", label: t('common.discussion-areas'), icon: <MessagesSquare /> },
        { href: "/speakers", label: t('common.speakers'), icon: <Handshake /> },
        { href: "/committee", label: t('common.committee'), icon: <UserRound /> },
        { href: "/partners", label: t('common.partners'), icon: <Handshake /> },
    ];

    return (
        <div className="flex justify-center items-center flex-col h-full">
            <div className="grid grid-cols-2 gap-y-1.5 gap-x-2 min-w-72 max-w-96">
                {menuItems.map((item, index) => (
                    <HPageButton 
                        key={index} 
                        href={item.href} 
                        label={item.label} 
                        icon={item.icon} 
                    />
                ))}
            </div>
        </div>
    );
}