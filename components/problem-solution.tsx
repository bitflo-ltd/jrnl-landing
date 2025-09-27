import { Brain, Lock, TrendUp } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";

export function ProblemSolution() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        {/* Problem Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Problem is Clear
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional journaling lacks insight. AI tools lack privacy. 
            You shouldn&apos;t have to choose between understanding yourself and protecting your thoughts.
          </p>
        </div>

        {/* Solution Pillars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Emotional Intelligence */}
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emotional Intelligence</h3>
              <p className="text-muted-foreground">
                Understand your patterns, triggers, and growth opportunities through AI-powered insights that respect your privacy.
              </p>
            </CardContent>
          </Card>

          {/* Privacy First */}
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
              <p className="text-muted-foreground">
                Your thoughts stay yours. End-to-end encryption ensures your journal entries never leave your device unprotected.
              </p>
            </CardContent>
          </Card>

          {/* Guided Growth */}
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Guided Growth</h3>
              <p className="text-muted-foreground">
                AI prompts that adapt to your unique journey, helping you explore thoughts and emotions with purpose.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Ready to transform your journaling practice?
          </p>
        </div>
      </div>
    </section>
  );
}