import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge class names with Tailwind CSS.
 *
 * @param {...ClassValue[]} inputs - The class names to merge
 * @returns {string} Merged class names
 */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
