export default function Quote() {
  return (
    <div className="lg:w-2/3 lg:py-42 pb-[280px] lg:pb-[300px] mx-auto">
      <div className="flex px-6">
        <span className="content-center text-8xl font-serif text-gray-400 mr-8 leading-none">
          „
        </span>
        <blockquote className="flex text-center items-center justify-center italic text-4xl/20 lg:text-6xl/20 text-gray-700 my-0 p-0">
          <span>
            Führung ist das Privileg, den Menschen zu dienen und&nbsp;nicht das
            Recht, über sie zu herrschen
          </span>
        </blockquote>
        <span className="content-center text-8xl font-serif text-gray-400 ml-4 leading-none">
          “
        </span>
      </div>
      <div className="mt-6 text-center text-gray-400">Dr. Joy A. Alemazung</div>
    </div>
  );
}
