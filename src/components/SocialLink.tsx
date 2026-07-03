import {  Mail } from "lucide-react";
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
      className="p-3 rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-white/[0.03] shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_-4px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:border-accent hover:text-accent hover:scale-[1.05] active:scale-[0.95]"
    >
      <Icon size={20} />
    </a>
  );
}

export default SocialLink;