import { ReactNode } from 'react';

type RoundCardProps = {
  title: string;
  description: string;
  duration?: string;
  statusBadge?: ReactNode;
  onClick?: () => void;
  actionLabel?: string;
};

export const RoundCard = ({
  title,
  description,
  duration,
  statusBadge,
  onClick,
  actionLabel = 'Open round',
}: RoundCardProps) => {
  return (
    <div className="rounded-card bg-white/90 shadow-sm border border-white/60 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-accent/5 to-transparent" />
      <div className="relative p-6 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-wide text-text/50">Interview module</p>
            <h3 className="text-2xl font-semibold text-text">{title}</h3>
          </div>
          {statusBadge}
        </div>
        <p className="text-text/70 text-base">{description}</p>
        {duration && <p className="text-sm text-text/60">Avg. duration · {duration}</p>}
        <button
          type="button"
          onClick={onClick}
          className="mt-auto cta-button"
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
};

