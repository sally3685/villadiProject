import React from "react";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed top-0 z-[3] flex h-[100%] w-[100%] items-center justify-center bg-black/50 p-[8rem_0_1rem_0]">
      {children}
    </div>
  );
}
