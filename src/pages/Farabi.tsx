import { LinksButton } from "../components/LinksButton";
import { useTranslation } from "../i18n";


export function Farabi(props) {
    const { t } = useTranslation();

    const paragraphs = t('farabi-article.paragraphs') as unknown as string[];
    const resources = t('resources') as unknown as {
        title: string;
        subtitle: string;
        links: Array<{ label: string; href: string }>;
    };

    return (
        <div className="py-4 max-w-lg mx-auto">
            <video controls className="rounded-sm ring-1 ring-gray-300 shadow-md w-full">
                <source src="/farabi-forum-website/farabi-video.mp4" type="video/mp4" />
            </video>

            {/* <img src="/farabi_image.png" alt="image of farabi" className={"w-full max-h-32 object-cover object-[center_70%] rounded-sm ring-1 ring-gray-300 shadow-md"} /> */}

            <h2 className="text-2xl font-bold my-2 text-left">{t('farabi-article.title')}</h2>

            <div className="space-y-4 mb-8">
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-lg leading-relaxed text-left">
                        {paragraph}
                    </p>
                ))}
            </div>

            <blockquote className="border-l-4 border-farabi-blue pl-4 italic text-xl text-left text-gray-700 mb-8">
                {t('farabi-article.quote')}
            </blockquote>

            <div className="mt-8 mb-20 text-left">
                <h2 className="text-2xl font-bold mb-1" style={{ color: 'var(--color-farabi-yellow)' }}>
                    {resources.title}
                </h2>
                <p className="mb-4 text-lg">{resources.subtitle}</p>
                <div className="flex flex-col gap-2">
                    {resources.links.map((item, index) => (
                        <LinksButton key={index} label={item.label} href={item.href} />
                    ))}
                </div>
            </div>
        </div>
    );
}