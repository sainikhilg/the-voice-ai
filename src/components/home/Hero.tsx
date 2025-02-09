import { Button } from "@/components/ui/button";

import VoiceWave from "./VoiceWave";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <VoiceWave />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
            The Universal AI Voice Platform for Every Need
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Transform any text into natural-sounding speech for education,
            accessibility, entertainment, customer service, and more. One
            platform, endless possibilities.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button size="lg">Get started</Button>
            <Button variant="outline" size="lg">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
