'use client';

import { LogOut } from '../actions/auth';

export default function LogOutButton({ t }: { t: any }) {
  return (
    <button
      onClick={LogOut}
      className="p-2 rounded bg-pink-300 cursor-pointer text-xl mt-12"
    >
      {t.Logout.title}
    </button>
  );
}
