import { LanguageButtons, MenuButton } from "@/components/index";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">Valerii Lindstrem</div>
        <LanguageButtons />
        <div className="header__menu-button">
          <MenuButton />
        </div>
      </div>
    </header>
  );
};
