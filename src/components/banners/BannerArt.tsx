import type { SVGProps } from 'react';

export type BannerArtName =
  'portfolio' | 'options' | 'property' | 'building' | 'calculator' | 'documents' | 'steps' | 'shield';

const stroke: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 320 240',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 3,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
};

/** Decorative line illustrations for the banner slides (inline SVG, no external assets). */
export function BannerArt({ name, className }: { name: BannerArtName; className?: string }) {
  switch (name) {
    case 'portfolio':
      return (
        <svg {...stroke} className={className}>
          <rect x="40" y="130" width="34" height="80" rx="6" fill="currentColor" fillOpacity=".12" />
          <rect x="96" y="100" width="34" height="110" rx="6" fill="currentColor" fillOpacity=".18" />
          <rect x="152" y="120" width="34" height="90" rx="6" fill="currentColor" fillOpacity=".12" />
          <rect x="208" y="70" width="34" height="140" rx="6" fill="currentColor" fillOpacity=".25" />
          <path d="M34 214h224" />
          <path d="M44 112l62-40 52 24 86-60" />
          <path d="M226 36h18v18" />
          <circle cx="268" cy="150" r="26" fill="currentColor" fillOpacity=".15" />
          <path d="M268 138v24M259 147c2-5 16-5 18 0s-16 5-18 11c2 6 16 6 18 0" />
        </svg>
      );
    case 'options':
      return (
        <svg {...stroke} className={className}>
          <rect x="52" y="48" width="216" height="144" rx="14" fill="currentColor" fillOpacity=".12" />
          <path d="M82 84h100M82 110h72M82 136h56" />
          <circle cx="222" cy="134" r="30" fill="currentColor" fillOpacity=".18" />
          <path d="M222 114l6 14 15 2-11 10 3 15-13-8-13 8 3-15-11-10 15-2z" />
          <path d="M96 214l22-22 22 22" />
          <path d="M118 192v40" strokeOpacity=".0" />
        </svg>
      );
    case 'property':
      return (
        <svg {...stroke} className={className}>
          <path d="M40 120L160 30l120 90" />
          <path d="M60 106v100h200V106" fill="currentColor" fillOpacity=".12" />
          <path d="M136 206v-58h48v58" />
          <circle cx="258" cy="168" r="30" fill="currentColor" fillOpacity=".2" />
          <circle cx="251" cy="168" r="8" />
          <path d="M259 168h28M278 168v10M286 168v7" />
        </svg>
      );
    case 'building':
      return (
        <svg {...stroke} className={className}>
          <path d="M30 214h260" />
          <path d="M50 214V110h70v104" fill="currentColor" fillOpacity=".12" />
          <path d="M120 214V48h86v166" fill="currentColor" fillOpacity=".2" />
          <path d="M206 214v-84h64v84" fill="currentColor" fillOpacity=".12" />
          <path d="M142 80h8M170 80h8M142 112h8M170 112h8M142 144h8M170 144h8M66 136h8M96 136h8M66 168h8M96 168h8M224 156h8M246 156h8" />
          <path d="M244 30v50M244 30h40M284 30v18" />
          <path d="M214 30h30" />
        </svg>
      );
    case 'calculator':
      return (
        <svg {...stroke} className={className}>
          <rect x="94" y="28" width="132" height="184" rx="16" fill="currentColor" fillOpacity=".12" />
          <rect x="112" y="46" width="96" height="40" rx="8" />
          <path d="M196 66h-24" />
          <circle cx="126" cy="116" r="6" />
          <circle cx="160" cy="116" r="6" />
          <circle cx="194" cy="116" r="6" />
          <circle cx="126" cy="148" r="6" />
          <circle cx="160" cy="148" r="6" />
          <circle cx="194" cy="148" r="6" />
          <circle cx="126" cy="180" r="6" />
          <circle cx="160" cy="180" r="6" />
          <rect x="182" y="170" width="24" height="20" rx="6" fill="currentColor" fillOpacity=".3" />
        </svg>
      );
    case 'documents':
      return (
        <svg {...stroke} className={className}>
          <path d="M92 28h96l40 40v144H92z" fill="currentColor" fillOpacity=".12" />
          <path d="M188 28v40h40" />
          <path d="M116 100l10 10 18-20M116 138l10 10 18-20" />
          <path d="M160 102h46M160 140h46M116 176h90" />
          <circle cx="258" cy="190" r="28" fill="currentColor" fillOpacity=".2" />
          <path d="M246 190l9 9 17-18" />
        </svg>
      );
    case 'steps':
      return (
        <svg {...stroke} className={className}>
          <path d="M40 200h70v-44h70v-44h70V68h20" />
          <circle cx="75" cy="168" r="18" fill="currentColor" fillOpacity=".2" />
          <circle cx="145" cy="124" r="18" fill="currentColor" fillOpacity=".2" />
          <circle cx="215" cy="80" r="18" fill="currentColor" fillOpacity=".2" />
          <path d="M68 168l5 5 9-10M138 124l5 5 9-10M208 80l5 5 9-10" />
          <path d="M268 56v24M258 66l10-10 10 10" />
        </svg>
      );
    default:
      return (
        <svg {...stroke} className={className}>
          <path d="M160 26l92 34v62c0 52-40 84-92 98-52-14-92-46-92-98V60z" fill="currentColor" fillOpacity=".14" />
          <path d="M118 124l30 30 56-62" />
        </svg>
      );
  }
}
