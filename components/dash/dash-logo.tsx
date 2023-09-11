import Image from "next/image";
import Link from "next/link";

export default function DashLogo() {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/assets/gradely.png" width={32} height={32} alt="Logo" />
    </Link>
  );
}
