import React, { useRef, useState, useCallback, forwardRef, useImperativeHandle, useEffect } from 'react'

import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    mobileAndTabletCheck,
} from "webgi";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollAnimation } from '../lib/scroll-animation';

gsap.registerPlugin(ScrollTrigger)

const WebGiViewer = () => {
    const canvasRef = useRef()

    const memoizedScrollAnimation = useCallback((position, target, onUpdate)=>{
        if(position && target && onUpdate){
            scrollAnimation(position, target, onUpdate)
        }
    },[])

    const setupViewer=useCallback(async()=>{

        // Initialize the viewer
        const viewer = new ViewerApp({
            canvas: canvasRef.current
        })

        // Add some plugins
        const manager = await viewer.addPlugin(AssetManagerPlugin)

        const camera = viewer.scene.activeCamera
        const position = camera.position
        const target = camera.target

        // Add a popup(in HTML) with download progress when any asset is downloading.

        // Add plugins individually.
        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)
        await viewer.addPlugin(BloomPlugin)


        // This must be called once after all plugins are added.
        viewer.renderer.refreshPipeline()

        // Import and add a GLB file.
        await manager.addFromPath('scene-black.glb')

        viewer.addPlugin(TonemapPlugin).config.clipBackground = true

        viewer.scene.activeCamera.setCameraOptions({controlsEnabled:false})

        window.scrollTo(0,0)
        
        let needUpdate = true

        const onUpdate = ()=>{
                needUpdate = true
                viewer.setDirty()
        }   

        viewer.addEventListener('preFrame',()=>{
            if(needUpdate){
                camera.positionTargetUpdated(true)
                needUpdate = false
            }
        })
        // Load an environment map if not set in the glb file
        // await viewer.setEnvironmentMap((await manager.importer!.importSinglePath<ITexture>("./assets/environment.hdr"))!);   
        memoizedScrollAnimation(position, target, onUpdate)
    },[])

    useEffect(()=>{
        setupViewer()
    },[])

  return (
    <div id='webgi-canvas-container'>
        <canvas id='webgi-canvas' ref={canvasRef}/>
    </div>
  )
}

export default WebGiViewer