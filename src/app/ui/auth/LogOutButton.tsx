"use client";

import { LogOut } from "../../actions/auth";

export default function LogOutButton({ t }: { t: any }) {
  return (
    <button
      onClick={LogOut}
      className="mt-12 cursor-pointer rounded bg-pink-300 p-2 text-xl"
    >
      {t.Logout.title}
    </button>
  );
}
