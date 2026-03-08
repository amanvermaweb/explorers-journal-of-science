import PeopleSection from "@/components/PeopleSection";
import { editorialBoardContent } from "@/content/site";

export default function EditorialBoard() {
  return <PeopleSection {...editorialBoardContent} accent="secondary" />;
}