import { useEffect } from "react";

const contactEmail = "arijit@virtualinfocom.net";

export default function ContactRedirect() {
  useEffect(() => {
    window.location.href = `mailto:${contactEmail}?subject=Website%20Inquiry%20for%20Arijit%20Bhattacharyya`;
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#03070d] px-5 text-center text-white">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
          Contact Arijit
        </p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] sm:text-5xl">
          Opening your email app…
        </h1>
        <p className="mt-4 text-sm font-normal leading-7 text-slate-300">
          If it does not open automatically, email{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="font-bold text-blue-200 underline underline-offset-4"
          >
            {contactEmail}
          </a>
          .
        </p>
      </div>
    </main>
  );
}