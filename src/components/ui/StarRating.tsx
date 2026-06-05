import { Star } from 'lucide-react';

/**
 * Star rating with a real text equivalent for screen readers.
 * The stars themselves are decorative (aria-hidden); the rating is announced
 * via a visually-hidden span, so the meaning is never color/shape-only.
 */
export default function StarRating({
  rating,
  max = 5,
  size = 14,
  color = 'var(--interactive)',
  label,
}: {
  rating: number;
  max?: number;
  size?: number;
  color?: string;
  label?: string;
}) {
  const text = label ?? `${rating} ${rating === 1 ? 'star' : 'stars'} out of ${max}`;
  return (
    <span className="inline-flex items-center gap-0.5" role="img" aria-label={text}>
      <span className="sr-only">{text}</span>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={size}
          aria-hidden="true"
          focusable={false}
          fill={i < Math.floor(rating) ? color : 'none'}
          stroke={color}
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}
