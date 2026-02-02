import DesktopNav from "./desktopNav";
import MobileMenu from "./mobileMenu";
import ThemeSwitcher from "./themeSwitcher";
import LanguageSwitcher from "./languageSwitcher";
import { fetchAPI } from "../../app/[lang]/utils/fetch-api";

type TopNavigationProps = {
  locale: string;
};

export default async function TopNavigation({ locale }: TopNavigationProps) {
  const [pageHeaders, navGroupsResponse] = await Promise.all([
    fetchAPI("/pages", { fields: ["heading", "slug"] }, {}, locale),
    fetchAPI(
      "/navigation-groups",
      {
        populate: {
          pages: { fields: ["heading", "slug"] },
        },
        sort: ["order:asc"],
      },
      {},
      locale
    ),
  ]);

  if (!pageHeaders.data) {
    return <div className="m-4 flex">No navigation data available</div>;
  }

  const navGroups = navGroupsResponse?.data ?? [];

  return (
    <div className="m-4 flex items-center">
      <MobileMenu locale={locale} pageHeaders={pageHeaders.data} />
      <div className="md:block hidden">
        <DesktopNav
          locale={locale}
          navGroups={navGroups}
          pageHeaders={pageHeaders.data}
        />
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
