import PeopleSection from "@/components/PeopleSection";
import { teamContent } from "@/content/site";

export default function Team() {
  return <PeopleSection {...teamContent} accent="primary" />;
}
