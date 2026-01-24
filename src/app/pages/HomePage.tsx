import { HeroSection } from '@/app/components/HeroSection';
import { AboutSection } from '@/app/components/AboutSection';
import { ScheduleSection } from '@/app/components/ScheduleSection';
import { AccessSection } from '@/app/components/AccessSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <AccessSection />
    </>
  );
}