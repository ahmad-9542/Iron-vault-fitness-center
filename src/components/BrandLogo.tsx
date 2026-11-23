interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtext?: boolean;
}

export function BrandLogo({size = 'md', showSubtext = false}: BrandLogoProps) {
  const emblemSizes = {
    sm: 'h-9 w-9 rounded-md',
    md: 'h-10 w-10 rounded-lg',
    lg: 'h-12 w-12 rounded-lg',
  };

  const titleSizes = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  return (
    <span className="inline-flex items-center gap-3 shrink-0">
      <span
        className={`relative inline-block overflow-hidden border border-zinc-400/25 bg-[#080808] shadow-[0_0_20px_-6px_rgba(229,9,20,0.6)] shrink-0 ${emblemSizes[size]}`}
      >
        <img
          src="/images/iron-vault-logo.png"
          alt="IRON VAULT FITNESS metallic A emblem"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-[50%_28%] scale-[2.35] origin-[50%_30%]"
        />
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-wider uppercase whitespace-nowrap ${titleSizes[size]}`}
        >
          <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            IRON VAULT
          </span>{' '}
          <span className="text-[#E50914]">FITNESS</span>
        </span>
        {showSubtext && (
          <span className="mt-1 text-[10px] font-semibold tracking-[0.26em] uppercase text-zinc-400 whitespace-nowrap">
            TRAIN · TRANSFORM · THRIVE
          </span>
        )}
      </span>
    </span>
  );
}
