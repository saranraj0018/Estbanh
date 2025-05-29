import { useState } from "react";


const useSearchHistory = () => {

    const [searchHistory, setSearchHistory] = useState(() => {
        const savedHistory = localStorage.getItem('searchHistory');
        return savedHistory ? JSON.parse(savedHistory) : [];
    });
    
    const addToSearchHistory = (query) => {
        setSearchHistory((prevHistory) => {
        const updatedHistory = [...new Set([query, ...prevHistory])].slice(0, 10);
        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
        return updatedHistory;
        });
    };
    
    const clearSearchHistory = () => {
        setSearchHistory([]);
        localStorage.removeItem('searchHistory');
    };


    const getRepeatedSearches = () => {
        const searchCount = {};
        searchHistory.forEach((search) => {
            searchCount[search] = (searchCount[search] || 0) + 1;
        });
        return Object.entries(searchCount).sort((a, b) => b[1] - a[1]);
    };
    
    return { searchHistory, addToSearchHistory, clearSearchHistory, getRepeatedSearches };
}


export default useSearchHistory;