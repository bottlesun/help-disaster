import BoxLogo from "@/_components/common/box/Box.logo";
import { HeaderProps } from "@/_types/layout.type";

const Header = ({ src, brand }: HeaderProps) => {
  return (
    <header>
      <BoxLogo brand={brand} src={src} />
    </header>
  );
};

export default Header;
