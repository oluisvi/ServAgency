import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Learn how ServAgency handles information submitted through the website and how to exercise your rights.",
  alternates: {
    canonical: "/en/privacy",
    languages: { "pt-BR": "/privacidade", en: "/en/privacy" },
  },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <article className="page-shell legal-content">
        <Link className="legal-back" href="/en">
          ← Back to the website
        </Link>
        <span className="eyebrow">PRIVACY · LGPD</span>
        <h1>Privacy policy</h1>
        <p className="legal-lead">
          This policy explains which information ServAgency handles when you
          visit the website or contact us.
        </p>
        <section>
          <h2>1. Who controls the data</h2>
          <p>
            ServAgency, a brand currently being formed and not yet registered as
            a legal entity in Brazil, is responsible for decisions concerning
            personal data collected through this website. Privacy questions and
            requests may be sent via WhatsApp at{" "}
            <a href="https://wa.me/5512992568583">+55 12 99256-8583</a>.
          </p>
        </section>
        <section>
          <h2>2. Information we handle</h2>
          <p>We may handle information you voluntarily provide:</p>
          <ul>
            <li>name and company;</li>
            <li>WhatsApp number or email;</li>
            <li>type of need and message content.</li>
          </ul>
          <p>
            We also receive aggregate access metrics such as page, referrer,
            approximate country, browser, and device type. Vercel Web Analytics
            does not associate these metrics with an individual identity or IP
            address.
          </p>
        </section>
        <section>
          <h2>3. How we use information</h2>
          <ul>
            <li>respond to requests and discuss projects;</li>
            <li>understand the stated need and prepare proposals;</li>
            <li>protect the website against abuse and diagnose failures;</li>
            <li>
              measure usage, conversion, and performance to improve the product.
            </li>
          </ul>
          <p>
            Processing supports the data subject’s own request, preliminary
            steps toward a potential contract, and legitimate interests related
            to security and service improvement, while respecting the data
            subject’s rights.
          </p>
        </section>
        <section>
          <h2>4. Sharing and service providers</h2>
          <p>
            We use Vercel for hosting, aggregate metrics, and performance
            measurement, and WhatsApp when you choose to begin a conversation.
            These providers process information according to their own terms and
            policies. We do not sell personal data.
          </p>
        </section>
        <section>
          <h2>5. Retention and security</h2>
          <p>
            We retain contact information only for as long as necessary to
            respond, prepare proposals, meet applicable obligations, or protect
            rights. We adopt technical and organizational measures proportional
            to the stage and nature of the operation.
          </p>
        </section>
        <section>
          <h2>6. Your rights</h2>
          <p>
            You may request confirmation of processing, access, correction,
            sharing information, objection, anonymization, blocking, or deletion
            where applicable. Use the contact channel listed on this page to
            exercise these rights.
          </p>
        </section>
        <section>
          <h2>7. Cookies and analytics</h2>
          <p>
            The website uses Vercel Web Analytics and Speed Insights for
            aggregate usage and performance metrics. The current configuration
            does not use advertising cookies or behavioral profiling tools. The
            language preference is stored in a first-party cookie solely to
            remember your selection.
          </p>
        </section>
        <section>
          <h2>8. Updates</h2>
          <p>
            This policy may change when new channels, integrations, or
            processing activities are added. The current version will always be
            published at this URL.
          </p>
          <p>
            <strong>Last updated:</strong> September 25, 2026.
          </p>
        </section>
        <aside className="legal-note">
          This document describes the website’s current operation and should be
          reviewed with legal counsel when ServAgency’s corporate structure and
          final registration details are formalized.
        </aside>
      </article>
    </main>
  );
}
