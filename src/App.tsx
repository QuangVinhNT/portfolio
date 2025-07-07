import './App.css';
import { ContactSection, Footer, Header, HomeSection, ProjectSection, SkillSection } from "./components";

function App() {

  return (
    <div className="dark:bg-dark">
      <Header />

      <div className="max-w-[1440px] mx-auto">
        <HomeSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}

export default App;
