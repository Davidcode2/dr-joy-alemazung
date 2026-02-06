import SocialLinksList from "@/src/components/shared/socialLinksList";

type SocialLinksProps = {
  sectionTitle: string;
};

export default function SocialLinks({ sectionTitle }: SocialLinksProps) {
  return (
    <div className="bg-(--ultralight-accent)">
      <div className="mx-4 md:mx-auto md:w-2/3 pb-40">
        <h2 className="text-center mt-0 py-20 text-5xl lg:text-4xl text-foreground font-serif">
          {sectionTitle}
        </h2>

        <div className="max-w-3xl mx-auto mt-10">
          <div className="bg-(--light-accent)/40 rounded-lg">
            <SocialLinksList />
          </div>
        </div>
      </div>
    </div>
  );
}
