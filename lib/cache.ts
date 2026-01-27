// Cache utilities for Next.js ISR and client-side caching

export const CACHE_TAGS = {
  RELIGIONS: 'religions',
  DEITIES: 'deities',
  STORIES: 'stories',
  TEACHINGS: 'teachings',
  FESTIVALS: 'festivals',
  TEXTS: 'texts',
  USER_BOOKMARKS: 'user-bookmarks',
} as const;

export const REVALIDATE_TIMES = {
  STATIC_CONTENT: 86400, // 24 hours
  DYNAMIC_CONTENT: 3600, // 1 hour
  USER_CONTENT: 300, // 5 minutes
} as const;

// Client-side cache for frequently accessed data
class ClientCache {
  private cache = new Map<string, { data: any; timestamp: number; ttl: number }>();

  set(key: string, data: any, ttlSeconds: number = 300) {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttlSeconds * 1000,
    });
  }

  get(key: string) {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  clear() {
    this.cache.clear();
  }

  delete(key: string) {
    this.cache.delete(key);
  }
}

export const clientCache = new ClientCache();

// Cache keys generator
export const getCacheKey = (type: string, id?: string, userId?: string) => {
  const parts = [type];
  if (id) parts.push(id);
  if (userId) parts.push(userId);
  return parts.join(':');
};