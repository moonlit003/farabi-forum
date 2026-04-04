import { DiscussionCard } from "../components/DiscussionCard"
import { useTranslation } from "../i18n"


export function Discussion() {
    const { t } = useTranslation();
    const discussions = t("discussion.discussions");

    return (
        <div className="py-4 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold my-2 mb-4">
                {t("discussion.title")}
            </h2>

            <div className="mb-20 flex flex-col gap-4">
                {discussions.map((discussion: any, index: number) => (
                    <DiscussionCard
                        key={index}
                        label={discussion.label}
                        date={discussion.date}
                        adress={discussion.address}
                        moderator={discussion.moderator}
                        secretar={discussion.secretary}
                    />
                ))}
            </div>
        </div>
    )
}