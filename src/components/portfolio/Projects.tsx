import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpDown, ArrowUpRight, Lightbulb, Route, Target } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";

type Project = {
  name: string;
  tool: string;
  problem: string;
  approach: string;
  outcome: string;
  tags: string[];
  link: string;
  records: number;
  dashboards: number;
};

const projects: Project[] = [
  {
    name: "Zomato Order & Restaurant Analysis",
    tool: "Power BI",
    problem:
      "Which cuisines, cities and price bands actually drive order volume — and where is rating quality slipping?",
    approach:
      "Cleaned and modelled the restaurant dataset, built star-schema relationships, and designed a 3-page Power BI report with drill-through by city and cuisine.",
    outcome:
      "Mid-priced casual dining drove 61% of orders while carrying the weakest rating spread — flagged as the highest-leverage quality intervention.",
    tags: ["Power BI", "DAX", "Data modelling", "Excel"],
    link: "https://github.com/sowndloyal-debug/Zomato-Order-Restaurant-Analysis-Using-Power-BI.git",
    records: 9550,
    dashboards: 3,
  },
  {
    name: "Amazon Fresh Database & SQL Analysis",
    tool: "SQL",
    problem:
      "Grocery ops needed answers on repeat purchase behaviour and category margin without waiting on a BI queue.",
    approach:
      "Designed a normalised schema for orders, customers and products, then wrote CTE and window-function queries for cohort retention and basket analysis.",
    outcome:
      "Top 3 categories carried 48% of revenue but only 22% of repeat orders — reframing the retention conversation around replenishables.",
    tags: ["SQL", "Schema design", "Window functions", "Cohorts"],
    link: "https://github.com/sowndloyal-debug/AmazonFreshAnalytics.git",
    records: 24000,
    dashboards: 0,
  },
  {
    name: "Flipkart Customer Segmentation",
    tool: "Power BI",
    problem:
      "Marketing was treating a single customer base as one audience, diluting spend across very different buyers.",
    approach:
      "Scored every customer on Recency, Frequency and Monetary value, bucketed into segments, and visualised movement between them in Power BI.",
    outcome:
      "Identified an 'at-risk high value' segment worth 18% of revenue — a targeted win-back list instead of a blanket campaign.",
    tags: ["RFM Analysis", "Power BI", "Segmentation", "Excel"],
    link: "https://github.com/sowndloyal-debug/Flipkart_Segmentation_Analytics.git",
    records: 12500,
    dashboards: 2,
  },
];

const blocks = [
  { key: "problem", label: "Business problem", icon: Target },
  { key: "approach", label: "Approach", icon: Route },
  { key: "outcome", label: "Key insight", icon: Lightbulb },
] as const;

type SortKey = "name" | "tool" | "records" | "dashboards";

export function Projects() {
  const [sort, setSort] = useState<{ key: SortKey; dir: 1 | -1 }>({ key: "records", dir: -1 });

  const rows = useMemo(() => {
    return [...projects].sort((a, b) => {
      const av = a[sort.key];
      const bv = b[sort.key];
      if (typeof av === "number" && typeof bv === "number") return (av - bv) * sort.dir;
      return String(av).localeCompare(String(bv)) * sort.dir;
    });
  }, [sort]);

  const toggle = (key: SortKey) =>
    setSort((s) => ({ key, dir: s.key === key && s.dir === -1 ? 1 : -1 }));

  return (
    <section id="projects" className="section-light py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Case studies, not code dumps."
          intro="Each project starts with a business question and ends with a decision someone can make."
        />

        <div className="mt-14 space-y-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="surface-card group relative overflow-hidden p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-glow)] sm:p-9"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-40"
                style={{ background: "var(--gradient-accent)" }}
              />
              <div className="relative grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                <div className="min-w-0">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    0{i + 1} · {p.tool}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold">{p.name}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.link}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary link-underline"
                  >
                    View GitHub
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>

                <div className="space-y-5">
                  {blocks.map((b) => (
                    <div key={b.key} className="flex gap-3">
                      <span
                        className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg"
                        style={{
                          background: "color-mix(in oklab, var(--plum) 16%, transparent)",
                        }}
                      >
                        <b.icon className="size-4" style={{ color: "var(--plum)" }} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          {b.label}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed">{p[b.key]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <div className="surface-card overflow-hidden">
            <div className="border-b border-border px-6 py-4">
              <h3 className="text-sm font-semibold">Project metrics at a glance</h3>
              <p className="text-xs text-muted-foreground">Click a column header to sort.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="text-xs uppercase tracking-widest text-muted-foreground">
                  <tr>
                    {(
                      [
                        ["name", "Project"],
                        ["tool", "Primary tool"],
                        ["records", "Records analysed"],
                        ["dashboards", "Dashboards"],
                      ] as [SortKey, string][]
                    ).map(([key, label]) => (
                      <th key={key} className="px-6 py-3 font-semibold">
                        <button
                          onClick={() => toggle(key)}
                          className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                        >
                          {label}
                          <ArrowUpDown className="size-3" />
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.name} className="border-t border-border/70">
                      <td className="px-6 py-3.5 font-medium">{r.name}</td>
                      <td className="px-6 py-3.5 text-muted-foreground">{r.tool}</td>
                      <td className="px-6 py-3.5 text-muted-foreground">
                        {r.records.toLocaleString()}
                      </td>
                      <td className="px-6 py-3.5 text-muted-foreground">{r.dashboards}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
