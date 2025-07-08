export const normalizeImageUrl = (url: string) => {
  if (!url) return url;

  // If URL already contains the vercel domain, extract the real URL
  if (url.includes("villadi-project.vercel.app")) {
    // Find the 'https:' part after your domain
    const httpsIndex = url.indexOf("https:/");
    if (httpsIndex > -1) {
      // Fix the double slash issue
      return url.slice(httpsIndex).replace("https:/", "https://");
    }
  }

  return url;
};
