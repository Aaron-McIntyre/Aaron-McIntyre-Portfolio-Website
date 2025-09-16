import { useState } from "react";
import TagListOverlay from "./TagListOverlay";

type TagListProps = {
  tags: string[];
  maxVisible?: number;
};

export default function TagList({ tags, maxVisible = 5 }: TagListProps) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const visibleTags = tags.slice(0, maxVisible);
  const hiddenTags = tags.slice(maxVisible);

  return (
    <div className="px-2 pb-2">
      {visibleTags.map((tag, index) => (
        <span
          key={index}
          className="inline-block bg-[var(--background)] rounded-full px-3 py-1 text-sm font-semibold text-[var(--text)] mr-2 mb-2 cursor-default"
        >
          {tag}
        </span>
      ))}

      {hiddenTags.length > 0 && (
        <button
          onClick={() => setIsOverlayOpen(true)}
          className="inline-flex bg-neutral-800 rounded-full px-3 py-1 text-sm font-semibold text-[var(--text)] mr-2 mb-2 cursor-default"
        >
          +{hiddenTags.length} more
        </button>
      )}

      {isOverlayOpen && (
        <TagListOverlay onClose={() => setIsOverlayOpen(false)} tags={tags} />
      )}
    </div>
  );
}
