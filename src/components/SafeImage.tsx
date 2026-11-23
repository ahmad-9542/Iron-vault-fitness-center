import {useState} from 'react';
import {Dumbbell} from 'lucide-react';

interface SafeImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: 'eager' | 'lazy';
}

export function SafeImage({
  src,
  alt,
  className = '',
  fallbackLabel,
  loading = 'lazy',
}: SafeImageProps) {
  const [failed, setFailed] = useState(!src);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#101010] to-[#080808] border border-white/10 text-zinc-400 ${className}`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(229, 9, 20, 0.25), transparent 55%)',
          }}
        />
        <Dumbbell className="relative z-10 h-8 w-8 text-[#E50914]/80 mb-2" strokeWidth={1.5} />
        <span className="relative z-10 px-4 text-center text-xs font-medium tracking-wider uppercase text-zinc-400">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
