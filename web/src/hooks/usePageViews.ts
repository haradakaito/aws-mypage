// src/hooks/usePageViews.ts
import { useEffect, useState } from "react";

export const usePageViews = () => {
    const [views, setViews] = useState<number | null>(null);

    useEffect(() => {
        const baseUrl = process.env.REACT_APP_API_BASE_URL;
        fetch(`${baseUrl}/view`)
        .then((res) => res.json())
        .then((data) => setViews(data.count))
        .catch((error) => {
            console.error("Failed to fetch page views:", error);
            setViews(null);
        });
    }, []);

    return views;
};