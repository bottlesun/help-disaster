import BoxLogo from "@/components/common/box/Box.logo";
import { HeaderProps } from "@/types/layout.type";
import { HeaderStyle } from "@/components/layout/@layout.style";

const Header = ({ src, brand }: HeaderProps) => {
  return (
    <header className={HeaderStyle}>
      <BoxLogo brand={brand} src={src} />
    </header>
  );
};

export default Header;
