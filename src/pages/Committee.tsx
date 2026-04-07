import { PeopleCard } from "../components/PeopleCard"
import { useTranslation } from "../i18n"

export function Committee() {
    const { t } = useTranslation();
    const groups = t("committee.groups");

    return (
        <div className="py-4 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold my-2">
                {t("committee.title")}
            </h2>

            <div className="mb-20 flex flex-col gap-4">
                {groups.map((group: any, groupIndex: number) => (
                    <div key={groupIndex} className="mb-6">
                        <h3 className="text-xl font-semibold mb-4">
                            {group.title}
                        </h3>
                        <div className="flex flex-col gap-4">
                            {group.members.map((member: any, memberIndex: number) => (
                                <PeopleCard key={memberIndex} {...member} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}