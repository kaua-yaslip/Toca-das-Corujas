import styles from "./HamburgerMenu.module.scss";

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function HamburgerMenu({ isOpen, toggleMenu }: Props) {
  return (
    <div
      onClick={toggleMenu}
      className={`${styles.nav_icon4} ${isOpen ? styles.open : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
