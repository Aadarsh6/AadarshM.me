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
      className="p-3 rounded-full border border-black/10 dark:border-white/15 hover:border-accent hover:text-accent transition-colors"
    >
      <Icon size={20} />
    </a>
  );
}

export default SocialLink;