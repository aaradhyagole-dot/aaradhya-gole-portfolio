import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import SocialSidebar from "@/components/SocialSidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] selection:bg-blue-500/30 selection:text-white">
      <CustomCursor />
      <SocialSidebar />
      <Navbar />
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}
