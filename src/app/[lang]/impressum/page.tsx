import BackButton from "@/src/components/backButton";
import { impressumDE } from "@/src/content/impressum/de";
import { impressumEN } from "@/src/content/impressum/en";
import type { ImpressumContent } from "@/src/content/impressum/types";

type PropTypes = {
  params: Promise<{ lang: string }>;
};

function getImpressumContent(lang: string): ImpressumContent {
  return lang === 'en' ? impressumEN : impressumDE;
}

export default async function Impressum({ params }: PropTypes) {
  const { lang } = await params;
  const content = getImpressumContent(lang);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 pb-40">
      <BackButton />

      <h1 className="text-5xl font-bold font-serif mb-8 mt-4">{content.title}</h1>

      <div className="space-y-8 text-gray-700 dark:text-gray-300">
        {/* Provider Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            {content.sections.provider.heading}
          </h2>
          <div className="space-y-2">
            <p className="font-semibold">{content.sections.provider.name}</p>
            {content.sections.provider.address.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            {content.sections.contact.heading}
          </h2>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">{content.sections.contact.emailLabel}</span>{" "}
              <a
                href={`mailto:${content.sections.contact.email}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {content.sections.contact.email}
              </a>
            </p>
          </div>
        </section>

        {/* Responsible for Content */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            {content.sections.responsible.heading}
          </h2>
          {content.sections.responsible.address.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </section>

        {/* Content Liability */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            {content.sections.contentLiability.heading}
          </h2>
          {content.sections.contentLiability.paragraphs.map((paragraph, index) => (
            <p key={index} className={index > 0 ? "mt-2" : ""}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* Link Liability */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            {content.sections.linkLiability.heading}
          </h2>
          {content.sections.linkLiability.paragraphs.map((paragraph, index) => (
            <p key={index} className={index > 0 ? "mt-2" : ""}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* Copyright */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            {content.sections.copyright.heading}
          </h2>
          {content.sections.copyright.paragraphs.map((paragraph, index) => (
            <p key={index} className={index > 0 ? "mt-2" : ""}>
              {paragraph}
            </p>
          ))}
        </section>
      </div>
    </div>
  );
}

