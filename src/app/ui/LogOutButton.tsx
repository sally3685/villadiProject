'use client';

import { LogOut } from '../actions/auth';

export default function LogOutButton() {
  return (
    <button
      onClick={LogOut}
      className="p-2 rounded bg-pink-300 cursor-pointer text-xl mt-12"
    >
      Log out
    </button>
  );
}
