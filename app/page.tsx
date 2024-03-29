import Experience from "./components/Experience";
import About from "./components/about";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Projects from "./components/project";
import SectionDivider from "./components/section-divider";
import Skills from "./components/skills";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return <main className="flex  flex-col items-center px-4"> 
  <Intro/>
  <SectionDivider/>
  <About/>
  <Projects/>
  <Skills/>
  <Experience/>
  <Footer/>
  <SpeedInsights/> 
  </main>;
}
