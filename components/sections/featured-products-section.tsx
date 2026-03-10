"use client";

import Image from "next/image";

const features = [
  {
    title: "EmoLift",
    description: "Emotion Awareness & Mood Support",
    details: "Using intelligent facial expression analysis, EmoLift helps users understand their emotional state and receive personalized mood-uplifting suggestions such as calming music, breathing exercises, or mindfulness activities.",
    image: "/faceid.png",
  },
  {
    title: "Senior Serenity",
    description: "Mindfulness & Relaxation",
    details: "A collection of guided breathing exercises, meditation sessions, calming soundscapes, and relaxing music designed to promote emotional balance and mental peace.",
    image: "/meditate.png",
  },
  {
    title: "ElderConnect",
    description: "Community & Social Engagement",
    details: "Connect with nearby peers who share similar interests. Create and join events, discover local meet-ups, and build meaningful friendships that help reduce loneliness and strengthen social bonds.",
    image: "/person.png",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="features" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Designed for Well-being.
          <br />
          Built for Emotional Balance.
          <br />
          Powered by Thoughtful Technology.
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-12 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {features.map((feature) => (
          <div key={feature.title} className="group flex flex-col gap-6">
            {/* Image */}
            <div className="relative flex items-center justify-center aspect-[4/3] w-full overflow-hidden rounded-3xl bg-secondary/30 transition-transform duration-500 group-hover:-translate-y-2">
              <Image
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                // fill
                width={250}
                height={250}
                className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {feature.description}
              </p>
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {feature.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
