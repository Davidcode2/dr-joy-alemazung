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
      <div className="h-full grid grid-cols-12 grid-rows-12">
        <div className="col-start-2 col-span-4 row-start-5 md:row-start-7 lg:row-start-8">
          {children}
        </div>
      </div>
    </div>
  );
}
