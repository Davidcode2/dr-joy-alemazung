import MenuItems from "@/src/components/menuItems";
import MobileMenu from "./mobileMenu";
import ThemeSwitcher from "./themeSwitcher";
import LanguageSwitcher from "./languageSwitcher";
import { fetchAPI } from "../app/[lang]/utils/fetch-api";

type TopNavigationProps = {
  locale: string;
};

export default async function TopNavigation({ locale }: TopNavigationProps) {
  const pageHeaders = await fetchAPI(
    "/pages",
    { fields: ["heading", "slug"] },
    {},
    locale
  );

  if (!pageHeaders.data) {
    return <div className="m-4 flex">No navigation data available</div>;
  }

  return (
    <div className="m-4 flex">
      <MobileMenu locale={locale} pageHeaders={pageHeaders.data} />
      <div className="md:block hidden">
        <MenuItems locale={locale} pageHeaders={pageHeaders.data} />
      </div>
      <div className="ml-auto">
        <ul className="flex gap-x-4">
          <li>
            <LanguageSwitcher locale={locale} />
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </div>
  );
}
