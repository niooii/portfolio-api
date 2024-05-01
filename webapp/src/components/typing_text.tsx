'use client';

import React, { useState, useEffect } from 'react';

interface TypingTextProps {
    text: string;
    delay?: number; // Speed in milliseconds
    onTypingEnd?: () => void; // Event handler for when typing ends
}

const TypingText: React.FC<TypingTextProps> = ({ text, delay = 50, onTypingEnd }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
        setDisplayedText((prevText) => {
            const nextChar = text[currentIndex];
            currentIndex++;
            return prevText + nextChar;
        });

        if (currentIndex >= text.length) {
            clearInterval(typingInterval);
            if (onTypingEnd) {
            onTypingEnd();
            }
        }
        }, delay);

        return () => clearInterval(typingInterval);
    }, [text, delay, onTypingEnd]);

    return <span>{displayedText}</span>;
};

export default TypingText;
