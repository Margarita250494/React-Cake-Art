type ButtonProps = {
  toggleSidebar: () => void;
};

export const MenuButton = ({ toggleSidebar }: ButtonProps) => {
  return (
    <button
      className="header__menu-button-toggle"
      type="button"
      aria-expanded="false"
      aria-label="Open navigation menu"
      onClick={toggleSidebar}
    >
      <div className="header__arrow "></div>
      <div className="header__arrow"></div>
      <div className="header__arrow"></div>
      <span className="visually-hidden">Open navigation menu</span>
    </button>
  );
};
