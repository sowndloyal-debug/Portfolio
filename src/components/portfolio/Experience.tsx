import { motion } from "motion/react";
import { SectionHeading } from "@/components/Reveal";

const roles = [
  {
    company: "Sutherland Global Services",
    role: "Customer Support Associate",
    period: "2022 — 2024",
    points: [
      "Handled high-volume customer issues end to end, diagnosing root causes rather than closing tickets.",
      "Spotted recurring failure patterns and escalated them as process problems, not one-off complaints.",
      "Learned to explain complex resolutions simply — the core skill of presenting analysis to non-technical stakeholders.",
    ],
    skills: ["Root-cause analysis", "Client handling", "Problem-solving"],
  },{
    company: "Wipro",
    role: "Content Coordinator — iHeartMedia account",
    period: "2024 — 2026",
    points: [
      "Coordinated content delivery pipelines for a global media client, tracking status across teams and flagging blockers before deadlines slipped.",
      "Built and maintained trackers that became the single source of truth for delivery status — early practice in defining metrics people trust.",
      "Translated client requirements into clear internal briefs, the same muscle used for requirement documentation.",
    ],
    skills: ["Stakeholder communication", "Process discipline", "Reporting"],
  }
  
];

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where the transferable skills came from."
        />

        <div className="relative mt-14 pl-8 sm:pl-12">
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute bottom-0 left-2 top-2 w-px origin-top sm:left-3"
            style={{ background: "var(--gradient-accent)" }}
          />
          <div className="space-y-12">
            {roles.map((r, i) => (
              <motion.div
                key={r.company}
                initial={{ opacity: 0, x: 26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <span
                  className="absolute -left-[1.65rem] top-2 size-3 rounded-full ring-4 ring-background sm:-left-[2.4rem]"
                  style={{ background: "var(--amber-accent)" }}
                />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                  {r.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{r.company}</h3>
                <p className="text-sm text-muted-foreground">{r.role}</p>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  {r.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {r.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
