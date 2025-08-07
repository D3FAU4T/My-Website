'use client';

import { cache } from '@/lib/cache';
import { useEffect } from 'react';

export const CacheManager = () => {
    useEffect(() => {
        cache.clearExpired();

        const interval = setInterval(() => {
            cache.clearExpired();
        }, 5 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    return null;
};

export const clearAllCache = () => {
    cache.clear();
    console.log('All cache cleared');
};

export default CacheManager;
