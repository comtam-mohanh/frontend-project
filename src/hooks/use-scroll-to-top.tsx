import React from "react";

export const useScrollToTop = () => {
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
}