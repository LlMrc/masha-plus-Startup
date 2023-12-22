import Banner from "@/components/banner";
import CallToAction from "@/components/calltoaction";
import Connect from "@/components/connect";
import Cta from "@/components/cta";
import Explorer from "@/components/explore";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LandingPage from "@/components/landing";
import OurCompany from "@/components/our_company";
import SectionPage from "@/components/section";

import Tuto from "@/components/tuto";
import WorkTogether from "@/components/work_together";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen overflow-x-hidden  w-screen  flex-col items-start shrink-0 justify-center ">
        <LandingPage />
        <div className="relative">
          <SectionPage />
          <div className="feedback-gradient z-0" />
        </div>

        <CallToAction />
        <div className="relative">
          <WorkTogether />
          <Connect />
          <div className="gradient-02 z-0" />
        </div>

        <Banner />

        <Tuto />

        <Explorer />

        <div className="relative z-0 overflow-hidden w-full">
          <OurCompany />
          <Cta />
          <div className="feedback-gradient z-0" />
        </div>
      </main>
      <Footer />
    </>
  );
}
