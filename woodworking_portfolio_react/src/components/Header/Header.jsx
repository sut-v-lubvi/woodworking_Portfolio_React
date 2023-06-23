import s from "./Header.module.css";
import Burger from "./Burger/Burger";
function Header(props) {
  return (
    <header className={props.nav ? [s.header, s.active].join(" ") : [s.header]}>
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.empty}></div>
          <div className={s.header__title}>
            <p>woodworking gallery</p>
          </div>
          <Burger nav={props.nav} setNav={props.setNav} />
        </div>
      </div>
    </header>
  );
}

export default Header;
