interface VerticalDividerBracketProps {
  color?: string;
}

export default function VerticalDividerBracket({
  color = "--ultralight-accent",
}: VerticalDividerBracketProps) {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <rect x="1200" height="3.6"></rect>
          <rect height="3.6"></rect>
          <path
            d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"
            className="shape-fill"
            style={{ fill: `var(${color})` }}
          ></path>
        </svg>
      </div>
    </div>
  );
}
