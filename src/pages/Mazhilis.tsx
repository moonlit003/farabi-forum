import { ConferenceLine } from "../components/ConfereceLine";
import { useTranslation } from "../i18n";

export function Mazhilis() {
    const { t } = useTranslation();

    const mazhilisData = t('mazhilis');

    return (
        <div className="py-4 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold my-2 text-center">
                {mazhilisData.title}
            </h2>
            <h3 className="text-xl font-bold my-2 text-farabi-yellow text-center">
                {mazhilisData.date}
            </h3>

            {/* Timeline */}
            <div className="flex flex-col gap-1.5 mb-20">
                {mazhilisData.timeline.map((item: any, index: number) => (
                    <>
                        <div key={index}>
                            <ConferenceLine
                                time={item.time}
                                description={item.description}
                            />
                        </div>
                        {index < mazhilisData.timeline.length - 1 && (
                            <hr className="opacity-15" />
                        )}
                    </>
                ))}
            </div>
        </div>
    )
}