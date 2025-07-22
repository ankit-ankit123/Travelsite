// src/utils/getBlogId.js

/**
 * Fetch the Blogger blog ID given its public URL.
 * @param {string} blogUrl - The public URL of your blog.
 * @param {string} apiKey - Your Google API Key.
 * @returns {Promise<string|null>} - Returns the blog ID if successful, else null.
 */
export async function getBlogId(blogUrl, apiKey) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/blogger/v3/blogs/byurl?url=${encodeURIComponent(blogUrl)}&key=${apiKey}`
    );

    if (!response.ok) {
      console.error(`Error fetching blog ID: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data.id || null;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
