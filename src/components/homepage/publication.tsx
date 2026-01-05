import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Publication() {
  return (
    <div className="mx-4 md:mx-8 bg-linear-to-l from-(--light-accent)/20 to-(--light-accent)/40 my-10 bg-(--light-accent) shadow-lg rounded-2xl p-4 md:p-8">
      <div className="bg-linear-to-r from-(--ultralight-accent)/20 to-(--ultralight-accent)/40 flex flex-col md:flex-row rounded-lg relative">
        <Image
          src="https://classics.37signals.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTc2LCJwdXIiOiJibG9iX2lkIn19--4542572f8321fd2bb21ef8670e74f3a9fd2eb030/cover.jpg"
          alt="Publication Cover"
          width={200}
          height={300}
          className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none object-cover w-full md:w-48 lg:w-64 h-64 md:h-auto"
        />

        <div className="flex flex-col justify-between p-4 md:p-8 md:pt-12">
          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <div className="text-2xl md:text-3xl lg:text-4xl font-serif">
                Title of the book
              </div>
              <div className="sm:ml-auto sm:pr-4 sm:self-end font-serif text-sm md:text-base text-gray-600 dark:text-gray-400">
                Dezember 2025
              </div>
            </div>
            <div className="text-sm md:text-base text-gray-700 dark:text-gray-300 line-clamp-6 md:line-clamp-none">
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
            className="group flex items-center justify-center md:justify-start gap-2 w-full md:w-fit mt-4 md:mt-6 px-4 md:px-6 py-2.5 md:py-3 rounded-full border-2 border-(--accent) text-(--accent) hover:bg-(--accent) hover:text-white transition-all duration-300 text-sm md:text-base"
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
