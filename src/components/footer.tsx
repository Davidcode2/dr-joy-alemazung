import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 pt-62 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-lg font-semibold mb-4">
              Dr. Joy A. Alemazung
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Bürgermeister, Wissenschaftler und Experte für Nachhaltigkeit und
              Migration
            </p>
          </div>

          {/* Main Sections */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-700 dark:text-gray-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/buergermeisterliches"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition"
                >
                  Bürgermeisteramt
                </Link>
              </li>
              <li>
                <Link
                  href="/wissenschaft-und-publikationen"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition"
                >
                  Wissenschaft und Publikationen
                </Link>
              </li>
              <li>
                <Link
                  href="/vortraege-und-medien"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition"
                >
                  Medien und Vorträge
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-700 dark:text-gray-300">
              Rechtliches
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/impressum"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition"
                >
                  Impressum
                </Link>
              </li>
              <li className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition">
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
