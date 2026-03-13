import PeopleSection from "@/components/PeopleSection";
import { advisorsContent } from "@/content/site";

export default function Advisors() {
  return <PeopleSection {...advisorsContent} accent="primary" />;
}