import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Publication() {
  return (
    <div className="mx-8 bg-linear-to-l from-(--light-accent)/20 to-(--light-accent)/40 my-10 bg-(--light-accent) shadow-lg rounded-2xl p-8">
      <div className="bg-linear-to-r from-(--ultralight-accent)/20 to-(--ultralight-accent)/40 flex rounded-lg relative">
        {/* Publication Date in top right */}
        <Image
          src="https://classics.37signals.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTc2LCJwdXIiOiJibG9iX2lkIn19--4542572f8321fd2bb21ef8670e74f3a9fd2eb030/cover.jpg"
          alt="Publication Cover"
          width={200}
          height={300}
          className="rounded-l-lg object-cover w-48 lg:w-64"
        />

        <div className="flex flex-col justify-between p-8 pt-12">
          <div className="space-y-6">
            <div className="flex">
              <div className="text-4xl font-serif">Title of the book</div>
              <div className="ml-auto pr-4 self-end font-serif">Dezember 2025</div>
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              Description lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Description lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Description lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Description lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
          </div>

          {/* Purchase Button */}
          <Link
            href="https://example.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 w-fit mt-6 px-6 py-3 rounded-full border-2 border-(--accent) text-(--accent) hover:bg-(--accent) hover:text-white transition-all duration-300"
          >
            <span className="font-medium">Purchase Book</span>
            <ExternalLink
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
