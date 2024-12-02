import BoxLogo from "@/_components/common/box/BoxLogo";
import { HeaderProps } from "@/_types/layout.type";
import Link from "next/link";
import { HeaderLinkList } from "@/_components/layout/layout.style";

const Header = ({ src, brand }: HeaderProps) => {
  return (
    <header>
      <BoxLogo brand={brand} src={src} />
      <nav className={HeaderLinkList}>
        <Link href={"#"}>로그인/회원가입</Link>
      </nav>
    </header>
  );
};

export default Header;
