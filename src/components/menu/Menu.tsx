import { RiAtLine, RiTelegramLine, RiWhatsappLine } from "@remixicon/react";

export const Menu = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__menu" aria-label="Menu Navigation">
        <ul className="sidebar__menu-list sidebar-list">
          <li className="sidebar__menu-item">
            <a href="" className="sidebar__menu-link h1">
              Home
            </a>
          </li>
          <li className="sidebar__menu-item">
            <a href="" className="sidebar__menu-link h1">
              Services
            </a>
          </li>
          <li className="sidebar__menu-item">
            <a href="" className="sidebar__menu-link h1">
              Online-Shop
            </a>
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
