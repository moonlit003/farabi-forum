import { PeopleCard } from "../components/PeopleCard"
import { useTranslation } from "../i18n"

export function Partners() {
    const { t } = useTranslation();
    const partners = t("partners.list");

    return (
        <div className="py-4 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold my-2">
                {t("partners.title")}
            </h2>

            <div className="mb-20 flex flex-col gap-4">
                {partners.map((partner: any, index: number) => (
                    <PeopleCard key={index} {...partner} />
                ))}
            </div>
        </div>
    )
}