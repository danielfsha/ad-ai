import Link from "next/link";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center space-y-4">
      <p class="mt-8 text-4xl font-semibold tracking-tighter lg:text-6xl">
        We help you build
        <span class="py-2 md:block md:text-transparent md:bg-clip-text md:bg-gradient-to-r from-[#FF5733] to-[#ff7354]">
          {" "}
          A reputable brand identity
        </span>
      </p>
      <p class="max-w-sm mt-4 text-base text-gray-300">
        Available for Chrome and Chromium-based browsers (like Edge, Brave and
        Arc). superscan requires an active license.
      </p>
      <div className="flex items-center justify-center space-x-2 mt-6">
        <Link href="/create">
          <Button>Get Started</Button>
        </Link>
        <Button variant="outline">Learn More</Button>
      </div>
    </div>
  );
}
