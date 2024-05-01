"use client"

//Background.js
import { useState, useRef, useEffect } from "react";
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';

export default function Background({ width, height, children }) {
    const [vantaEffect, setVantaEffect] = useState(0);

    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                WAVES({
                    THREE,
                    el: vantaRef.current,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div ref={vantaRef}>{children}</div>
    )
}