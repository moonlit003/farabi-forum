import { useState } from "react";
import { ConferenceLine } from "../components/ConfereceLine";
import { useTranslation } from "../i18n";

export function Conference2() {
    const { t } = useTranslation();
    
    const conferenceData = t('conference2');
    const [selectedSection, setSelectedSection] = useState(1);
    
    const currentSection = conferenceData.sections.find((s: any) => s.id === selectedSection);

    return (
        <div className="py-4 max-w-lg mx-auto">
            {/* Section Buttons */}
            <div className="flex gap-2 justify-center mb-6 flex-wrap">
                {conferenceData.sections.map((section: any) => (
                    <button
                        key={section.id}
                        onClick={() => setSelectedSection(section.id)}
                        className={`w-12 h-12 font-bold rounded text-white transition-all ${
                            selectedSection === section.id
                                ? 'bg-farabi-yellow text-black'
                                : 'bg-gray-600 hover:bg-gray-700'
                        }`}
                    >
                        {section.id}
                    </button>
                ))}
            </div>

            {/* Section Title */}
            <h2 className="text-2xl font-bold my-2 text-center">
                {currentSection?.name}
            </h2>

            {/* Section Description */}
            <h3 className="text-xl font-bold my-2 text-farabi-yellow text-center">
                {currentSection?.description}
            </h3>

            {/* Timeline */}
            <div className="flex flex-col gap-1.5 mb-20">
                {currentSection?.timeline.map((item: any, index: number) => (
                    <>
                        <div key={index}>
                            <ConferenceLine
                                time={item.time}
                                description={item.description}
                            />
                        </div>
                        {index < currentSection.timeline.length - 1 && (
                            <hr className="opacity-15" />
                        )}
                    </>
                ))}
            </div>
        </div>
    )
}