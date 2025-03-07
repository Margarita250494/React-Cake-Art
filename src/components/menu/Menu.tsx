import { RiAtLine, RiTelegramLine, RiWhatsappLine } from "@remixicon/react";
import { NavLink } from "react-router-dom";

type MenuProps = {
  isSidebarOpen: boolean;
  setMenuIsVisible: () => void;
};

export const Menu = ({ isSidebarOpen, setMenuIsVisible }: MenuProps) => {
  return (
    <aside
      className={`sidebar ${isSidebarOpen ? "sidebar-open" : "sidebar-close"}`}
    >
      <nav className="sidebar__menu" aria-label="Menu Navigation">
        <ul className="sidebar__menu-list sidebar-list">
          <li className="sidebar__menu-item">
            <NavLink
              to="/about"
              className="sidebar__menu-link h1"
              onClick={setMenuIsVisible}
            >
              About
            </NavLink>
          </li>
          <li className="sidebar__menu-item">
            <NavLink
              to="/services"
              className="sidebar__menu-link h1"
              onClick={setMenuIsVisible}
            >
              Services
            </NavLink>
          </li>
          <li className="sidebar__menu-item">
            <NavLink
              to="/portfolio"
              className="sidebar__menu-link h1"
              onClick={setMenuIsVisible}
            >
              Portfolio
            </NavLink>
          </li>
        </ul>
        <div className="sidebar__contacts">
          <h3 className="sidebar__contacts-heading">Contacts</h3>
          <ul className="sidebar__contacts-list sidebar-list">
            <li className="sidebar__contacts-item">
              <a href="" className="sidebar__contacts-link h5">
                <RiTelegramLine />
                <span>Telegramm</span>
              </a>
            </li>
            <li className="sidebar__contacts-item h5">
              <a href="" className="sidebar__contacts-link">
                <RiWhatsappLine />
                <span>WhatsUp</span>
              </a>
            </li>
            <li className="sidebar__contacts-item h5">
              <a href="" className="sidebar__contacts-link">
                <RiAtLine />
                <span>Email</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};
