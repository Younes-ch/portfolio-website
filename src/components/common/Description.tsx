import { useId, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

// ponytail: length heuristic, not measured overflow; measure scrollHeight if mid-length texts need clamping on mobile
const COLLAPSE_AFTER = 700;

interface DescriptionProps {
  text: string;
  className: string;
}

const Description = ({ text, className }: DescriptionProps) => {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  const collapsible = text.length > COLLAPSE_AFTER;

  return (
    <div className={`description ${className} text`}>
      <div
        id={id}
        className={`description-body${collapsible && !expanded ? " collapsed" : ""}`}
      >
        {text.split("\n").map((line, key) => {
          const trimmed = line.trim();
          return trimmed.startsWith("●") ? (
            <p key={key} className="bullet">
              {trimmed.slice(1).trim()}
            </p>
          ) : (
            <p key={key}>{trimmed}</p>
          );
        })}
      </div>
      {collapsible && (
        <button
          type="button"
          className="description-toggle"
          aria-expanded={expanded}
          aria-controls={id}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Read more"}
          <FaChevronDown />
        </button>
      )}
    </div>
  );
};

export default Description;
