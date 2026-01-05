export default function ChevronIconSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
      <defs>
        <filter id="chevron-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.25" />
        </filter>
      </defs>
      <path
        d="M240 0 120 120l120 120-120 120 120 120 240-240L240 0z"
        fill="var(--background)"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinejoin="miter"
        filter="url(#chevron-shadow)"
      ></path>
    </svg>
  );
}
