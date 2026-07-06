import { Mail } from "lucide-react";
import type { Social } from "../Data/Socials";

const iconMap: Record<string, React.ElementType> = {
  github: Mail,
  linkedin: Mail,
  mail: Mail,
  twitter: Mail,
};

interface SocialLinkProps {
  social: Social;
}

function SocialLink({ social }: SocialLinkProps) {
  const Icon = iconMap[social.icon] ?? Mail;

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="rounded-full border border-black/10 bg-bg-light p-3 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-secondary hover:text-secondary dark:border-white/15 dark:bg-white/[0.03] dark:shadow-[0_2px_12px_-4px_rgba(0,0,0,0.3)]"
    >
      <Icon size={20} />
    </a>
  );
}

export default SocialLink;