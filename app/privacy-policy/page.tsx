import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";

function TermSection({ title, content }: { title: string; content: string }) {
    return (
        <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground tracking-tight">{title}</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2 whitespace-pre-wrap">
                {content}
            </div>
        </div>
    );
}

export default function PrivacyPolicy() {
    return (
        <main className="relative min-h-screen bg-background selection:bg-foreground/10">
            {/* Dark background block at the top for header visibility before scrolling */}
            <div className="absolute top-0 left-0 right-0 h-[30vh] md:h-64 bg-[#0A0A0A]" />

            <Header />

            <div className="relative z-10 pt-32 md:pt-40 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
                <div className="bg-card p-8 md:p-12 rounded-3xl border border-border/50 shadow-sm">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                        Privacy Policy
                    </h1>

                    <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                        AyuMetra prioritises your privacy. This policy outlines what information we collect, how we use it, how it is stored, and the choices you have regarding your personal data. As an emotional wellness app, we understand the sensitivity of the information you may share with us, and we commit to handling it with care and confidentiality.
                    </p>

                    <TermSection
                        title="1. Information We Collect"
                        content={`We only collect the minimum amount of information necessary to deliver personalised well-being support. This may include:
• Basic personal info like name, age, email address, location, and your interests.
• Emotional wellness data, such as mood logs, journal entries, or reminders.
• Device data, like your mobile OS version or app usage logs, solely for performance improvement.
No sensitive health or medical records are collected unless explicitly shared by the user.`}
                    />

                    <TermSection
                        title="2. How We Use Your Information"
                        content={`Your information is used for the following purposes:
• To personalise your emotional wellness journey (e.g., customised affirmations and insights).
• To provide notifications for daily check-ins, breathing exercises, or reminders.
• To understand usage patterns and improve the design and flow of the app experience.
• To protect and maintain the security of our services.
We do not use your data for advertising or sell your data to any third parties.`}
                    />

                    <TermSection
                        title="3. Data Security"
                        content={`We implement strict security protocols including encryption, secure database access, and role-based controls to protect your personal data. While we strive for strong security, no system can be guaranteed to be completely immune to threats. Users are therefore encouraged to avoid sharing highly sensitive personal details through the app.`}
                    />

                    <TermSection
                        title="4. Health Information Disclaimer"
                        content={`AyuMetra is not a medical app and does not comply with medical data regulations such as HIPAA unless explicitly stated otherwise. Any emotional well-being data shared within the app is intended solely for personal reflection and app personalisation, and not for medical diagnosis or treatment.`}
                    />

                    <TermSection
                        title="5. Data Sharing"
                        content={`We do not share your personal data with third parties except in the following situations:
• When required by law (for example, in response to a court order).
• When necessary to protect your vital interests or the interests of another individual.
• When data is anonymised and used for academic research or performance analysis.
In all other cases, your data remains strictly confidential.`}
                    />

                    <TermSection
                        title="6. Children’s Privacy"
                        content={`AyuMetra is not designed for users under the age of 13. If we discover that personal data from a child under 13 has been inadvertently collected, it will be immediately and permanently deleted from our systems.`}
                    />

                    <TermSection
                        title="7. Your Rights"
                        content={`As a user, you have the right to:
• View and access the data you have shared.
• Request corrections or deletion of your personal information.
• Withdraw your consent and discontinue use of the app at any time.
To exercise these rights, please contact us at ayumetra.app@gmail.com.`}
                    />

                    <TermSection
                        title="8. Third-party Services"
                        content={`If AyuMetra integrates with third-party services such as Apple HealthKit or iCloud, your data will be handled according to the terms and privacy policies of those respective platforms. We encourage you to review their privacy policies separately.`}
                    />

                    <TermSection
                        title="9. Changes to This Policy"
                        content={`We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. Significant updates will be communicated through app notifications, updates, or email. We encourage users to review this policy periodically.`}
                    />

                    <TermSection
                        title="10. Contact Us"
                        content={`If you have any questions, concerns, or feedback regarding this Privacy Policy, you may contact us at: ayumetra.app@gmail.com`}
                    />
                </div>
            </div>

            <FooterSection />
        </main>
    );
}
