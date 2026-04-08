import { useTranslation } from "../i18n";

export function Header() {
    const { t } = useTranslation();

    return (
        <header className={"z-10 fixed w-full h-20 top-0 left-0 px-5 text-white bg-farabi-blue flex justify-center items-center gap-2"}>
            <a href="https://al-farabi.kaznu.kz/?lang=kz" target={"_blank"}>
                <img
                    className={"h-14 min-w-11"}
                    src={"/farabi-forum-website/farabi-logo.png"}
                    alt="Al-Farabi logo"
                />
            </a>
            <h1 className={"text-sm font-bold text-left"}>{t('common.header')}</h1>
        </header>
    );
}