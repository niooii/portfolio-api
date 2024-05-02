"use client"

//Background.js
import { useState, useRef, useEffect } from "react";
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';

export default function Background({ children }) {
    const [vantaEffect, setVantaEffect] = useState(0);

    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                WAVES({
                    THREE,
                    el: vantaRef.current,   
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x0,
                    shininess: 14.00,
                    waveHeight: 8.50,
                    waveSpeed: 0.55,
                    zoom: 1.00
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div ref={vantaRef} className="">{children}</div>
    )
}