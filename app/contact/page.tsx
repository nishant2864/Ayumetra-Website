"use client";

import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { Mail, MapPin, Phone, HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="relative min-h-screen bg-background selection:bg-foreground/10">
            {/* Dynamic Header Space */}
            <div className="absolute top-0 left-0 right-0 h-[10vh] md:h-90 bg-[#0A0A0A]" />
            <Header />

            <div className="relative z-10 pt-32 md:pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto">

                {/* Creative Intro */}
                <div className="text-center mb-16 md:mb-24">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
                        We're Here <span className="text-muted-foreground font-normal italic">for You...</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mx-auto max-w-3xl leading-relaxed">
                        Whether you have a question, need support with AyuMetra, or simply want to share your experience with us, our team is always just a message away.
                    </p>
                </div>

                {/* Split Section Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left: Contact Info & Support Box */}
                    <div className="flex flex-col gap-8">
                        <div className="bg-card p-10 md:p-14 rounded-3xl border border-border/50 shadow-sm relative overflow-hidden group">
                            <div className="relative z-10 p-4">
                                <h2 className="text-2xl font-semibold mb-4 text-foreground">Get in Touch Directly</h2>
                                <p className="text-muted-foreground mb-15 leading-relaxed text-lg">
                                    We pride ourselves on providing personal, compassionate support to our community. Drop us an email, and a real human will get back to you.
                                </p>

                                <Link
                                    href="mailto:ayumetra.app@gmail.com"
                                    className="inline-flex items-center gap-4 bg-foreground text-background px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity text-lg"
                                >
                                    <Mail size={24} />
                                    ayumetra.app@gmail.com
                                </Link>
                            </div>
                        </div>

                        {/* Additional Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">

                            <div className="bg-secondary/30 p-8 rounded-3xl border border-border/50 flex items-start gap-6">
                                <div className="bg-background w-12 h-12 rounded-full flex shrink-0 items-center justify-center mt-4 border border-border">
                                    <Phone size={20} className="text-foreground" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">Availability</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Monday - Friday<br />
                                        9:00 AM - 6:00 PM (IST)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual Storytelling */}
                    <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <video
                            src="/contact.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 w-full p-10 md:p-14">
                            <p className="text-white/90 text-2xl font-medium leading-relaxed max-w-sm mb-6">
                                The best connections are the ones that make us feel seen and heard.
                            </p>
                            <div className="w-12 h-1 bg-white/50 rounded-full"></div>
                        </div>
                    </div>

                </div>
            </div>

            <FooterSection />
        </main>
    );
}
