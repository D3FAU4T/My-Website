interface CacheItem {
    data: any;
    timestamp: number;
    expiresIn: number; // in milliseconds
}

const CACHE_PREFIX = 'my-website-cache-';

export const cache = {
    set: (key: string, data: any, expiresIn: number = 5 * 60 * 1000) => { // default 5 minutes
        if (typeof window === 'undefined') return; // SSR safety

        const item: CacheItem = {
            data,
            timestamp: Date.now(),
            expiresIn
        };

        try { localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(item)); }
        catch (error) { console.warn('Failed to set cache:', error); }
    },

    get: (key: string): any | null => {
        if (typeof window === 'undefined') return null; // SSR safety

        try {
            const cached = localStorage.getItem(CACHE_PREFIX + key);
            if (!cached) return null;

            const item: CacheItem = JSON.parse(cached);
            const now = Date.now();

            // Check if cache has expired
            if (now - item.timestamp > item.expiresIn) {
                localStorage.removeItem(CACHE_PREFIX + key);
                return null;
            }

            return item.data;
        }
        
        catch (error) {
            console.warn('Failed to get cache:', error);
            return null;
        }
    },

    clear: (key?: string) => {
        if (typeof window === 'undefined') return; // SSR safety

        if (key)
            localStorage.removeItem(CACHE_PREFIX + key);
        
        else {
            const keys = Object.keys(localStorage);
            keys.forEach(k => {
                if (k.startsWith(CACHE_PREFIX)) {
                    localStorage.removeItem(k);
                }
            });
        }
    },

    clearExpired: () => {
        if (typeof window === 'undefined') return; // SSR safety

        const keys = Object.keys(localStorage);
        const now = Date.now();
        let clearedCount = 0;

        keys.forEach(key => {
            if (key.startsWith(CACHE_PREFIX)) {
                try {
                    const cached = localStorage.getItem(key);
                    if (cached) {
                        const item: CacheItem = JSON.parse(cached);
                        if (now - item.timestamp > item.expiresIn) {
                            localStorage.removeItem(key);
                            clearedCount++;
                        }
                    }
                } catch (error) {
                    // Remove corrupted cache items
                    localStorage.removeItem(key);
                    clearedCount++;
                }
            }
        });

        if (clearedCount > 0) {
            console.log(`🧹 Cleared ${clearedCount} expired cache items`);
        }
    },

    getStats: () => {
        if (typeof window === 'undefined') return null; // SSR safety

        const keys = Object.keys(localStorage);
        const now = Date.now();
        let totalItems = 0;
        let expiredItems = 0;
        let totalSize = 0;

        keys.forEach(key => {
            if (key.startsWith(CACHE_PREFIX)) {
                totalItems++;
                const cached = localStorage.getItem(key);
                if (cached) {
                    totalSize += cached.length;
                    try {
                        const item: CacheItem = JSON.parse(cached);
                        if (now - item.timestamp > item.expiresIn) {
                            expiredItems++;
                        }
                    } catch (error) {
                        expiredItems++;
                    }
                }
            }
        });

        return {
            totalItems,
            expiredItems,
            validItems: totalItems - expiredItems,
            totalSizeKB: Math.round(totalSize / 1024)
        };
    }
};

export const cachedFetch = async (url: string, options?: RequestInit, cacheTime?: number): Promise<any> => {
    const cacheKey = `fetch-${url}`;

    const cached = cache.get(cacheKey);

    if (cached) {
        console.log(`🎯 Cache HIT for ${url}`);
        return cached;
    }

    try {
        console.log(`📡 Cache MISS - Fetching ${url}`);
        const response = await fetch(url, options);
        const data = await response.json();

        cache.set(cacheKey, data, cacheTime);
        console.log(`💾 Cached data for ${url} (expires in ${(cacheTime || 5 * 60 * 1000) / 1000}s)`);

        return data;
    } catch (error) {
        console.error(`Failed to fetch ${url}:`, error);
        throw error;
    }
};
