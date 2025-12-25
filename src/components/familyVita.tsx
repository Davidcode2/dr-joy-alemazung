import Image from "next/image"

export default function FamilyVita() {
  return (
    <div className="bg-(--ultralight-accent) mx-auto grid grid-cols-1 gap-10 items-center">
      <div className="w-full rounded-lg flex items-center justify-center">
        <Image
          src="/images/alemazung_family.jpg"
          alt="Portrait"
          className="object-cover xl:w-2/3 h-full rounded-lg"
          width={800}
          height={600}
        />
      </div>
      <ul className="mx-5 md:mx-20 lg:mx-auto lg:w-2/3 2xl:w-1/2 text-gray-800 flex justify-center h-full flex-col">
        <li className="border-b border-(--light-accent) py-10 my-0 flex gap-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-asterisk-icon lucide-asterisk"
          ><path d="M12 6v12" /><path d="M17.196 9 6.804 15" /><path
              d="m6.804 9 10.392 6"
            /></svg>
          Gmünder mit kamerunischen Wurzeln, Jahrgang 1974
        </li>
        <li className="border-b border-(--light-accent) py-10 my-0 flex gap-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-blend-icon lucide-blend"
          ><circle cx="9" cy="9" r="7" /><circle cx="15" cy="15" r="7" /></svg>
          Verheiratet, stolzer Vater von drei Kindern
        </li>
        <li className="border-b border-(--light-accent) py-10 my-0 flex gap-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-house-icon lucide-house"
          ><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path
              d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            /></svg>
          Wohnhaft in Lindach
        </li>
        <li className="py-10 my-0 grid grid-cols-[auto_1fr] gap-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-school-icon lucide-school"
          ><path d="M14 21v-3a2 2 0 0 0-4 0v3" /><path d="M18 5v16" /><path
              d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"
            /><path
              d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"
            /><path d="M6 5v16" /><circle cx="12" cy="9" r="2" /></svg>
          Promovierter Sozialwissenschaftler und Referent im höheren Dienst beim
          Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung
        </li>
      </ul>
    </div>
  )
}

