import Image from "next/image";
import logo from "@/assets/logo.svg";
import { Container } from "../layout/container";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="border-b border-b-slate-200">
      <Container className="h-[60px] flex items-center">
        <Link href="/">
          <Image src={logo} width={151} height={40} alt="로고 이미지" />
        </Link>
      </Container>
    </div>
  );
}
