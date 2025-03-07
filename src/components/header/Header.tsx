import { LanguageButtons, MenuButton } from "@/components/index";
import { NavLink } from "react-router-dom";

type ButtonProps = {
  toggleSidebar: () => void;
  closeMenu: () => void;
};

export const Header = ({ toggleSidebar, closeMenu }: ButtonProps) => {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__logo" onClick={closeMenu}>
          Valerii Lindstrem
        </NavLink>
        <LanguageButtons />
        <div className="header__menu-button">
          <MenuButton toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </header>
  );
};
