"use client"; // Error boundaries must be Client Components

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();
  useEffect(() => {}, [error]);

  return (
    <div className="relative h-[46vh] w-full flex justify-center items-center flex-col">
      <h2 className="font-bold text-2xl">Something went wrong!</h2>
      <button
        className="font-bold text-2xl"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => {
            router.refresh();
          }
        }
      >
        Try again
      </button>
    </div>
  );
}
