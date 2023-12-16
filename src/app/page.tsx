import CallToAction from "@/components/calltoaction";
import Connect from "@/components/connect";
import Header from "@/components/header";
import LandingPage from "@/components/landing";
import SectionPage from "@/components/section";
import WorkTogether from "@/components/work_together";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-start shrink-0 justify-center ">
      <Header />
      <main className="w-full h-[7402.922px] shrink-0 p-24">
        <LandingPage />
        <SectionPage />
        <CallToAction />
        <WorkTogether />
        <Connect />
      </main>
    </div>
  );
}
