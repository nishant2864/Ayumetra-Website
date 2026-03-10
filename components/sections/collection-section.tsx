"use client";

import Image from "next/image";

const experiences = [
  {
    id: 1,
    title: "Simple Mood Logging",
    description: "Easily track your daily emotions with an intuitive interface designed for clarity.",
    image: "/2.jpg",
  },
  {
    id: 2,
    title: "Mindful Serenity",
    description: "Access guided meditations, calming music, and mindful breathing exercises instantly.",
    image: "/3.jpg",
  },
  {
    id: 3,
    title: "Community Events",
    description: "Discover verified local activities and meetups geared towards your interests.",
    image: "/8.jpg",
  },
  {
    id: 4,
    title: "Secure Communication",
    description: "Stay in touch with family, caregivers, and friends securely and privately.",
    image: "/6.jpg",
  },
];

export function CollectionSection() {
  return (
    <section id="experience" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          The AyuMetra Experience
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
          Thoughtfully crafted to be simple, accessible, and deeply helpful for senior users.
        </p>
      </div>

      {/* Experience Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {experiences.map((exp) => (
            <div key={exp.id} className="group flex-shrink-0 w-[75vw] snap-center">
              {/* Image */}
              <div className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-secondary/50">
                <Image
                  src={exp.image || "/placeholder.svg"}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6 flex flex-col gap-2">
                <h3 className="text-xl font-semibold leading-snug text-foreground">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 md:px-12 lg:px-20">
          {experiences.map((exp) => (
            <div key={exp.id} className="group flex flex-col h-full">
              {/* Image */}
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-3xl bg-secondary/50">
                <Image
                  src={exp.image || "/placeholder.svg"}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6 flex flex-col gap-2 flex-grow">
                <h3 className="text-xl font-semibold leading-snug text-foreground">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
