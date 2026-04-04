import { useTranslation } from "../i18n";

export function DiscussionCard({label, date, adress, moderator, secretar}) {
    const { t } = useTranslation();

    return (
        <div className="rounded-sm ring-1 ring-gray-300 shadow-md p-6 bg-white hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 text-left">{label}</h2>
            <div className="text-left">
                <p>📅<strong>{t("discussion.day")}:</strong> {date}</p>
                <p>📍<strong>{t("discussion.place")}:</strong> {adress}</p>
                <p>🎤<strong>{t("discussion.moderator")}:</strong> {moderator}</p>
                <p>📝 <strong>{t("discussion.secretary")}:</strong> {secretar}</p>
            </div>
        </div>
    )
}