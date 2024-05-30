import { useState } from "react"


export const useLocalStorage = (key: string, defaultValue: unknown) => {
    const [storedVal, setStoredVal] = useState(() => {
        try {
            const value = localStorage.getItem(key);
            if (value) {
                return JSON.parse(value);
            } else {
                localStorage.setItem(key, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (error) {
            return defaultValue;
        }

    });
    const setValue = (newValue: unknown) => {
        try {
            localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
            console.log(error);
        }
        setStoredVal(newValue);
    };

    return [storedVal, setValue];
}
