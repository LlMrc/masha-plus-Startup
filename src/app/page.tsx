import Header from "@/components/header";
import LandingPage from "@/components/landing";
import SectionPage from "@/components/section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-start shrink-0 justify-center ">
      <Header />
      <main className="w-full h-[7402.922px] shrink-0 p-24">
        <LandingPage />
        <SectionPage />
      </main>
    </div>
  );
}
