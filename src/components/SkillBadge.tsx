interface SkillBadgeProps {
  label: string;
}

function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="px-4 py-2 rounded-full border border-black/10 dark:border-white/15 text-sm font-medium bg-black/[0.02] dark:bg-white/[0.03] hover:border-accent hover:text-accent transition-colors cursor-default">
      {label}
    </span>
  );
}

export default SkillBadge;