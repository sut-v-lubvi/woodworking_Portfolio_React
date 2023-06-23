import { NavLink } from "react-router-dom";
import s from "./NavMenu.module.css";

const NavMenu = (props) => {
  const addLinkPhoto = (id) => () => {
    props.setNav(!props.nav);
    props.addPhoto(id);
  };
  return (
    <div className={props.nav ? [s.menu, s.active].join(" ") : [s.menu]}>
      <div className={s.menu__content}>
        <div className={s.link__block}>
          <div className={s.link__icon}>
            <img src="http://localhost:3000/icons/stairs.png"></img>
          </div>
          <div className={s.link__link}>
            <NavLink
              to={"/"}
              onClick={addLinkPhoto(1)}
              className={({ isActive }) => (isActive ? s.active : undefined)}
            >
              Лестницы
            </NavLink>
          </div>
        </div>
        <div className={s.link__block}>
          <div className={s.link__icon}>
            <img src="http://localhost:3000/icons/kitchen.png"></img>
          </div>
          <div className={s.link__link}>
            <NavLink
              to={"/"}
              onClick={addLinkPhoto(2)}
              className={({ isActive }) => (isActive ? s.active : undefined)}
            >
              Кухни
            </NavLink>
          </div>
        </div>
        <div className={s.link__block}>
          <div className={s.link__icon}>
            <img src="http://localhost:3000/icons/wardrobe.png"></img>
          </div>
          <div className={s.link__link}>
            <NavLink
              to={"/"}
              onClick={addLinkPhoto(3)}
              className={({ isActive }) => (isActive ? s.active : undefined)}
            >
              Стеновые панели
            </NavLink>
          </div>
        </div>
        <div className={s.link__block}>
          <div className={s.link__icon}>
            <img src="http://localhost:3000/icons/fcupboard.png"></img>
          </div>
          <div className={s.link__link}>
            <NavLink
              to={"/"}
              onClick={addLinkPhoto(4)}
              className={({ isActive }) => (isActive ? s.active : undefined)}
            >
              Шкафы
            </NavLink>
          </div>
        </div>
        <div className={s.link__block}>
          <div className={s.link__icon}>
            <img src="http://localhost:3000/icons/bookshelf.png"></img>
          </div>
          <div className={s.link__link}>
            <NavLink
              to={"/"}
              onClick={addLinkPhoto(5)}
              className={({ isActive }) => (isActive ? s.active : undefined)}
            >
              Кабинеты
            </NavLink>
          </div>
        </div>
        <div className={s.link__block}>
          <div className={s.link__icon}>
            <img src="http://localhost:3000/icons/bathroom.png"></img>
          </div>
          <div className={s.link__link}>
            <NavLink
              to={"/"}
              onClick={addLinkPhoto(6)}
              className={({ isActive }) => (isActive ? s.active : undefined)}
            >
              Ванные комнаты
            </NavLink>
          </div>
        </div>
        <div className={s.link__block}>
          <div className={s.link__icon}>
            <img src="http://localhost:3000/icons/door.png"></img>
          </div>
          <div className={s.link__link}>
            <NavLink
              to={"/"}
              onClick={addLinkPhoto(7)}
              className={({ isActive }) => (isActive ? s.active : undefined)}
            >
              Двери
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
// key={props.items.id}
