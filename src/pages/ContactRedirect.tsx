import { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Handshake,
  Mic2,
  Rocket,
  Send,
} from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  website: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
  website: "",
};

const API_URL =
  import.meta.env.VITE_CONTACT_API_URL || "http://localhost:5000/api/contact";

const collaborationAreas = [
  {
    title: "Speaking, Leadership & Institutions",
    text: "For conferences, universities, government platforms, leadership forums and media conversations.",
    icon: Mic2,
  },
  {
    title: "Technology, Startups & Partnerships",
    text: "For AI, gaming, VR, investment ecosystems, founder mentoring, advisory and strategic collaborations.",
    icon: Rocket,
  },
];

const audienceGroups = [
  {
    label: "Organizations",
    text: "Keynotes, panels and curated leadership conversations.",
    icon: Globe2,
  },
  {
    label: "Founders & Investors",
    text: "Startup mentoring, investment networks and ecosystem initiatives.",
    icon: Handshake,
  },
];

const credibilityStats = [
  {
    value: "29+",
    label: "Years",
    text: "Technology, startups and innovation work.",
  },
  {
    value: "102+",
    label: "Countries",
    text: "Global business, government and academia networks.",
  },
  {
    value: "7000+",
    label: "Startups",
    text: "Founders and ventures mentored or supported.",
  },
];

export default function ContactRedirect() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  function updateField(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function validateForm() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Please enter a valid email address.";
    }
    if (!form.phone.trim()) return "Please enter your phone number.";
    if (!form.subject.trim()) return "Please enter a subject.";
    if (form.message.trim().length < 10) {
      return "Please write a message of at least 10 characters.";
    }
    return "";
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const error = validateForm();

    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send enquiry.");
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message:
          "Thank you. Your enquiry has been received successfully. The team will respond with the appropriate next steps.",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#03070d] text-white">
      <section className="relative min-h-screen px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_8%,rgba(59,130,246,0.24),transparent_34%),radial-gradient(circle_at_15%_4%,rgba(96,165,250,0.12),transparent_30%),linear-gradient(180deg,#071225_0%,#03070d_48%,#02050a_100%)]" />
        <div className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full bg-blue-500/14 blur-[150px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cyan-400/8 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <aside className="pt-2">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-blue-300">
              Begin The Conversation
            </p>

            <h1 className="mt-5 max-w-[12ch] text-4xl font-extrabold leading-[0.96] tracking-[-0.05em] text-white sm:text-5xl xl:text-6xl">
              Let&apos;s create meaningful global impact.
            </h1>

            <p className="mt-6 max-w-2xl text-base font-normal leading-8 text-slate-300 sm:text-lg">
              Every meaningful opportunity begins with a conversation. Whether
              you&apos;re inviting Arijit Bhattacharyya to speak, exploring
              innovation, building partnerships or shaping the future of
              technology, this is the best place to begin.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {collaborationAreas.map(({ title, text, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 transition hover:border-blue-300/35 hover:bg-blue-400/[0.08]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-200 ring-1 ring-blue-300/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-base font-bold leading-6 text-white">
                    {title}
                  </h2>
                  <p className="mt-3 text-sm font-normal leading-7 text-slate-400">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {audienceGroups.map(({ label, text, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-[1.5rem] border border-blue-300/10 bg-blue-950/15 p-5"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-400/10 text-blue-200">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{label}</h3>
                  <p className="mt-2 text-sm font-normal leading-6 text-slate-400">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[1.75rem] border border-blue-300/15 bg-blue-950/20 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
                Prefer email?
              </p>
              <a
                href="mailto:arijit@virtualinfocom.net"
                className="mt-3 inline-flex items-center gap-2 text-base font-bold text-white underline decoration-blue-300/50 underline-offset-4"
              >
                arijit@virtualinfocom.net
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-3 text-sm font-normal leading-6 text-slate-400">
                For speaking invitations, media interviews, strategic
                partnerships and innovation initiatives.
              </p>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2.5rem] border border-blue-200/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.035))] p-5 shadow-[0_40px_120px_rgba(29,78,216,0.2)] backdrop-blur-xl sm:p-8"
          >
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-200">
                Collaboration Enquiry
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-white sm:text-3xl">
                Share your opportunity.
              </h2>
              <p className="mt-3 text-sm font-normal leading-7 text-slate-400">
                Add the event date, organization, location, expected audience,
                partnership context or media requirement where relevant.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {credibilityStats.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold tracking-[-0.04em] text-white">
                        {stat.value}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                        {stat.label}
                      </span>
                    </div>
                    <p className="mt-2 text-xs font-normal leading-5 text-slate-500">
                      {stat.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                  Name *
                </span>
                <input
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  autoComplete="name"
                  className="mt-2 h-14 w-full rounded-2xl border border-white/10 bg-black/35 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                  Email *
                </span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  autoComplete="email"
                  className="mt-2 h-14 w-full rounded-2xl border border-white/10 bg-black/35 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                  Phone *
                </span>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={updateField}
                  autoComplete="tel"
                  className="mt-2 h-14 w-full rounded-2xl border border-white/10 bg-black/35 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300"
                  placeholder="+91..."
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                  Company
                </span>
                <input
                  name="company"
                  value={form.company}
                  onChange={updateField}
                  autoComplete="organization"
                  className="mt-2 h-14 w-full rounded-2xl border border-white/10 bg-black/35 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300"
                  placeholder="Company / Institution"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                Subject *
              </span>
              <input
                name="subject"
                value={form.subject}
                onChange={updateField}
                className="mt-2 h-14 w-full rounded-2xl border border-white/10 bg-black/35 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300"
                placeholder="Speaking invitation, advisory, media request..."
              />
            </label>

            <label className="mt-5 block">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                Message *
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={updateField}
                rows={5}
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/35 px-4 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300"
                placeholder="Share the purpose, event/context, date, audience, location and expected next step."
              />
            </label>

            <input
              name="website"
              value={form.website}
              onChange={updateField}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {status.message && (
              <div
                className={`mt-5 flex gap-3 rounded-2xl border p-4 text-sm font-normal leading-6 ${
                  status.type === "success"
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
                    : "border-red-400/30 bg-red-400/10 text-red-100"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" />
                ) : (
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-none" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-500 px-6 py-5 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-2xl shadow-blue-700/30 transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Start The Conversation"}
              <Send className="h-4 w-4" />
            </button>

            <p className="mt-4 text-center text-xs font-normal leading-6 text-slate-500">
              Your enquiry is reviewed confidentially and used only to respond
              with the appropriate next step.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}