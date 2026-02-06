import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaTiktok, FaEnvelope, FaGlobe } from "react-icons/fa";
import { IconType } from "react-icons";

type SocialLinkData = {
  id: number;
  platform: "linkedin" | "instagram" | "facebook" | "twitter" | "youtube" | "tiktok" | "email" | "website";
  url: string;
  label?: string;
};

type SocialLinksData = {
  title: string;
  links: SocialLinkData[];
};

const platformIcons: Record<SocialLinkData["platform"], IconType> = {
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  facebook: FaFacebook,
  twitter: FaTwitter,
  youtube: FaYoutube,
  tiktok: FaTiktok,
  email: FaEnvelope,
  website: FaGlobe,
};

const platformLabels: Record<SocialLinkData["platform"], string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  facebook: "Facebook",
  twitter: "Twitter",
  youtube: "YouTube",
  tiktok: "TikTok",
  email: "E-Mail",
  website: "Website",
};

type SocialLinksSectionProps = {
  data: SocialLinksData;
};

export default function SocialLinksSection({ data }: SocialLinksSectionProps) {
  if (!data?.links?.length) {
    return null;
  }

  return (
    <div className="bg-(--ultralight-accent)">
      <div className="mx-4 md:mx-auto md:w-2/3 pb-40">
        <h2 className="text-center mt-0 py-20 text-5xl lg:text-4xl text-foreground font-serif">
          {data.title}
        </h2>

        <div className="max-w-3xl mx-auto mt-10">
          <div className="bg-(--light-accent)/40 rounded-lg">
            <ul className="px-6 md:px-10 py-6 flex flex-col">
              {data.links.map((link, index) => {
                const IconComponent = platformIcons[link.platform] || FaGlobe;
                const displayLabel = link.label || platformLabels[link.platform];
                const isLast = index === data.links.length - 1;

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
                        {displayLabel}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
