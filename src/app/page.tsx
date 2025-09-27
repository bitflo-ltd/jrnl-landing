import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProblemSolution } from "@/components/problem-solution";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { SocialProof } from "@/components/social-proof";
import { WaitlistForm } from "@/components/waitlist-form";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <SocialProof />
        <WaitlistForm />
        <FAQ /> 
      </main>
      {/* <Footer /> */}
    </div>
  );
}
