/**
 * Utility functions for Sidra Foundation
 */

/**
 * Cleanly merges CSS class names, filtering out falsy values.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format numbers with grouping separators (e.g. 1000 -> 1,000)
 */
export function formatNumber(num: number, useGrouping = true): string {
  return useGrouping ? num.toLocaleString("en-US") : num.toString();
}
