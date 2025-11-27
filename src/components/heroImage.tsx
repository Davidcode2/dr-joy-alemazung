export default function HeroImage({
  url,
  children,
}: {
  url: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="w-screen max-h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="max-h-fit grid grid-cols-8 grid-rows-8">
        <div className="col-start-2 row-start-6">{children}</div>
      </div>
    </div>
  );
}
