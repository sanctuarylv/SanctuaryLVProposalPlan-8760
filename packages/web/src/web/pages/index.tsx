import { Navigation } from "../components/navigation";
import { usePrintDisclosures } from "../hooks/use-print-disclosures";
import { Closing, ExecutiveSummary, FacilityVision, Hero, WhyLasVegas } from "../sections/vision";
import {
  DevelopmentRoadmap,
  LocationPriorities,
  PropertyStrategies,
  RequirementsMatrix,
} from "../sections/location-strategy";
import {
  CityPartnership,
  CommunityImpact,
  Footer,
  Leadership,
  MeetingQuestions,
  WeeklyOperatingModel,
} from "../sections/community";

export default function Index() {
  usePrintDisclosures();
  return (
    <div id="top">
      <Navigation />
      <main id="main">
        <Hero />
        <ExecutiveSummary />
        <WhyLasVegas />
        <FacilityVision />
        <PropertyStrategies />
        <LocationPriorities />
        <RequirementsMatrix />
        <WeeklyOperatingModel />
        <CommunityImpact />
        <DevelopmentRoadmap />
        <CityPartnership />
        <MeetingQuestions />
        <Leadership />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
