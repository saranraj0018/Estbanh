

export const useURIPathSegment = (url = window.location.href) => {
    const parsed = new URL(url);
    const segments = parsed.pathname.split('/');
    const lastSegment = segments.pop() || segments.pop(); // handles trailing slash
    const endpoint = parsed.pathname;
  
    return {
      endpoint,
      lastSegment,
      segments,
    };
}