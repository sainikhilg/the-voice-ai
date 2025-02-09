import { Button } from "@/components/ui/button";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Users, Award, Building2, Globe2 } from "lucide-react";

const stats = [
  { number: "1M+", label: "Content Creators", icon: Users },
  { number: "30+", label: "Languages Supported", icon: Globe2 },
  { number: "50+", label: "Industry Awards", icon: Award },
  { number: "200+", label: "Enterprise Clients", icon: Building2 },
];

const team = [
  {
    name: "Alex Rivera",
    role: "Content Creator",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    bio: "20-year-old YouTuber using AI voice to create educational content in multiple languages.",
  },
  {
    name: "Sophia Zhang",
    role: "Tech Innovator",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophia",
    bio: "22-year-old developer building accessibility tools for visually impaired students.",
  },
  {
    name: "Marcus Thompson",
    role: "Game Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
    bio: "19-year-old indie game developer using AI voices for dynamic character dialogues.",
  },
];

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-background py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                About The Voice AI
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We're on a mission to revolutionize content creation through
                advanced AI voice technology. Our platform enables creators and
                businesses to produce high-quality voice content efficiently and
                naturally.
              </p>
              <div className="mt-10">
                <Button size="lg">Join Our Team</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-t">
          <div className="container py-24">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="mx-auto h-8 w-8 text-primary" />
                  <h2 className="mt-4 text-3xl font-bold">{stat.number}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="border-t bg-muted/50">
          <div className="container py-24">
            <h2 className="text-center text-3xl font-bold">
              Young Innovators Using Our Platform
            </h2>
            <p className="mt-4 text-center text-lg text-muted-foreground">
              Meet some of the inspiring young entrepreneurs transforming their
              industries with AI voice technology
            </p>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto h-32 w-32 rounded-full bg-muted"
                  />
                  <h3 className="mt-6 text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
