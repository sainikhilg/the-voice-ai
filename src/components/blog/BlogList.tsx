import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export const posts = [
  {
    id: "ai-voice-education",
    title:
      "AI Voice Technology in Education: Transforming Learning Experiences",
    date: "March 20, 2024",
    description:
      "How AI voice technology is making education more accessible and engaging for students worldwide.",
    category: "Education",
    content: `AI voice technology is revolutionizing education by making learning materials more accessible and engaging than ever before. Through our platform, educational institutions are transforming traditional textbooks into interactive audio experiences, helping students with different learning styles and accessibility needs.

Key Benefits:
- Improved accessibility for visually impaired students
- Enhanced learning for auditory learners
- Support for multiple languages and accents
- Consistent quality across all materials

Real-world applications include:
1. Converting textbooks to audiobooks
2. Creating interactive language learning materials
3. Generating voice-over for educational videos
4. Providing audio feedback for assignments

The future of education is becoming more inclusive and accessible through AI voice technology.`,
    author: {
      name: "Dr. Emily Chen",
      role: "Education Technology Specialist",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    },
  },
  {
    id: "customer-service-revolution",
    title: "Revolutionizing Customer Service with AI Voice Assistants",
    date: "March 18, 2024",
    description:
      "How businesses are using AI voice technology to provide 24/7 customer support and enhance user experience.",
    category: "Enterprise",
    content: `The integration of AI voice technology in customer service is transforming how businesses interact with their customers. Our platform enables companies to create natural-sounding voice assistants that can handle customer inquiries 24/7, providing consistent and high-quality support.

Key Advantages:
- 24/7 availability
- Consistent service quality
- Multiple language support
- Scalable solution
- Cost-effective implementation

Real-world applications:
1. Automated phone support systems
2. Interactive voice response (IVR)
3. Voice-enabled chatbots
4. Multilingual customer support

Case studies show significant improvements in customer satisfaction and reduced support costs.`,
    author: {
      name: "Mark Thompson",
      role: "Customer Experience Director",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=mark",
    },
  },
  {
    id: "breaking-language-barriers",
    title:
      "Breaking Language Barriers: AI Voice Translation in Global Business",
    date: "March 15, 2024",
    description:
      "How real-time AI voice translation is facilitating international business communication and collaboration.",
    category: "Business",
    content: `Real-time AI voice translation is eliminating language barriers in global business communications. Our technology enables seamless communication between parties speaking different languages, maintaining the natural flow of conversation while providing accurate translations.

Key Features:
- Real-time translation
- Natural voice synthesis
- Cultural context awareness
- Support for business terminology

Applications in business:
1. International meetings and conferences
2. Cross-border negotiations
3. Global team collaboration
4. Customer support for international markets

The technology is already being used by major multinational corporations to facilitate global operations.`,
    author: {
      name: "Sofia Rodriguez",
      role: "International Business Consultant",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sofia",
    },
  },
  {
    id: "ethics-ai-voice",
    title: "The Ethics of AI Voice Technology",
    date: "March 12, 2024",
    description:
      "Understanding the ethical considerations and best practices in AI voice generation.",
    category: "Ethics",
    content: `As AI voice technology becomes more prevalent, it's crucial to address the ethical implications and establish best practices for its use. This article explores the key ethical considerations and guidelines for responsible AI voice technology implementation.

Key Topics:
- Consent and privacy in voice cloning
- Transparency in AI-generated content
- Preventing misuse and impersonation
- Data protection and security

Best Practices:
1. Clear disclosure of AI-generated voice content
2. Obtaining proper consent for voice cloning
3. Implementing security measures
4. Regular ethical audits

We believe in setting industry standards for ethical AI voice technology use.`,
    author: {
      name: "Dr. James Mitchell",
      role: "AI Ethics Researcher",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
    },
  },
];

export default function BlogList() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-16">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Insights and updates from The Voice AI team
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card
                key={post.title}
                className="cursor-pointer transition-shadow hover:shadow-lg"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <CardHeader>
                  <div className="text-sm font-medium text-primary">
                    {post.category}
                  </div>
                  <CardTitle className="mt-2">{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.description}</p>
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
