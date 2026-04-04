import { setLanguage, type LanguageCode } from "../store/language";

interface MenuButtonProps {
  label: string;
  onClick?: (e: MouseEvent) => void;
  className?: string;
}

interface MenuCompProps {
  onClose?: () => void;
}

// 1. Универсальный компонент кнопки
function MenuButton({ label, onClick, className = "" }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`hover:underline text-left py-1 transition-colors ${className}`}
    >
      {label}
    </button>
  );
}

export function MenuComp({ onClose }: MenuCompProps) {
  // 2. Выносим данные о языках в массив
  const languages = [
    { id: 'en' as LanguageCode, label: 'English' },
    { id: 'kz' as LanguageCode, label: 'Қазақша' },
    { id: 'ru' as LanguageCode, label: 'Русский' }
  ];

  const handleLangSwitch = (langId: LanguageCode) => (e: any) => {
    e.preventDefault();
    setLanguage(langId);
    onClose?.(); // Close the menu after selecting language
  };

  return (
    <div className="fixed flex flex-col px-6 py-3 bottom-20 bg-farabi-blue rounded-t-lg">
      {/* 3. Рендерим кнопки через map */}
      {languages.map((lang) => (
        <MenuButton
          key={lang.id}
          label={lang.label}
          onClick={handleLangSwitch(lang.id)}
        />
      ))}
    </div>
  );
}