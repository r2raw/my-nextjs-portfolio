import Image from "next/image";
import HomeSection from "../../components/home";
import MainNav from "../../components/main-nav";
import SkillsSection from "../../components/skills";
import AchievementsSection from "../../components/achievements";
import ProjectsSection from "../../components/projects";
import CertificationsSection from "../../components/certifications";
import ContactsSection from "../../components/contacts";

export default function Home() {
  return (
    <>
      <main>
        <HomeSection />
        <SkillsSection />
        <AchievementsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactsSection />
      </main>
      <footer></footer>
    </>
  );
}
