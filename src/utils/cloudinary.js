/**
 * Transforms external image URLs to use the Cloudinary fetch API,
 * delivering optimized f_auto (AVIF/WebP), q_auto, and responsive width sizing.
 *
 * @param {string} url - The original source image URL.
 * @param {number} width - The target width for responsive rendering.
 * @returns {string} The optimized Cloudinary delivery URL.
 */
export function getOptimizedImageUrl(url, width = 800) {
  if (!url) return "";

  // If it is a base64 string, local asset, or already a Cloudinary URL, return as-is
  if (
    url.startsWith("data:") ||
    url.includes("res.cloudinary.com") ||
    !url.startsWith("http")
  ) {
    return url;
  }

  // Strip query parameters to let Cloudinary execute the optimal sizing and compression
  const baseUrl = url.split("?")[0];

  // Return the Cloudinary fetch API URL
  return `https://res.cloudinary.com/demo/image/fetch/f_auto,q_auto,w_${width}/${encodeURIComponent(baseUrl)}`;
}
