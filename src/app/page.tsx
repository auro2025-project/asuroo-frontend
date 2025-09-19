import Image from 'next/image'
import Hero from './components/home/hero'
import FeatureCards from './components/home/products'
import WhyChooseUsSection from './components/home/why-choose'
import MeetFounderCard from './components/home/video-section'
import ClaimsCTASection from './components/home/claim'
import FAQSection from './components/home/faq'

export default function Home() {
return (
    <main>
      <Hero />
      <FeatureCards />
      <WhyChooseUsSection />
      <MeetFounderCard />
      <ClaimsCTASection />
      <FAQSection />
    </main>
  )
}
