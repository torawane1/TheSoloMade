import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import ProjectWork from '@/components/ProjectWork';
import DevOpsInfrastructure from '@/components/DevOpsInfrastructure';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Scanline effect */}
      <div className="scanline" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <ProjectWork />
        <DevOpsInfrastructure />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
