"use client";

export function TestimonialsSection() {
  return (
    <section id="about" className="relative w-full min-h-[80vh] flex items-center justify-center bg-foreground text-background">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          src="/testimonial.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Large Text Statement over the video */}
      <div className="relative z-10 px-6 py-24 md:px-12 md:py-32 lg:px-20 flex flex-col items-center text-center">
        <p className="mx-auto max-w-5xl text-2xl leading-relaxed text-white md:text-3xl lg:text-[2.5rem] lg:leading-snug font-medium drop-shadow-md">
          Whether it’s understanding emotions, practicing calming activities, or connecting with peers nearby, AyuMetra empowers seniors to nurture their mental well-being and rediscover joy in everyday life.
        </p>
        <div className="mt-12 flex items-center gap-4 text-white/80">
          <div className="w-16 h-1 bg-white/30 rounded-full"></div>
          <p className="tracking-widest uppercase text-sm text-white drop-shadow-md">Our Mission</p>
          <div className="w-16 h-1 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
