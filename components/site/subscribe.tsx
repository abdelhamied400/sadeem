"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";

export function Subscribe() {
  const [email, setEmail] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No backend is wired up yet — this mirrors the original behaviour, which
    // only ever showed a confirmation toast.
    toast("Thanks for contacting us, we'll get in touch soon");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="relative h-[60px] sm:h-[70px]">
      <label htmlFor="subscribe-email" className="sr-only">
        Email address
      </label>
      <Input
        id="subscribe-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Email address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="h-full rounded-[35px] border-none pr-[122px] pl-5 sm:pr-[180px] sm:pl-10"
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 w-[120px] rounded-r-[35px] bg-aqua font-medium text-white transition-colors duration-300 hover:bg-heading focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-heading sm:w-[180px]"
      >
        Try for free
      </button>
    </form>
  );
}
