import { HeroSection } from '../components/home/hero-section';
import { TechMarquee } from '../components/home/tech-marquee';
import { AboutSection } from '../components/home/about-section';
import { ExperienceSection } from '../components/home/experience-section';
import { CertificationsSection } from '../components/home/certifications-section';
import { ProjectsSection } from '../components/home/projects-section';
import { LatestLogsSection } from '../components/home/latest-logs-section';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TechMarquee />
      <AboutSection />
      <ExperienceSection />
      <CertificationsSection />
      <ProjectsSection />
      <LatestLogsSection />
    </>
  );
}