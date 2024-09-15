import { FooterProps } from "@/types/layout.type";
import { FooterStyle } from "@/components/layout/@layout.style";

const Footer = ({ brand, name }: FooterProps) => {
  return (
    <footer className={FooterStyle}>
      <p>&copy;{brand} All rights reserved.</p>
      <p>
        Create_by. {name ? name : brand} | var. {process.env.REACT_APP_VERSION}
      </p>
    </footer>
  );
};

export default Footer;
