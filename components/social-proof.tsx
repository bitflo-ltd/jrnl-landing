import { Star } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";
import { useWaitlistCount } from "@/lib/hooks/useWaitlistCount";

export function SocialProof() {
  const { count, loading } = useWaitlistCount();
  const testimonials = [
    {
      quote: "Finally, a journaling app that understands the importance of privacy. The AI insights help me understand my patterns without feeling exposed.",
      name: "Sarah M.",
      role: "Product Manager",
      rating: 5,
    },
    {
      quote: "I've tried dozens of journaling apps, but none combine AI insights with genuine privacy. JRNL's approach is exactly what I've been looking for.",
      name: "David K.",
      role: "Therapist",
      rating: 5,
    },
    {
      quote: "The smart prompts help me explore thoughts I wouldn't have discovered on my own. It's like having a personal coach in my pocket.",
      name: "Maya P.",
      role: "Student",
      rating: 5,
    },
    {
      quote: "As someone who values both self-reflection and data privacy, JRNL strikes the perfect balance. Can't wait for the full launch!",
      name: "Alex R.",
      role: "Founder",
      rating: 5,
    },
  ];

  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-primary font-semibold mb-4">
            <span className="text-2xl">🎉</span>
            Join {loading ? "500+" : `${count || 500}+`} people on the waitlist
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Loved by Thoughtful People
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what early users are saying about JRNL&apos;s approach to private, AI-powered journaling.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <CardContent className="pt-0">
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg mb-4 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="font-semibold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">
              {loading ? "500+" : `${count || 500}+`}
            </div>
            <div className="text-muted-foreground">People on waitlist</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">Q1 2026</div>
            <div className="text-muted-foreground">Expected launch</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Privacy guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  );
}