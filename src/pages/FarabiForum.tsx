import { Mic, School, MessagesSquare, Trophy, Download } from "lucide-preact"
import { ForumCard } from "../components/ForumCard"
import { useTranslation } from "../i18n"


export function FarabiForum() {
    const { t } = useTranslation();
    const events = t("farabi-forum.events");

    const icons = [<Mic size={32}/>, <School size={32} />, <MessagesSquare size={32}/>, <Trophy size={32} />];

    return (
        <div className="py-4 max-w-lg mx-auto">

            <h2 className="text-2xl font-bold my-2">
                {t("farabi-forum.title")}
            </h2>

            <div className="flex flex-col gap-3 mb-20">
                {events.map((event: any, index: number) => (
                    <ForumCard
                        key={index}
                        label={event.label}
                        desc={event.desc}
                        icon={icons[index]}
                        href={event.href || "#"}
                    />
                ))}
            </div>
            
        </div>
    )
}