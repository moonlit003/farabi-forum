import { PeopleCard } from "../components/PeopleCard"
import { useTranslation } from "../i18n"

export function Committee() {
    const { t } = useTranslation();
    const members = t("committee.members");

    return (
        <div className="py-4 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold my-2">
                {t("committee.title")}
            </h2>

            <div className="mb-20 flex flex-col gap-4">
                {members.map((member: any, index: number) => (
                    <PeopleCard key={index} {...member} />
                ))}
            </div>
        </div>
    )
}