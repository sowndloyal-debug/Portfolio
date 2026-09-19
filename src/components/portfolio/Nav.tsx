import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-colors duration-300 sm:px-6 ${
          scrolled
            ? "border border-white/10 bg-ink/80 backdrop-blur-md shadow-[0_18px_40px_-28px_rgba(0,0,0,0.9)]"
            : "border border-transparent"
        }`}
      >
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-foreground"
        >
          Sowndharya panneerselvam
        <span className="text-primary">.</span>
        </a>
        <ul className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="link-underline transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105"
        >
          Let's talk
        </a>
      </nav>
    </motion.header>
  );
}
