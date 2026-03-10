"use client";

import Image from "next/image";

const stats = [
  { label: "Seniors Connected", value: "10+" },
  { label: "Moments Logged", value: "100+" },
  { label: "Community Events", value: "10+" },
  { label: "Secure & Private", value: "100%" },
];

export function EditorialSection() {
  return (
    <section className="bg-background py-20">
      {/* Specs Grid */}
      <div className="grid grid-cols-2 border-y border-border md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-b border-r border-border p-8 text-center last:border-r-0 md:border-b-0"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
              {stat.label}
            </p>
            <p className="font-medium text-foreground text-4xl">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Full-width Image in place of video */}
      <div className="relative aspect-[16/9] w-full md:aspect-[21/9] mt-20">
        <Image
          src="/hero-v2.jpg"
          alt="A senior feeling supported and connected"
          fill
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/20" />
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white drop-shadow-lg max-w-4xl leading-tight">
            "AyuMetra brought light back into my life. I feel heard, connected, and part of a community again."
          </h3>
        </div>
      </div>
    </section>
  );
}
