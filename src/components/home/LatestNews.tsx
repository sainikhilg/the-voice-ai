import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const news = [
  {
    title: "The Voice AI Partners with Major Educational Institutions",
    date: "March 15, 2024",
    description:
      "Leading universities adopt our AI voice technology to create accessible learning materials for students worldwide.",
  },
  {
    title: "Enterprise API Platform Launch",
    date: "March 10, 2024",
    description:
      "Introducing our enterprise-grade API platform for seamless integration of AI voice technology into any application.",
  },
  {
    title: "Partnership with Leading Content Creators",
    date: "March 5, 2024",
    description:
      "Major content creators are now using The Voice AI for their productions.",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Latest News</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay updated with our latest developments and announcements
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {news.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
