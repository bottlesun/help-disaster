import Link from "next/link";
import { HeaderProps } from "@/types/layout.type";
import Image from "next/image";

const BoxLogo = ({ src, brand }: HeaderProps) => {
  return (
    <h1>
      <Link href="/">
        {src ? <Image width={124} height={20} src={src} alt={brand} /> : brand}
      </Link>
    </h1>
  );
};

export default BoxLogo;
