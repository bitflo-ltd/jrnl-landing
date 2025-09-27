"use client";

import { Button } from "@/components/ui/button";
import { useWaitlistCount } from "@/lib/hooks/useWaitlistCount";

export function Hero() {
  const { count, loading } = useWaitlistCount();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const displayCount = loading ? "500+" : `${count || 500}+`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Elegant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      
      {/* Sophisticated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large subtle orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/4 rounded-full blur-3xl animate-pulse opacity-60" style={{ animationDelay: "1s" }}></div>
        
        {/* Elegant geometric shapes */}
        <div className="absolute top-32 right-20 w-2 h-20 bg-gradient-to-b from-primary/20 to-transparent rounded-full rotate-12 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-40 left-16 w-2 h-16 bg-gradient-to-b from-primary/15 to-transparent rounded-full -rotate-12 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        
        {/* Floating dots */}
        <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: "2.5s" }}></div>
        <div className="absolute bottom-1/4 left-1/5 w-1 h-1 bg-primary/25 rounded-full animate-ping" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary animate-fade-in-up">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Coming Q1 2026
          </div>

          {/* Main Headline - More sophisticated typography */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="font-light text-foreground">Write.</span>
            <br className="hidden sm:block" />
            <span className="font-semibold text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Understand.</span>
            <br className="hidden sm:block" />
            <span className="font-light text-foreground">Grow.</span>
          </h1>

          {/* Elegant Subheadline */}
          <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground/90 font-light leading-relaxed mb-4">
              The AI-powered journaling companion that helps you discover
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground/90 font-light leading-relaxed">
              <span className="text-foreground font-normal">patterns in your thoughts and emotions</span>—while keeping your privacy intact.
            </p>
          </div>

          {/* Enhanced CTA Section */}
          <div className="flex flex-col items-center gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-10 py-5 h-auto font-medium shadow-2xl hover:shadow-3xl transition-all duration-300 bg-primary hover:bg-primary/90 rounded-full"
                onClick={() => scrollToSection("waitlist")}
              >
                Join the Waitlist
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-lg px-10 py-5 h-auto font-medium hover:bg-muted/50 rounded-full"
                onClick={() => scrollToSection("about")}
              >
                Learn More
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-primary/25 to-primary/5 rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full border-2 border-background"></div>
              </div>
              <span className="text-sm font-light">
                Join <span className="font-medium text-foreground">{displayCount} people</span> already on the waitlist
              </span>
            </div>
          </div>

          {/* Elegant Scroll Indicator */}
          <div className="flex flex-col items-center gap-3 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="w-6 h-10 border border-muted-foreground/30 rounded-full flex justify-center cursor-pointer hover:border-primary/50 transition-colors" onClick={() => scrollToSection("about")}>
              <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce"></div>
            </div>
            <span className="text-xs font-light text-muted-foreground/70 uppercase tracking-wider">Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
}