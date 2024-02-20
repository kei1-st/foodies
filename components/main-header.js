import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "@/components/main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">  {/* スタイルをコンポーネントに直接適用する */}
        <Image src={logoImg} alt="a plate with food on it" priority/>
        Next Level Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
