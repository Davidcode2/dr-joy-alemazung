import ContactForm from "@/src/components/contact/contactForm";
import SocialLinksList from "@/src/components/shared/socialLinksList";

type PropTypes = {
  params: Promise<{ lang: string }>;
};

export default async function KontaktPage({ params }: PropTypes) {
  const { lang } = await params;
  const isEnglish = lang === "en";

  const content = {
    de: {
      title: "Kontakt",
      subtitle: "Nehmen Sie mit mir Kontakt auf",
      description:
        "Haben Sie Fragen oder möchten Sie sich vernetzen? Schreiben Sie mir gerne eine Nachricht.",
      formTitle: "Nachricht senden",
      socialTitle: "Oder finden Sie mich auf Social Media",
    },
    en: {
      title: "Contact",
      subtitle: "Get in touch with me",
      description:
        "Do you have questions or want to connect? Feel free to send me a message.",
      formTitle: "Send a message",
      socialTitle: "Or find me on social media",
    },
  };

  const t = isEnglish ? content.en : content.de;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-(--ultralight-accent) py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-(--muted-accent) font-light">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-lg text-(--grey-accent) text-center mb-10 leading-relaxed">
            {t.description}
          </p>

          <div className="bg-(--ultralight-accent) rounded-xl p-8 md:p-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-8 text-center">
              {t.formTitle}
            </h2>
            <ContactForm locale={lang} />
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 md:py-24 bg-(--ultralight-accent)">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-serif font-semibold text-foreground mb-12">
            {t.socialTitle}
          </h2>

          <div className="bg-(--light-accent)/40 rounded-lg">
            <SocialLinksList />
          </div>
        </div>
      </section>
    </div>
  );
}
