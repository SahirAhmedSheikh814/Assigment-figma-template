import Apps from "@/Components/Apps";
import Customize from "@/Components/Customize";
import Extension from "@/Components/Extension";
import Footer from "@/Components/Footer";
import Freetrial from "@/Components/Freetrial";
import Hero from "@/Components/Hero";
import Pricing from "@/Components/Pricing";
import Sponsors from "@/Components/Sponsors";
import Testimonial from "@/Components/Testimonial";
import Workpage from "@/Components/Workpage";
import Yourdata from "@/Components/Yourdata";
import Yourwork from "@/Components/Yourwork";


export default function Home() {
  return (
    <div>
      <Hero />
      <Workpage />
      <Extension />
      <Customize />
      <Pricing />
      <Yourwork />
      <Yourdata />
      <Sponsors />
      <Apps />
      <Testimonial />
      <Freetrial />
      <Footer />
    </div>
  )
}



