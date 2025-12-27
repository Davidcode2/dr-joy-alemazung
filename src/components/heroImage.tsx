export default function HeroImage({
  url,
  children,
}: {
  url: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="w-screen h-[80vh] bg-cover bg-top"
      style={{ backgroundImage: `url(${url})` }}
    >
    { children}
    </div>
  );
}
