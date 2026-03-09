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

export default function TermsAndConditions() {
    return (
        <main className="relative min-h-screen bg-background selection:bg-foreground/10">
            {/* Dark background block at the top for header visibility before scrolling */}
            <div className="absolute top-0 left-0 right-0 h-[30vh] md:h-64 bg-[#0A0A0A]" />

            <Header />

            <div className="relative z-10 pt-32 md:pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="bg-card p-8 md:p-12 rounded-3xl border border-border/50 shadow-sm">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                        Terms and Conditions
                    </h1>

                    <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                        These terms and conditions outline the rules and regulations for the use of AyuMetra.
                    </p>

                    <TermSection
                        title="1. Acceptance of Terms"
                        content="By installing, accessing, or using the AyuMetra app, you are agreeing to abide by these Terms and Conditions in full. If you do not agree with any part of these terms, you must not access or use the app. These terms are a legal agreement between you (the user) and the developers of AyuMetra."
                    />

                    <TermSection
                        title="2. Description of Service"
                        content="AyuMetra is a mobile platform created to promote emotional and mental well-being among elderly users. The app may include tools such as mood tracking, wellness reminders, positive affirmations, breathing exercises, and community bonding. It is designed to provide comfort, structure, and mindfulness in daily life, particularly for aging users."
                    />

                    <TermSection
                        title="3. User Eligibility"
                        content="AyuMetra is designed with a primary focus on the elderly (typically aged 60 years and above). However, family members or caregivers may also use it to assist the intended user. If you are accessing the app on behalf of an elderly person, you must ensure that you have their permission or legal authorisation to do so."
                    />

                    <TermSection
                        title="4. Medical Disclaimer"
                        content="AyuMetra is not intended to replace clinical diagnosis, psychiatric evaluation, or professional therapy. It offers general wellness tools, not healthcare services. Always consult a licensed doctor, psychologist, or psychiatrist before making decisions that could affect mental or physical health."
                    />

                    <TermSection
                        title="5. User Accounts and Data"
                        content="To fully experience AyuMetra’s personalised features, users are required to create an account. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account. Providing false or misleading information is strictly prohibited."
                    />

                    <TermSection
                        title="6. Data Usage"
                        content="We may collect and use certain personal data to enhance the user experience, offer personalised emotional insights, and improve our services. By continuing to use the app, you consent to this limited data collection, subject to our Privacy Policy."
                    />

                    <TermSection
                        title="7. Restrictions"
                        content="You agree not to use the app in a way that could harm or exploit others, reverse-engineer, duplicate, or distribute the app without authorisation, or upload content that is abusive, discriminatory, or misleading. Any violation of these restrictions may result in the termination of your account."
                    />

                    <TermSection
                        title="8. Modifications"
                        content="We reserve the right to modify these Terms at any time to reflect changes in our practices, technology, legal requirements, or for other reasons. If material changes are made, we will notify users via the app or email. Continued use after the changes implies agreement with the updated Terms."
                    />

                    <TermSection
                        title="9. Termination"
                        content="We reserve the right to suspend or terminate your access to AyuMetra for violations of these Terms, harmful behaviour, or unlawful activity. Termination may occur without prior notice. Upon termination, your rights to use the app will cease immediately."
                    />

                    <TermSection
                        title="10. Limitation of Liability"
                        content="To the maximum extent allowed by law, AyuMetra and its developers shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the app, even if we have been advised of the possibility of such damages."
                    />

                    <TermSection
                        title="11. Governing Law"
                        content="These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any disputes arising will be resolved in the courts located in that jurisdiction."
                    />
                </div>
            </div>

            <FooterSection />
        </main>
    );
}
