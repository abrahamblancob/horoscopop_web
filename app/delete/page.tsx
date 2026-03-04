"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function DeleteAccount() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-deep-void px-6 py-24">
      <div className="mx-auto max-w-xl">
        <a
          href="/"
          className="mb-8 inline-block font-[family-name:var(--font-body)] text-sm text-stardust/50 transition-colors hover:text-white"
        >
          &larr; Back to Home
        </a>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-white">
          Delete Account
        </h1>
        <p className="mt-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-stardust/70">
          We&apos;re sorry to see you go. Submitting this form will request the permanent
          deletion of your HoróscoPoP account and all associated data, including your
          birth chart, horoscope history, and profile information. This action cannot be
          undone.
        </p>

        {submitted ? (
          <div
            className="mt-10 rounded-2xl border border-green-500/30 p-8 text-center"
            style={{ background: "rgba(6, 214, 160, 0.08)" }}
          >
            <div className="text-4xl">&#10003;</div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold text-white">
              Request Received
            </h2>
            <p className="mt-3 font-[family-name:var(--font-body)] text-sm text-stardust/70">
              Your account deletion request has been submitted. We will process it
              within 30 days and send a confirmation to your email address.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-[family-name:var(--font-body)] text-sm font-semibold text-white"
              >
                Email address associated with your account
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-xl border border-stardust/20 bg-white/5 px-4 py-3 font-[family-name:var(--font-body)] text-sm text-white placeholder-stardust/40 outline-none transition-colors focus:border-[#7B2FFF]"
              />
            </div>

            <div>
              <label
                htmlFor="reason"
                className="mb-2 block font-[family-name:var(--font-body)] text-sm font-semibold text-white"
              >
                Reason for deletion{" "}
                <span className="font-normal text-stardust/50">(optional)</span>
              </label>
              <select
                id="reason"
                name="reason"
                className="w-full rounded-xl border border-stardust/20 bg-white/5 px-4 py-3 font-[family-name:var(--font-body)] text-sm text-white outline-none transition-colors focus:border-[#7B2FFF]"
              >
                <option value="" className="bg-[#0A0A12]">Select a reason</option>
                <option value="no-longer-use" className="bg-[#0A0A12]">I no longer use the app</option>
                <option value="privacy" className="bg-[#0A0A12]">Privacy concerns</option>
                <option value="not-useful" className="bg-[#0A0A12]">The app is not useful to me</option>
                <option value="too-many-notifications" className="bg-[#0A0A12]">Too many notifications</option>
                <option value="other" className="bg-[#0A0A12]">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="comments"
                className="mb-2 block font-[family-name:var(--font-body)] text-sm font-semibold text-white"
              >
                Additional comments{" "}
                <span className="font-normal text-stardust/50">(optional)</span>
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={3}
                placeholder="Tell us how we can improve..."
                className="w-full resize-none rounded-xl border border-stardust/20 bg-white/5 px-4 py-3 font-[family-name:var(--font-body)] text-sm text-white placeholder-stardust/40 outline-none transition-colors focus:border-[#7B2FFF]"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="confirm"
                name="confirm"
                required
                className="mt-1 h-4 w-4 rounded border-stardust/30 accent-[#7B2FFF]"
              />
              <label
                htmlFor="confirm"
                className="font-[family-name:var(--font-body)] text-sm text-stardust/70"
              >
                I understand that this action is permanent and all my data, including
                my birth chart, horoscope history, and profile, will be permanently
                deleted.
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-full py-4 font-[family-name:var(--font-body)] text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
              }}
            >
              Request Account Deletion
            </button>

            <p className="text-center font-[family-name:var(--font-body)] text-xs text-stardust/40">
              Your request will be processed within 30 days in accordance with our{" "}
              <a
                href="/privacy"
                className="text-stardust/60 underline transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
