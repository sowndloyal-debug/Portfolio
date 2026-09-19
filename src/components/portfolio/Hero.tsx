import { motion } from "motion/react";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-44">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="mesh-blob"
          style={{
            width: 520,
            height: 520,
            top: -140,
            left: -80,
            background: "var(--amber-accent)",
            opacity: 0.22,
          }}
        />
        <div
          className="mesh-blob"
          style={{
            width: 460,
            height: 460,
            top: 60,
            right: -120,
            background: "var(--plum)",
            opacity: 0.35,
            animationDelay: "-6s",
          }}
        />
        <div
          className="mesh-blob"
          style={{
            width: 340,
            height: 340,
            bottom: -160,
            left: "42%",
            background: "var(--amber-accent)",
            opacity: 0.12,
            animationDelay: "-11s",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            {...stagger(0)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs text-muted-foreground"
          >
            <Sparkles className="size-3.5 text-primary" />
            Open to Business Analyst roles
          </motion.div>

          <motion.h1 {...stagger(1)} className="mt-6 text-4xl font-semibold sm:text-6xl">
           Sowndharya panneerselvam

            <span className="mt-3 block text-2xl font-medium text-muted-foreground sm:text-3xl">
              Business Analyst/Markting <span className="text-gradient">| Data-Driven Problem Solver</span>
            </span>
          </motion.h1>

          <motion.p {...stagger(2)} className="mt-6 max-w-xl text-muted-foreground">
            I translate messy operational questions into clear, decision-ready answers — mapping
            processes, interrogating data in SQL and Excel, and shipping Power BI dashboards
            stakeholders actually use.
          </motion.p>

          <motion.div {...stagger(3)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:scale-[1.04]"
            >
              View Projects
              <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
            <a
              href="public/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.04] hover:border-primary hover:text-primary"
            >
              <Download className="size-4" />
              view Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            aria-hidden
            className="absolute inset-6 rounded-[2.5rem] blur-2xl"
            style={{ background: "var(--gradient-accent)", opacity: 0.55 }}
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-card p-2 shadow-[var(--shadow-elevated)]">
            <img
              src={portrait}
              alt="Portrait of Aarya Menon, business analyst"
              width={816}
              height={816}
              className="h-full w-full rounded-[1.6rem] object-cover"
            />
          </div>
          <div className="surface-card absolute -bottom-6 -left-4 px-4 py-3 text-xs sm:-left-8">
            <p className="font-display text-lg font-semibold text-primary">3</p>
            <p className="text-muted-foreground">analytics case studies</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
