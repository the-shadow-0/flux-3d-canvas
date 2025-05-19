import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 40"
      width="100"
      height="40"
      aria-label="Neon Canvas Logo"
      {...props}
    >
      <defs>
        <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <text
        x="50%"
        y="50%"
        dy=".35em"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="20"
        fontWeight="bold"
        fill="url(#neonGradient)"
        textAnchor="middle"
        filter="url(#neonGlow)"
      >
        Flux-3d
      </text>
      <text
        x="50%"
        y="75%"
        dy=".35em"
        fontFamily="var(--font-geist-sans), sans-serif"
        fontSize="10"
        fill="hsl(var(--foreground))"
        textAnchor="middle"
        opacity="0.8"
      >
        CANVAS
      </text>
    </svg>
  );
}
