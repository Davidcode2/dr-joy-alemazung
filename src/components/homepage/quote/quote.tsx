export default function Quote() {
  return (
    <div className="bg-(--ultralight-accent) py-50 lg:py-80  w-full">
      <div className="lg:w-2/3 mx-auto text-(--dark-accent) dark:text-foreground">
        <div className="flex px-6 ">
          <span className="content-center text-8xl font-serif mr-8 leading-none">
            „
          </span>
          <blockquote className="flex text-center items-center justify-center italic text-3xl/15 sm:text-4xl/20 lg:text-6xl/20 my-0 p-0">
            <span className="font-serif">
              Führung ist das Privileg, den Menschen zu dienen und&nbsp;nicht
              das Recht, über sie zu herrschen
            </span>
          </blockquote>
          <span className="content-center text-8xl font-serif ml-4 leading-none">
            “
          </span>
        </div>
        <div className="mt-6 text-center">
          Dr. Joy A. Alemazung
        </div>
      </div>
    </div>
  );
}

