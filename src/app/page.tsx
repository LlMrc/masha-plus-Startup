import Banner from "@/components/banner";
import CallToAction from "@/components/calltoaction";
import Connect from "@/components/connect";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LandingPage from "@/components/landing";
import OurCompany from "@/components/our_company";
import SectionPage from "@/components/section";
import Testimonial from "@/components/testimonial";
import Tuto from "@/components/tuto";
import WorkTogether from "@/components/work_together";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-start shrink-0 justify-center ">
        <Header />
        <section className="w-full shrink-0 p-24">
          <LandingPage />
          <SectionPage />
          <CallToAction />
          <WorkTogether />
          <Connect />
          <Banner />
          <Tuto />
        </section>

        <OurCompany />
        <Testimonial />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
