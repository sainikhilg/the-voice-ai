import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Headphones,
  Building2,
  Phone,
  Mic,
  Zap,
  Globe,
  Clock,
} from "lucide-react";

const features = [
  {
    title: "Education & Learning",
    description:
      "Convert textbooks and learning materials into engaging audio content for enhanced accessibility",
    icon: BookOpen,
  },
  {
    title: "Entertainment & Media",
    description:
      "Create voiceovers for videos, games, and podcasts with emotional depth and character",
    icon: Headphones,
  },
  {
    title: "Enterprise Solutions",
    description:
      "Automate customer service, training materials, and internal communications",
    icon: Building2,
  },
  {
    title: "Accessibility Tools",
    description:
      "Make content accessible to visually impaired users and enhance reading comprehension",
    icon: Phone,
  },
  {
    title: "Real-time Translation",
    description:
      "Instantly translate and voice content in over 30 languages with native accents",
    icon: Globe,
  },
  {
    title: "Custom Voice Cloning",
    description:
      "Create your own digital voice twin for personalized content delivery",
    icon: Mic,
  },
  {
    title: "API Integration",
    description:
      "Seamlessly integrate voice capabilities into your applications and services",
    icon: Zap,
  },
  {
    title: "Cloud Platform",
    description:
      "Access your voice generation tools anywhere, anytime with our reliable cloud infrastructure",
    icon: Clock,
  },
];

export default function Features() {
  return (
    <section className="container py-16 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Features</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything you need to create professional voice content
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
