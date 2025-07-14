"use client"; // Error boundaries must be Client Components

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { RefreshCwIcon } from "lucide-react";
export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();
  useEffect(() => {}, [error]);

  return (
    <main className="before:content-['']flex relative top-[20%] z-[0] flex h-[80vh] w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl bg-[#d9d9d9] p-6 pt-[20vh] text-black before:absolute before:top-0 before:block before:h-full before:w-full before:bg-white/20 before:mask-[url(/pattern2.svg)] before:mask-cover before:mask-center">
      <h1 className="text-2xl font-bold">{error.message}</h1>
      <RefreshCwIcon
        className="text-2xl font-bold"
        onClick={() => {
          router.refresh();
        }}
      ></RefreshCwIcon>
    </main>
  );
}
