import { notFound } from "next/navigation";
import LegacyPage from "@/components/LegacyPage";
import { getLegacyPage } from "@/data/legacyPages";
const pageData = getLegacyPage("index");
export default function Page(){ if(!pageData) notFound(); return <LegacyPage page={pageData}/>; }
