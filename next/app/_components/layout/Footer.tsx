import { FooterProps } from "@/_types/layout.type";

const Footer = ({ brand, name }: FooterProps) => {
  return (
    <footer>
      <p>&copy;{brand} All rights reserved.</p>
      <p>
        Create_by. {name ? name : brand} | var.{" "}
        {process.env.NEXT_PUBLIC_VERSION}
      </p>
    </footer>
  );
};

export default Footer;
