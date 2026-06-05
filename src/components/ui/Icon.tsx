import React from 'react';
import type { LucideIcon } from 'lucide-react';

/**
 * Thin wrapper around lucide icons that enforces accessibility:
 * - Decorative by default (aria-hidden, focusable=false), so screen readers skip it.
 * - Pass a `label` to make it meaningful: it becomes an img role with aria-label.
 *
 * Use this instead of rendering lucide icons directly so we never ship an
 * unlabeled icon that conveys meaning, and never announce purely decorative ones.
 */
export default function Icon({
  icon: LucideComp,
  label,
  size = 20,
  className,
  strokeWidth,
}: {
  icon: LucideIcon;
  label?: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  if (label) {
    return (
      <LucideComp
        size={size}
        className={className}
        strokeWidth={strokeWidth}
        role="img"
        aria-label={label}
      />
    );
  }
  return (
    <LucideComp
      size={size}
      className={className}
      strokeWidth={strokeWidth}
      aria-hidden="true"
      focusable={false}
    />
  );
}
