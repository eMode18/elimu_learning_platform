import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image height={40} width={100} alt="logo" src="/logo.svg" />
    </Link>
  );
};
