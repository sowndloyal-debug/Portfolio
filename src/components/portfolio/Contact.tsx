import { useState } from "react";
import { motion } from "motion/react";
import { Linkedin, Mail, Send } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { toast } from "sonner";

const field =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30";

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="section-light py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Have an operational question worth digging into?"
            intro="I'm actively looking for Business Analyst roles and always happy to talk data, process, or dashboards."
          />
          <Reveal delay={0.1} className="mt-8 space-y-3">
            <a
              href="mailto:aarya.menon.ba@gmail.com"
              className="surface-card flex items-center gap-3 px-5 py-4 text-sm transition-transform duration-200 hover:-translate-y-1"
            >
              <Mail className="size-4 text-primary" />
              sowndloyal@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/sowndharya-panneerselvam-5aa602427"
              target="_blank"
              rel="noreferrer"
              className="surface-card flex items-center gap-3 px-5 py-4 text-sm transition-transform duration-200 hover:-translate-y-1"
            >
              <Linkedin className="size-4" style={{ color: "var(--plum)" }} />
              linkedin.com/in/sowndharya-panneerselvam
            </a>
          </Reveal>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={(e) => {
            e.preventDefault();
            setSending(true);
            setTimeout(() => {
              setSending(false);
              toast.success("Thanks — your message is on its way.");
              (e.target as HTMLFormElement).reset();
            }, 700);
          }}
          action="https://formspree.io/f/your-form-id"
          className="surface-card space-y-4 p-7 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest">
                Name
              </label>
              <input id="name" name="name" required placeholder="Your name" className={`${field} mt-2`} />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className={`${field} mt-2`}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="What are you trying to figure out?"
              className={`${field} mt-2 resize-none`}
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:scale-[1.04] disabled:opacity-70"
          >
            {sending ? "Sending…" : "Send message"}
            <Send className="size-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
