import BoxLogo from "@/components/common/box/Box.logo";
import { HeaderProps } from "@/types/layout.type";

const Header = ({ src, brand }: HeaderProps) => {
  return (
    <header>
      <BoxLogo brand={brand} src={src} />
    </header>
  );
};

export default Header;
