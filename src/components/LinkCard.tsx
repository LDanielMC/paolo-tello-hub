import { type ReactNode } from "react";

interface LinkCardProps {
  href: string;
  icon: ReactNode;
  label: string;
  sublabel?: string;
  featured?: boolean;
  newRelease?: boolean;
  delay?: number;
}

const LinkCard = ({ href, icon, label, sublabel, featured, newRelease, delay = 0 }: LinkCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${featured ? "link-card-featured" : "link-card"} flex items-center gap-4 px-6 py-5 opacity-0 animate-fade-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="flex-shrink-0 text-foreground/70">{icon}</span>
      <div className="flex-1 min-w-0">
        <span className="text-ui text-sm font-medium text-foreground/90">{label}</span>
        {sublabel && (
          <p className="text-xs text-muted-foreground mt-0.5 font-display italic truncate">{sublabel}</p>
        )}
      </div>
      {newRelease && (
        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
      )}
      <svg className="flex-shrink-0 w-4 h-4 text-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </a>
  );
};

export default LinkCard;
