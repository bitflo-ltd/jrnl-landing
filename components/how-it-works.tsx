import { Edit3, Brain, TrendingUp, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Edit3,
      title: "Write Freely",
      description: "Capture your thoughts in a distraction-free environment designed for reflection and clarity.",
    },
    {
      number: "02",
      icon: Brain,
      title: "AI Analyzes",
      description: "Our privacy-first AI discovers patterns and insights without compromising your personal data.",
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "You Grow",
      description: "Receive personalized insights and prompts tailored to your unique emotional journey.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How JRNL Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to unlock deeper self-understanding
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Step Number */}
                <div className="text-6xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to start your journey?
          </p>
          <div className="inline-flex items-center text-primary font-medium">
            Join our waitlist today
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
}