import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for HoróscoPoP - Daily personalized horoscope app",
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-deep-void px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <a
          href="/"
          className="mb-8 inline-block font-[family-name:var(--font-body)] text-sm text-stardust/50 transition-colors hover:text-white"
        >
          &larr; Back to Home
        </a>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-white">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-6 font-[family-name:var(--font-body)] text-sm leading-relaxed text-stardust/70">
          <p>Last updated: March 2026</p>
          <p>
            Wabyte (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the HoróscoPoP mobile
            application and website (the &quot;Service&quot;). This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use our Service.
          </p>

          <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
          <h3 className="font-semibold text-white/80">1.1 Information You Provide</h3>
          <p>
            When you use HoróscoPoP, we may collect the following information that you
            voluntarily provide:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Name (display name for personalization)</li>
            <li>Date of birth (to calculate your zodiac sign and birth chart)</li>
            <li>Time of birth (optional, for more accurate astrological readings)</li>
          </ul>

          <h3 className="font-semibold text-white/80">1.2 Automatically Collected Information</h3>
          <p>When you access or use our Service, we may automatically collect:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Device information (device model, operating system version, unique device identifiers)</li>
            <li>Usage data (features used, time spent on the app, crash reports)</li>
            <li>Push notification tokens (if you enable notifications)</li>
          </ul>

          <h3 className="font-semibold text-white/80">1.3 Analytics</h3>
          <p>
            We use Google Analytics and Firebase Analytics to collect anonymized usage data. This
            helps us understand how users interact with our Service and improve the experience.
            These tools may collect information such as how often you use the app, aggregated
            usage data, and performance data.
          </p>

          <h2 className="text-xl font-bold text-white">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Provide and personalize your daily horoscope readings based on your zodiac sign</li>
            <li>Calculate and display your birth chart and astrological transits</li>
            <li>Send push notifications with your daily horoscope (if enabled)</li>
            <li>Improve, maintain, and optimize the Service</li>
            <li>Diagnose technical issues and analyze usage trends</li>
            <li>Communicate with you about updates and new features</li>
          </ul>

          <h2 className="text-xl font-bold text-white">3. Data Storage and Security</h2>
          <p>
            Your data is stored securely using Supabase, a cloud-based platform that employs
            industry-standard encryption and security measures. We use row-level security
            policies to ensure that your personal data is accessible only to you. Data is
            transmitted using TLS/SSL encryption.
          </p>
          <p>
            While we implement commercially reasonable security measures, no method of
            electronic storage or transmission over the Internet is 100% secure. We cannot
            guarantee absolute security of your data.
          </p>

          <h2 className="text-xl font-bold text-white">4. Data Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, rent, or otherwise share your personal information with
            third parties for their marketing purposes. We may share information in the
            following limited circumstances:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong className="text-white/80">Service Providers:</strong> With trusted third-party
              services that help us operate the app (e.g., Firebase for analytics and
              notifications, Supabase for data storage), subject to their own privacy policies.
            </li>
            <li>
              <strong className="text-white/80">Legal Requirements:</strong> If required by law,
              legal process, or governmental request.
            </li>
            <li>
              <strong className="text-white/80">Aggregated Data:</strong> We may share anonymized,
              aggregated data that cannot be used to identify you for analytical purposes.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-white">5. Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong className="text-white/80">Access:</strong> Request a copy of the personal data
              we hold about you.
            </li>
            <li>
              <strong className="text-white/80">Correction:</strong> Request correction of any
              inaccurate personal data.
            </li>
            <li>
              <strong className="text-white/80">Deletion:</strong> Request deletion of your personal
              data. You can delete your account and all associated data from within the app
              settings.
            </li>
            <li>
              <strong className="text-white/80">Notifications:</strong> Opt out of push notifications
              at any time through your device settings or the app settings.
            </li>
            <li>
              <strong className="text-white/80">Data Portability:</strong> Request your data in a
              portable format.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-white">6. Children&apos;s Privacy</h2>
          <p>
            Our Service is not directed to children under the age of 13. We do not knowingly
            collect personal information from children under 13. If we become aware that we
            have collected personal data from a child under 13 without parental consent, we
            will take steps to delete that information promptly. If you believe we have
            collected information from a child under 13, please contact us immediately.
          </p>

          <h2 className="text-xl font-bold text-white">7. Third-Party Services</h2>
          <p>Our Service uses the following third-party services:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong className="text-white/80">Google Firebase:</strong> For analytics, crash
              reporting, and push notifications.{" "}
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stardust underline transition-colors hover:text-white"
              >
                Firebase Privacy Policy
              </a>
            </li>
            <li>
              <strong className="text-white/80">Supabase:</strong> For authentication and data
              storage.{" "}
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stardust underline transition-colors hover:text-white"
              >
                Supabase Privacy Policy
              </a>
            </li>
            <li>
              <strong className="text-white/80">Google Analytics:</strong> For website and app
              analytics.{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stardust underline transition-colors hover:text-white"
              >
                Google Privacy Policy
              </a>
            </li>
          </ul>

          <h2 className="text-xl font-bold text-white">8. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to provide the Service
            and fulfill the purposes outlined in this Privacy Policy. When you delete your
            account, your personal data will be permanently removed from our systems within
            30 days, except where we are required by law to retain certain information.
          </p>

          <h2 className="text-xl font-bold text-white">9. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your
            country of residence. These countries may have different data protection laws. By
            using the Service, you consent to the transfer of your information to these
            countries. We ensure appropriate safeguards are in place to protect your data in
            compliance with applicable laws.
          </p>

          <h2 className="text-xl font-bold text-white">10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any
            material changes by posting the new Privacy Policy within the app and updating the
            &quot;Last updated&quot; date. Your continued use of the Service after changes are posted
            constitutes your acceptance of the updated Privacy Policy.
          </p>

          <h2 className="text-xl font-bold text-white">11. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or
            our data practices, please contact us at:
          </p>
          <ul className="list-none space-y-1">
            <li>
              Email:{" "}
              <a
                href="mailto:privacy@horoscopop.app"
                className="text-stardust underline transition-colors hover:text-white"
              >
                privacy@horoscopop.app
              </a>
            </li>
            <li>
              Website:{" "}
              <a
                href="https://www.wabyte.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stardust underline transition-colors hover:text-white"
              >
                www.wabyte.net
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
