import React from "react";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black/50 rounded-2xl fixed w-[100%] h-[100%] top-0 z-[3] flex justify-center items-center">
      {children}
    </div>
  );
}
