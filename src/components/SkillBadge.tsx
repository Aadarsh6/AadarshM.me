interface SkillBadgeProps {
  label: string;
}

function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="px-4 py-2 rounded-full border border-black/10 dark:border-white/15 text-sm font-medium bg-white dark:bg-white/[0.03] shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_-4px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:border-accent hover:text-accent hover:shadow-[0_4px_16px_-4px_rgba(255,90,31,0.25)] hover:-translate-y-0.5 cursor-default">
      {label}
    </span>
  );
}

export default SkillBadge;