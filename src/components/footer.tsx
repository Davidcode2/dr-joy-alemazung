import Link from "next/link";

type FooterProps = {
  locale: string;
};

export default function Footer({ locale }: FooterProps) {
  return (
    <footer className="w-full border-t border-(--ultralight-accent)/40 dark:border-gray-700 bg-(--ultralight-accent)/20">
      <div className="max-w-7xl mx-auto px-6 pt-62 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-lg font-semibold mb-4">
              Dr. Joy A. Alemazung
            </h3>
            <p className="text-sm text-(--gray-accent)">
              Bürgermeister, Wissenschaftler und Experte für Nachhaltigkeit und
              Migration
            </p>
          </div>

          {/* Main Sections */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-(--grey-accent)">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-(--grey-accent)/70 hover:text-(--grey-accent) transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/buergermeisterliches`}
                  className="text-(--grey-accent)/70 hover:text-(--grey-accent) transition"
                >
                  Bürgermeisteramt
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/wissenschaft-und-publikationen`}
                  className="text-(--grey-accent)/70 hover:text-(--grey-accent) transition"
                >
                  Wissenschaft und Publikationen
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/vortraege-und-medien`}
                  className="text-(--grey-accent)/70 hover:text-(--grey-accent) transition"
                >
                  Medien und Vorträge
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-(--grey-accent)">
              Rechtliches
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/impressum`}
                  className="text-(--grey-accent)/70 hover:text-(--grey-accent) transition"
                >
                  Impressum
                </Link>
              </li>
              <li className="text-(--grey-accent)/70">
                © {new Date().getFullYear()} Dr. Joy A. Alemazung. Alle Rechte
                vorbehalten.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
