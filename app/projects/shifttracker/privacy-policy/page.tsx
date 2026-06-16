import React from "react";
import Container from "@/components/Container/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Shift Tracker",
  description:
    "Privacy Policy for Shift Tracker mobile application. Learn how Shift Tracker keeps your personal data secure and strictly on your local device.",
  robots: {
    index: true,
    follow: true,
  },
};

const PrivacyPolicy = () => {
  return (
    <main className="pt-32 pb-24 lg:pt-48 lg:pb-32 font-inter text-[#1E1E1E]">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="font-jost text-4xl sm:text-5xl font-medium tracking-tight mb-4">
              Privacy Policy
            </h1>
            <div className="h-1 w-20 bg-[#C47B54] mb-6"></div>
            <p className="font-poppins text-lg text-[#1E1E1E]/60 mb-2">
              Shift Tracker Mobile Application
            </p>
            <p className="text-sm text-[#1E1E1E]/40 font-mono">
              Last Updated: June 16, 2026
            </p>
          </div>

          {/* Local-First Commitment Banner */}
          <div className="bg-[#F8F8F8] border-l-4 border-[#C47B54] p-6 mb-12 rounded-r-lg shadow-sm">
            <h3 className="font-poppins font-semibold text-base md:text-lg mb-2 text-[#C47B54]">
              Our Local-First Commitment
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-[#1E1E1E]/80">
              Shift Tracker is built as a local-first utility. <strong>We do not transmit your data over the internet, we do not run backend servers, and we do not share your information with third parties.</strong> All your data remains strictly on your device.
            </p>
          </div>

          {/* Document Body */}
          <div className="space-y-10 md:space-y-12">
            {/* Section Intro */}
            <p className="text-base md:text-lg leading-relaxed text-[#1E1E1E]/80">
              This Privacy Policy describes how Shift Tracker (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, stores, and handles your personal information when you use the Shift Tracker mobile application (the &quot;App&quot;).
            </p>

            <hr className="border-[#1E1E1E]/10" />

            {/* Section 1 */}
            <section>
              <h2 className="font-poppins text-xl md:text-2xl font-semibold mb-4 text-[#1E1E1E]">
                1. Information We Collect and Process
              </h2>
              <p className="mb-4 leading-relaxed text-[#1E1E1E]/80">
                Shift Tracker processes personal and work-related data to provide shift tracking and pay estimation features. All information listed below is entered manually by you and is stored locally on your device:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[#1E1E1E]/80">
                <li>
                  <strong className="text-[#1E1E1E]">Employee Name:</strong> An optional field used strictly to personalize your exported shift reports.
                </li>
                <li>
                  <strong className="text-[#1E1E1E]">Shift Details:</strong> Shift dates, shift types (Morning, Afternoon, Night, or Custom), start and end times, hours worked, and any custom notes you choose to add to individual shift entries.
                </li>
                <li>
                  <strong className="text-[#1E1E1E]">Compensation Settings:</strong> Your regular hourly rate, overtime hourly rate, pay period length, pay period start date, currency preferences, and weekly start-day preferences.
                </li>
                <li>
                  <strong className="text-[#1E1E1E]">Calendar &amp; Holiday Preferences:</strong> Public holidays you select or flag to calculate double-pay rates.
                </li>
              </ul>
            </section>

            <hr className="border-[#1E1E1E]/10" />

            {/* Section 2 */}
            <section>
              <h2 className="font-poppins text-xl md:text-2xl font-semibold mb-4 text-[#1E1E1E]">
                2. How Your Data is Stored (Local Storage Only)
              </h2>
              <p className="mb-4 leading-relaxed text-[#1E1E1E]/80">
                Unlike cloud-based applications, Shift Tracker does not upload your personal data to remote servers.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[#1E1E1E]/80">
                <li>
                  <strong className="text-[#1E1E1E]">Storage Mechanism:</strong> All your shifts, settings, and notes are saved locally on your device using encrypted/secure sandboxed storage (specifically <code className="bg-[#F8F8F8] px-1.5 py-0.5 rounded font-mono text-sm">@react-native-async-storage/async-storage</code>).
                </li>
                <li>
                  <strong className="text-[#1E1E1E]">No Cloud Sync:</strong> There is no automatic backup or cloud synchronization. Your data never leaves your device unless you choose to export it.
                </li>
              </ul>
            </section>

            <hr className="border-[#1E1E1E]/10" />

            {/* Section 3 */}
            <section>
              <h2 className="font-poppins text-xl md:text-2xl font-semibold mb-4 text-[#1E1E1E]">
                3. Data Sharing and Transmission
              </h2>
              <p className="mb-4 leading-relaxed text-[#1E1E1E]/80">
                We do not sell, rent, trade, or transmit your personal data. The only way data is transferred out of the App is when <strong className="text-[#1E1E1E]">you explicitly initiate an export or sharing action</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[#1E1E1E]/80">
                <li>
                  <strong className="text-[#1E1E1E]">User-Initiated Export:</strong> You can choose to generate and export reports as <strong className="text-[#1E1E1E]">PDF</strong> or <strong className="text-[#1E1E1E]">Image</strong> files.
                </li>
                <li>
                  <strong className="text-[#1E1E1E]">Native Share Sheet:</strong> When you trigger an export, the App utilizes the device&apos;s native sharing functionality (<code className="bg-[#F8F8F8] px-1.5 py-0.5 rounded font-mono text-sm">expo-sharing</code>). This allows you to send reports via email, text message, or save them to your personal cloud storage (e.g., Google Drive, iCloud, Dropbox).
                </li>
                <li>
                  <strong className="text-[#1E1E1E]">No Third-Party Access:</strong> We do not have access to your exported files, nor do we track whom you share them with.
                </li>
              </ul>
            </section>

            <hr className="border-[#1E1E1E]/10" />

            {/* Section 4 */}
            <section>
              <h2 className="font-poppins text-xl md:text-2xl font-semibold mb-4 text-[#1E1E1E]">
                4. Device Permissions
              </h2>
              <p className="mb-4 leading-relaxed text-[#1E1E1E]/80">
                To enable specific features, the App may request the following permissions on your mobile device:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[#1E1E1E]/80">
                <li>
                  <strong className="text-[#1E1E1E]">Storage / Media Library (Photos/Files):</strong> The App requests permission to read/write files to your device&apos;s media library or document directory. This is required solely to save and export generated PDF or image reports to your device so you can access or share them.
                </li>
                <li>
                  <strong className="text-[#1E1E1E]">No Network Permissions:</strong> The App does not require or request network permissions for core tracking features and operates fully offline.
                </li>
              </ul>
            </section>

            <hr className="border-[#1E1E1E]/10" />

            {/* Section 5 */}
            <section>
              <h2 className="font-poppins text-xl md:text-2xl font-semibold mb-4 text-[#1E1E1E]">
                5. Third-Party Services and SDKs
              </h2>
              <p className="mb-4 leading-relaxed text-[#1E1E1E]/80">
                We prioritize a clean, tracking-free user experience. Shift Tracker:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[#1E1E1E]/80">
                <li>
                  <strong className="text-[#1E1E1E]">Does NOT</strong> use third-party analytics libraries (such as Firebase Analytics, Google Analytics, Mixpanel, or Amplitude).
                </li>
                <li>
                  <strong className="text-[#1E1E1E]">Does NOT</strong> use third-party crash reporting tools (such as Sentry or Crashlytics) that collect device identifiers.
                </li>
                <li>
                  <strong className="text-[#1E1E1E]">Does NOT</strong> include advertising networks, trackers, or cookies.
                </li>
              </ul>
            </section>

            <hr className="border-[#1E1E1E]/10" />

            {/* Section 6 */}
            <section>
              <h2 className="font-poppins text-xl md:text-2xl font-semibold mb-4 text-[#1E1E1E]">
                6. Data Retention and Deletion
              </h2>
              <p className="mb-4 leading-relaxed text-[#1E1E1E]/80">
                Because all data is stored locally on your device:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[#1E1E1E]/80">
                <li>
                  <strong className="text-[#1E1E1E]">Data Control:</strong> You have full control over your data. You can edit or delete individual shifts or reset all settings to defaults directly within the App.
                </li>
                <li>
                  <strong className="text-[#1E1E1E]">App Deletion:</strong> Uninstalling the App or clearing the App&apos;s data/cache through your device settings will <strong className="text-[#1E1E1E]">permanently delete</strong> all shift logs and settings. Once deleted, this data cannot be recovered by us, as we do not keep backups.
                </li>
              </ul>
            </section>

            <hr className="border-[#1E1E1E]/10" />

            {/* Section 7 */}
            <section>
              <h2 className="font-poppins text-xl md:text-2xl font-semibold mb-4 text-[#1E1E1E]">
                7. Children&apos;s Privacy
              </h2>
              <p className="leading-relaxed text-[#1E1E1E]/80">
                The App is intended for use by working professionals tracking their shifts and is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has entered personal data on a device, it can be removed immediately by deleting the App or resetting the App&apos;s settings.
              </p>
            </section>

            <hr className="border-[#1E1E1E]/10" />

            {/* Section 8 */}
            <section>
              <h2 className="font-poppins text-xl md:text-2xl font-semibold mb-4 text-[#1E1E1E]">
                8. Changes to This Privacy Policy
              </h2>
              <p className="leading-relaxed text-[#1E1E1E]/80">
                We may update this Privacy Policy from time to time. Any updates will be reflected inside the App or on our App Store / Play Store listing page. Your continued use of the App after updates constitutes your acceptance of the updated terms.
              </p>
            </section>

            <hr className="border-[#1E1E1E]/10" />

            {/* Section 9 */}
            <section>
              <h2 className="font-poppins text-xl md:text-2xl font-semibold mb-4 text-[#1E1E1E]">
                9. Contact Us
              </h2>
              <p className="mb-4 leading-relaxed text-[#1E1E1E]/80">
                If you have any questions or feedback regarding this Privacy Policy or the security of your data in Shift Tracker, please contact us at:
              </p>
              <ul className="list-none space-y-2 text-[#1E1E1E]/80">
                <li>
                  <span className="font-semibold text-[#1E1E1E]">Email:</span>{" "}
                  <a
                    href="mailto:johnadepelumi@gmail.com"
                    className="underline decoration-[#1E1E1E]/30 hover:decoration-[#C47B54] hover:text-[#C47B54] transition-colors"
                  >
                    johnadepelumi@gmail.com
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-[#1E1E1E]">Developer Name:</span> John Diddles
                </li>
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default PrivacyPolicy;
