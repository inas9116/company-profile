
import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistoriSection";
import ProgramSection from "@/components/ProgramSection";
import Testimoni from "@/components/Testimoni";
import { getEntries } from "@/lib/contentful";





export default async function Home() {
  const Programs = await getEntries();




  return (
    <main>
      <HeroSection />
      <ProgramSection programs={Programs || []} />
      <HistorySection />  
      <Testimoni />
    </main>
  )
}
