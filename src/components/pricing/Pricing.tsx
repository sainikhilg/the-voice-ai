import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const tiers = [
  {
    name: "Individual",
    price: "$29",
    description: "Perfect for personal projects and small content creators",
    features: [
      "5 hours of voice generation per month",
      "10 voice characters",
      "Standard quality audio",
      "Basic text-to-speech",
      "Email support",
      "Basic language support",
      "48-hour generation time",
      "Mobile app access",
    ],
  },
  {
    name: "Business",
    price: "$99",
    description: "For businesses and professional teams",
    features: [
      "50 hours of voice generation per month",
      "Unlimited voice characters",
      "High quality audio",
      "Priority support",
      "Advanced text-to-speech",
      "Custom voice training",
      "Real-time translation",
      "API access",
      "Analytics dashboard",
      "Team collaboration tools",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with custom needs",
    features: [
      "Unlimited voice generation",
      "Unlimited voice characters",
      "Ultra-high quality audio",
      "24/7 dedicated support",
      "Enterprise-grade security",
      "Custom voice training",
      "Advanced API integration",
      "White-label solutions",
      "Custom AI model training",
      "Multi-language support",
      "Priority processing",
      "SLA guarantee",
      "Dedicated account manager",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Choose the perfect plan for your voice generation needs. All plans
              include access to our core technology.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-lg border p-8 ${tier.featured ? "border-primary ring-2 ring-primary" : ""}`}
              >
                <h3 className="text-2xl font-semibold">{tier.name}</h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  {tier.description}
                </p>
                <p className="mt-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && (
                    <span className="text-sm text-muted-foreground">
                      /month
                    </span>
                  )}
                </p>
                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="ml-3 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-8 w-full"
                  variant={tier.featured ? "default" : "outline"}
                >
                  {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
