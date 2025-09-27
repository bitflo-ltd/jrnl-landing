"use client";

import Link from "next/link";
import { PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* Logo */}
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <PenTool className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">JRNL</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm lg:gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("privacy")}
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Privacy
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            FAQ
          </button>
        </nav>

        {/* Right side - Dark mode toggle and CTA */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Mobile menu would go here if needed */}
          </div>
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            <Button
              size="sm"
              onClick={() => scrollToSection("waitlist")}
              className="ml-2"
            >
              Get Early Access
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}