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

  // If it is a base64 string or local asset, return as-is
  if (url.startsWith("data:") || !url.startsWith("http")) {
    return url;
  }

  // If it's already a Cloudinary image upload URL, optimize it by adjusting the transformation path
  if (url.includes("res.cloudinary.com") && url.includes("/image/upload/")) {
    // Replace existing transformation segments or insert our own before the version number (e.g. v123456)
    if (/\/image\/upload\/(?:[^/]+\/)*(v\d+)/.test(url)) {
      return url.replace(
        /\/image\/upload\/(?:[^/]+\/)*(v\d+)/,
        `/image/upload/f_auto,q_auto,w_${width}/$1`
      );
    }
    // Fallback if there is no version number segment
    return url.replace(
      /\/image\/upload\/(?:[^/]+\/)?/,
      `/image/upload/f_auto,q_auto,w_${width}/`
    );
  }

  // If it is already another Cloudinary URL but not /image/upload/, return as-is
  if (url.includes("res.cloudinary.com")) {
    return url;
  }

  // Strip query parameters to let Cloudinary execute the optimal sizing and compression
  const baseUrl = url.split("?")[0];

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "demo";

  // Return the Cloudinary fetch API URL
  return `https://res.cloudinary.com/${cloudName}/image/fetch/f_auto,q_auto,w_${width}/${encodeURIComponent(baseUrl)}`;
}
