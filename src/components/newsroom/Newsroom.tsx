import Header from "../layout/Header";
import Footer from "../layout/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const newsItems = [
  {
    title: "The Voice AI Partners with Major Educational Institutions",
    date: "March 15, 2024",
    description:
      "Leading universities adopt our AI voice technology to create accessible learning materials for students worldwide.",
    content:
      "We're excited to announce partnerships with over 50 leading universities across the globe. This collaboration will help make education more accessible to millions of students through AI-powered voice technology. Universities will use our platform to convert textbooks, research papers, and course materials into high-quality audio content, supporting different learning styles and accessibility needs.",
    author: "Sarah Chen",
    role: "Head of Education Partnerships",
  },
  {
    title: "Enterprise API Platform Launch",
    date: "March 10, 2024",
    description:
      "Introducing our enterprise-grade API platform for seamless integration of AI voice technology into any application.",
    content:
      "Today marks the launch of our Enterprise API Platform, enabling businesses to integrate our advanced voice AI capabilities directly into their applications. The new API platform features enhanced security, scalability, and real-time voice generation capabilities, making it easier than ever for enterprises to add voice functionality to their products.",
    author: "Michael Roberts",
    role: "Chief Technology Officer",
  },
  {
    title: "Partnership with Leading Content Creators",
    date: "March 5, 2024",
    description:
      "Major content creators are now using The Voice AI for their productions.",
    content:
      "We're thrilled to announce partnerships with leading content creators across YouTube, TikTok, and other platforms. These creators will use our AI voice technology to produce multilingual content, reaching broader audiences while maintaining consistent voice quality across all their channels.",
    author: "Jessica Wong",
    role: "Director of Content Partnerships",
  },
  {
    title: "The Voice AI Achieves SOC 2 Type II Certification",
    date: "March 1, 2024",
    description:
      "Major milestone in security compliance for enterprise customers.",
    content:
      "We're proud to announce that The Voice AI has achieved SOC 2 Type II certification, demonstrating our commitment to maintaining the highest standards of security and data protection. This certification validates our robust security controls and makes it easier for enterprise customers to adopt our technology.",
    author: "David Martinez",
    role: "Chief Security Officer",
  },
];

export default function Newsroom() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-16">
          <h1 className="text-4xl font-bold tracking-tight">Newsroom</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Latest updates and announcements from The Voice AI
          </p>
          <div className="mt-16 grid gap-8">
            {newsItems.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {item.date}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{item.description}</p>
                    <p>{item.content}</p>
                    <div className="mt-4 flex items-center space-x-2 text-sm">
                      <span className="font-medium">{item.author}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{item.role}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
