import { useTranslation } from "../i18n";

export function ForumCard({label, desc, icon, href}) {
    const { t } = useTranslation();

    return (
        <div className="rounded-sm ring-1 ring-gray-300 shadow-md p-4 flex flex-col justify-center items-center hover:shadow-xl transition-shadow duration-300">
            {icon}

            <h2 className="text-2xl">{label}</h2>
            <p className="mb-4">{desc}</p>
            <a
                href={href || "#"}
                className="bg-farabi-lightblue hover:cursor-pointer rounded-sm w-full py-1 text-white text-center block"
            >
                {t("common.more-details")}
            </a>
        </div>
    )
}