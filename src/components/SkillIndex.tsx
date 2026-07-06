    import { useState, useMemo, useRef, createElement } from "react";
    import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
    import {
    SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs,
    SiNodedotjs, SiGit, SiGithub, SiFigma, SiRedux, SiGraphql,
    SiMongodb, SiPostgresql, SiDocker, SiVite, SiHtml5, SiCss,
    SiSass, SiExpress, SiFirebase, SiVercel,
    } from "react-icons/si";
    import type { IconType } from "react-icons";

    interface SkillGroup {
    category: string;
    items: string[];
    }

    interface SkillIndexProps {
    groups: SkillGroup[];
    }

    // Optional brand-icon lookup. Anything not listed here just falls back to
    // a monogram — icons are a bonus, never required, per your instruction.
    const ICON_MAP: Record<string, IconType> = {
    react: SiReact,
    typescript: SiTypescript,
    javascript: SiJavascript,
    tailwindcss: SiTailwindcss,
    nextjs: SiNextdotjs,
    nodejs: SiNodedotjs,
    git: SiGit,
    github: SiGithub,
    figma: SiFigma,
    redux: SiRedux,
    graphql: SiGraphql,
    mongodb: SiMongodb,
    postgresql: SiPostgresql,
    docker: SiDocker,
    vite: SiVite,
    html5: SiHtml5,
    css3: SiCss,
    sass: SiSass,
    express: SiExpress,
    firebase: SiFirebase,
    vercel: SiVercel,
    };

    function normalize(label: string) {
    return label.toLowerCase().replace(/[^a-z0-9]/g, "");
    }

    function getIcon(label: string): IconType | null {
    return ICON_MAP[normalize(label)] ?? null;
    }

    function SkillIndex({ groups }: SkillIndexProps) {
    const flat = useMemo(
        () =>
        groups.flatMap((g) =>
            g.items.map((item) => ({ name: item, category: g.category }))
        ),
        [groups]
    );

    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const filtered = useMemo(
        () => (activeCategory ? flat.filter((s) => s.category === activeCategory) : flat),
        [flat, activeCategory]
    );

    const active = filtered[Math.min(activeIndex, filtered.length - 1)] ?? flat[0];
    const ActiveIcon = active ? getIcon(active.name) : null;

    // Subtle 3D tilt on the display panel, following the cursor — a small
    // "premium" detail rather than a static box.
    const panelRef = useRef<HTMLDivElement>(null);
    const tiltX = useMotionValue(0);
    const tiltY = useMotionValue(0);
    const springX = useSpring(tiltX, { stiffness: 150, damping: 20 });
    const springY = useSpring(tiltY, { stiffness: 150, damping: 20 });
    const rotateX = useTransform(springY, [-40, 40], [6, -6]);
    const rotateY = useTransform(springX, [-40, 40], [-6, 6]);

    const handlePanelMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = panelRef.current?.getBoundingClientRect();
        if (!rect) return;
        tiltX.set(e.clientX - rect.left - rect.width / 2);
        tiltY.set(e.clientY - rect.top - rect.height / 2);
    };

    const handlePanelLeave = () => {
        tiltX.set(0);
        tiltY.set(0);
    };

    const categories = groups.map((g) => g.category);

    const selectByFilter = (cat: string | null) => {
        setActiveCategory(cat);
        setActiveIndex(0);
    };

    return (
        <div>
        {/* Category filter chips — shared sliding underline, not separate
            styled buttons competing for attention */}
        <div className="mb-10 flex flex-wrap gap-x-6 gap-y-3 border-b border-black/10 pb-4 dark:border-white/10">
            <FilterChip
            label="All"
            active={activeCategory === null}
            onClick={() => selectByFilter(null)}
            />
            {categories.map((cat) => (
            <FilterChip
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => selectByFilter(cat)}
            />
            ))}
        </div>

        <div className="grid gap-10 md:grid-cols-[340px_1fr] md:gap-16">
            {/* Left: live display panel */}
            <div className="md:sticky md:top-28 md:self-start">
            <motion.div
                ref={panelRef}
                onMouseMove={handlePanelMove}
                onMouseLeave={handlePanelLeave}
                style={{ rotateX, rotateY, transformPerspective: 800 }}
                className="relative flex h-64 flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02] p-7 dark:border-white/10 dark:bg-white/[0.03]"
            >
                {/* Ambient glow tied to your ink-blue identity, not decoration
                    borrowed from elsewhere */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />

                <div className="relative flex items-center justify-between text-xs uppercase tracking-[0.2em] text-text-light/40 dark:text-text-dark/40">
                <span>Index</span>
                <span className="font-mono">
                    {String((filtered.findIndex((s) => s.name === active?.name)) + 1).padStart(2, "0")}
                    {" / "}
                    {String(filtered.length).padStart(2, "0")}
                </span>
                </div>

                <AnimatePresence mode="wait">
                <motion.div
                    key={active?.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex items-end gap-4"
                >
                    {ActiveIcon &&
    createElement(ActiveIcon, {
        className: "mb-1 h-8 w-8 shrink-0 text-secondary",
    })}
                    <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-secondary">
                        {active?.category}
                    </p>
                    <p className="font-display text-3xl font-bold leading-tight text-text-light dark:text-text-dark">
                        {active?.name}
                    </p>
                    </div>
                </motion.div>
                </AnimatePresence>
            </motion.div>
            </div>

            {/* Right: the index list */}
            <div
            className="flex flex-col"
            onMouseLeave={() => {
                /* keep last hovered item active on mouse leave, so panel
                doesn't flicker back to item 0 as the cursor exits */
            }}
            >
            {filtered.map((skill, i) => {
                const isActive = skill.name === active?.name;
                const Icon = getIcon(skill.name);
                return (
                <button
                    key={`${skill.category}-${skill.name}`}
                    onMouseEnter={() => setActiveIndex(i)}
                    onFocus={() => setActiveIndex(i)}
                    onClick={() => setActiveIndex(i)}
                    className="group relative flex w-full items-center justify-between border-b border-black/10 py-4 text-left last:border-0 dark:border-white/10"
                >
                    {isActive && (
                    <motion.div
                        layoutId="skill-row-highlight"
                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                        className="absolute inset-0 -mx-4 rounded-xl bg-secondary/[0.06]"
                    />
                    )}

                    <span className="relative flex items-center gap-4">
                    <span className="w-6 shrink-0 font-mono text-xs text-text-light/30 dark:text-text-dark/30">
                        {String(i + 1).padStart(2, "0")}
                    </span>
                    {Icon ? (
    createElement(Icon, {
        className: `h-4 w-4 shrink-0 transition-colors duration-200 ${
        isActive
            ? "text-secondary"
            : "text-text-light/30 dark:text-text-dark/30"
        }`,
    })
    ) : (
                        <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold transition-colors duration-200 ${
                            isActive
                            ? "bg-secondary/15 text-secondary"
                            : "bg-black/5 text-text-light/40 dark:bg-white/5 dark:text-text-dark/40"
                        }`}
                        >
                        {skill.name.charAt(0)}
                        </span>
                    )}
                    <span
                        className={`font-display text-lg transition-colors duration-200 md:text-xl ${
                        isActive
                            ? "text-secondary"
                            : "text-text-light/70 dark:text-text-dark/70"
                        }`}
                    >
                        {skill.name}
                    </span>
                    </span>

                    {!activeCategory && (
                    <span className="relative hidden font-mono text-xs uppercase tracking-wide text-text-light/30 dark:text-text-dark/30 md:block">
                        {skill.category}
                    </span>
                    )}
                </button>
                );
            })}
            </div>
        </div>
        </div>
    );
    }

    function FilterChip({
    label,
    active,
    onClick,
    }: {
    label: string;
    active: boolean;
    onClick: () => void;
    }) {
    return (
        <button
        onClick={onClick}
        className={`relative pb-2 text-sm font-medium transition-colors duration-200 ${
            active
            ? "text-secondary"
            : "text-text-light/50 hover:text-text-light/80 dark:text-text-dark/50 dark:hover:text-text-dark/80"
        }`}
        >
        {label}
        {active && (
            <motion.div
            layoutId="filter-underline"
            transition={{ type: "spring", stiffness: 500, damping: 40 }}
            className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-secondary"
            />
        )}
        </button>
    );
    }

    export default SkillIndex;