"use client";

import Link from "next/link";
import { PencilCircle } from "@phosphor-icons/react";
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
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Logo */}
        <div className="mr-8 flex">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <PencilCircle className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
            </div>
            <span className="font-light text-2xl tracking-tight">Jrnl</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-light">
          <button
            onClick={() => scrollToSection("about")}
            className="transition-colors hover:text-primary text-muted-foreground relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="transition-colors hover:text-primary text-muted-foreground relative group"
          >
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("privacy")}
            className="transition-colors hover:text-primary text-muted-foreground relative group"
          >
            Privacy
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="transition-colors hover:text-primary text-muted-foreground relative group"
          >
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
        </nav>

        {/* Right side - Dark mode toggle and CTA */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ModeToggle />
          <Button
            size="sm"
            onClick={() => scrollToSection("waitlist")}
            className="font-medium px-6 py-2 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
}