"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Floating UI Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/15 rounded-full blur-lg animate-bounce" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-primary/8 rounded-full blur-xl animate-bounce" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-20 right-16 w-36 h-36 bg-primary/12 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
            <span className="text-foreground">Write.</span>{" "}
            <span className="text-primary">Understand.</span>{" "}
            <span className="text-foreground">Grow.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            The AI-powered journaling companion that helps you discover patterns in your thoughts and emotions—while keeping your privacy intact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => scrollToSection("waitlist")}
            >
              Join Waitlist
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </Button>
          </div>

          {/* Launch Timeline */}
          <div className="text-sm text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Coming Q1 2026 • Join 500+ people on the waitlist
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <ChevronDown 
              className="mx-auto h-6 w-6 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" 
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}