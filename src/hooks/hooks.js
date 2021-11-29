import React, { useState, useEffect } from "react"

export const useCounter = (defaultValue = 0) => {
    const [value, setValue] = useState(defaultValue);
    const [countInterval, setCountInterval] = useState(null);

    useEffect(() => {
            console.log("console", value)
        if (value === 0) {
            pause();
        }
    }, [value])
    const start = () => {
        if (value) {
            setCountInterval(setInterval(() => {
                setValue(val => val - 1);
            }, 1000));
        }
    },
        pause = () => {
            clearInterval(countInterval);
            setCountInterval(null)
        };

    return [value, { start, pause, setter: setValue }]

}