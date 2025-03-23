import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
// import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
// import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { HowItWorks } from '@/components/HowItWorks'
import { BookingForm } from '@/components/BookingForm'

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Hero />
        {/* <PrimaryFeatures /> */}
        <HowItWorks />
        <CallToAction />
        <Pricing />
        <BookingForm />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}