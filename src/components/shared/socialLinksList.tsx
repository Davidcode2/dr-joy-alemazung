import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

type SocialLink = {
  id: string;
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
};

const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://de.linkedin.com/in/dr-joy-asongazoh-alemazung-b554362a",
    icon: FaLinkedin,
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/dr.alemazung/",
    icon: FaInstagram,
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "https://www.facebook.com/dralemazung/?locale=de_DE",
    icon: FaFacebook,
  },
];

export default function SocialLinksList() {
  return (
    <ul className="px-6 md:px-10 py-6 flex flex-col">
      {socialLinks.map((link, index) => {
        const IconComponent = link.icon;
        const isLast = index === socialLinks.length - 1;

        return (
          <li
            key={link.id}
            className={`${isLast ? "" : "border-b border-(--light-accent)"} py-6`}
          >
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-x-6 text-foreground hover:text-(--accent) transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-(--light-accent) flex items-center justify-center transition-all duration-300 group-hover:bg-(--accent) group-hover:scale-110">
                <IconComponent
                  size={24}
                  className="text-(--dark-accent) group-hover:text-white transition-colors duration-300"
                />
              </div>
              <span className="text-lg md:text-xl font-medium">
                {link.name}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
