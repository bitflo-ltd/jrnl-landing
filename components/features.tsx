import { 
  ChatCircle, 
  ChartPie, 
  FileText, 
  ShieldCheck, 
  WifiX, 
  Download 
} from "@phosphor-icons/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Features() {
  const features = [
    {
      icon: ChatCircle,
      title: "Smart Reflection Prompts",
      description: "AI-generated questions that adapt to your writing style and help you explore deeper thoughts and emotions.",
      badge: null,
    },
    {
      icon: ChartPie,
      title: "Emotional Pattern Tracking",
      description: "Visualize your emotional journey over time with beautiful charts that reveal patterns you might have missed.",
      badge: null,
    },
    {
      icon: FileText,
      title: "Weekly Insight Summaries",
      description: "Get personalized summaries of your week's journaling with key insights and growth opportunities.",
      badge: null,
    },
    {
      icon: ShieldCheck,
      title: "Private & Secure by Design",
      description: "End-to-end encryption ensures your journal entries are always private. No one else can read your thoughts.",
      badge: null,
    },
    {
      icon: WifiX,
      title: "Offline-Capable",
      description: "Write anywhere, anytime. Sync when you're ready. Your thoughts shouldn't wait for an internet connection.",
      badge: "Coming Soon",
    },
    {
      icon: Download,
      title: "Export Your Data Anytime",
      description: "Your journal belongs to you. Export your data in multiple formats whenever you want to switch or backup.",
      badge: null,
    },
  ];

  return (
    <section id="features" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything You Need to Understand Yourself
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            JRNL combines the intimacy of traditional journaling with the insights of AI, 
            all while keeping your privacy intact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  {feature.badge && (
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}