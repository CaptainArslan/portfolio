import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combine classNames with clsx and handle Tailwind CSS conflicts with tailwind-merge
 * Useful for conditional classes and avoiding specificity conflicts
 *
 * @example
 * cn('px-2 py-1', condition && 'px-4') // removes px-2 and keeps px-4
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a date string into a readable format
 * Handles ISO strings, timestamps, and locale-specific formatting
 *
 * @param date - ISO date string or Date object
 * @param format - 'short' | 'long' | 'month-year'
 * @returns Formatted date string
 *
 * @example
 * formatDate('2024-03-15') // 'Mar 15, 2024'
 * formatDate('2024-03-15', 'long') // 'March 15, 2024'
 * formatDate('2024-03-15', 'month-year') // 'March 2024'
 */
export function formatDate(
  date: string | Date,
  format: 'short' | 'long' | 'month-year' = 'short'
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(dateObj.getTime())) {
    return 'Invalid date';
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: format === 'month-year' ? 'long' : format === 'long' ? 'long' : 'short',
    ...(format !== 'month-year' && { day: 'numeric' }),
  };

  return dateObj.toLocaleDateString('en-US', options);
}

/**
 * Convert text to URL-friendly slug format
 * Removes special characters, converts to lowercase, replaces spaces with hyphens
 *
 * @param text - Text to slugify
 * @returns Slugified string
 *
 * @example
 * slugify('Hello World!') // 'hello-world'
 * slugify('Web Development Trends 2024') // 'web-development-trends-2024'
 * slugify('My First Post!!!') // 'my-first-post'
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
}

/**
 * Format a number as currency
 * @param amount - Number to format
 * @param currency - Currency code (default: 'USD')
 * @param locale - Locale string (default: 'en-US')
 * @returns Formatted currency string
 *
 * @example
 * formatCurrency(1234.56) // '$1,234.56'
 * formatCurrency(1234.56, 'EUR') // '€1,234.56'
 */
export function formatCurrency(
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Format a number as percentage
 * @param value - Number to format as percentage
 * @param decimals - Number of decimal places
 * @returns Formatted percentage string
 *
 * @example
 * formatPercentage(0.856) // '85.6%'
 * formatPercentage(0.45, 0) // '45%'
 */
export function formatPercentage(value: number, decimals: number = 1): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Truncate text to a maximum length and add ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @param suffix - Suffix to add (default: '...')
 * @returns Truncated text
 *
 * @example
 * truncate('Hello World', 8) // 'Hello...'
 * truncate('Hello World', 8, '→') // 'Hello→'
 */
export function truncate(text: string, maxLength: number, suffix: string = '...'): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * Calculate reading time for a text or HTML content
 * Estimates based on average reading speed of 200 words per minute
 *
 * @param content - Text or HTML content
 * @returns Reading time in minutes
 *
 * @example
 * getReadingTime('Lorem ipsum dolor sit amet...') // 1
 */
export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  // Remove HTML tags and count words
  const plainText = content.replace(/<[^>]*>/g, '');
  const wordCount = plainText.split(/\s+/).length;
  return Math.max(1, Math.round(wordCount / wordsPerMinute));
}

/**
 * Check if a string is a valid URL
 * @param url - String to validate
 * @returns Boolean indicating if valid URL
 *
 * @example
 * isValidUrl('https://example.com') // true
 * isValidUrl('not a url') // false
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Extract domain from URL
 * @param url - URL string
 * @returns Domain name
 *
 * @example
 * getDomain('https://www.example.com/page') // 'example.com'
 */
export function getDomain(url: string): string {
  try {
    const { hostname } = new URL(url);
    return hostname.replace('www.', '');
  } catch {
    return '';
  }
}

/**
 * Format file size in human-readable format
 * @param bytes - File size in bytes
 * @param decimals - Number of decimal places
 * @returns Formatted file size
 *
 * @example
 * formatFileSize(1024) // '1 KB'
 * formatFileSize(1536, 2) // '1.50 MB'
 */
export function formatFileSize(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Delay execution for a specified time (useful for testing, debouncing, etc.)
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after delay
 *
 * @example
 * await delay(1000) // Wait 1 second
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Debounce a function to prevent excessive calls
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 *
 * @example
 * const debouncedSearch = debounce(searchFunction, 500)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Get time ago string from date (e.g., "2 days ago", "just now")
 * @param date - Date to calculate from
 * @returns Time ago string
 *
 * @example
 * getTimeAgo(new Date(Date.now() - 3600000)) // '1 hour ago'
 */
export function getTimeAgo(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const seconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)} minute${Math.floor(seconds / 60) > 1 ? 's' : ''} ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hour${Math.floor(seconds / 3600) > 1 ? 's' : ''} ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)} day${Math.floor(seconds / 86400) > 1 ? 's' : ''} ago`;

  return formatDate(dateObj, 'short');
}

/**
 * Capitalize first letter of string
 * @param str - String to capitalize
 * @returns Capitalized string
 *
 * @example
 * capitalize('hello') // 'Hello'
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Convert object to query string
 * @param params - Object with query parameters
 * @returns Query string
 *
 * @example
 * objectToQueryString({ page: 1, limit: 10 }) // 'page=1&limit=10'
 */
export function objectToQueryString(params: Record<string, string | number | boolean>): string {
  return Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

/**
 * Get initials from a full name
 * @param name - Full name
 * @returns Initials
 *
 * @example
 * getInitials('Muhammad Arslan') // 'MA'
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2);
}
