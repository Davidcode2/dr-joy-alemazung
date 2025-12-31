import MenuItems from "@/src/components/menuItems";
import MobileMenu from "./mobileMenu";
import ThemeSwitcher from "./themeSwitcher";
import LanguageSwitcher from "./languageSwitcher";

type TopNavigationProps = {
  locale: string;
};

export default async function TopNavigation({ locale }: TopNavigationProps) {

  return (
    <div className="m-4 flex">
      <MobileMenu locale={locale} />
      <div className="md:block hidden">
        <MenuItems locale={locale} />
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
