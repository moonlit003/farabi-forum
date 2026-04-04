import { PeopleCard } from "../components/PeopleCard"
import { useTranslation } from "../i18n"

export function Speakers() {
    const { t } = useTranslation();
    const speakers = t("speakers.list");

    return (
        <div className="py-4 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold my-2">
                {t("speakers.title")}
            </h2>

            <div className="mb-20 flex flex-col gap-4">
                {speakers.map((speaker: any, index: number) => (
                    <PeopleCard key={index} {...speaker} />
                ))}
            </div>
        </div>
    )
}