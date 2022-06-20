import React, { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from 'three'

const MainAppComponent = () => {
    const canvasRef = useRef(null);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 10, 10000);
    const renderer = new THREE.WebGLRenderList({ antialias: true })

    return (
        <div className="h-full w-full relative">
            <div ref={canvasRef}>

            </div>
        </div>
    )
}


const MainApp = React.memo(MainAppComponent);
export default MainApp;