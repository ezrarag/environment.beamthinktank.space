import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import DonationSection from '@/components/DonationSection'
import FundraisingProgress from '@/components/FundraisingProgress'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedProjects />
      <FundraisingProgress />
      <DonationSection />
      <Footer />
    </main>
  )
}
