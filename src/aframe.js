/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useRef } from "react";
//import 'aframe';
//import 'mind-ar/dist/mindar-image-aframe.prod.js';

export default ({ src, images }) => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];
    sceneEl.addEventListener("renderstart", () => {
      arSystem.start(); // start AR
    });
    return () => {
      arSystem.stop();
    };
  }, []);
  console.log({ src, images });
  return (
    <>
      <a-scene
        ref={sceneRef}
        mindar-image={`imageTargetSrc: ${src}; maxTrack: 2; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;`}
        color-space="sRGB"
        embedded
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
      >
        <a-assets>
          {images.map((imageSrc, index) => (
            <img id={index} src={imageSrc} key={index} />
          ))}
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
        {images.map((imageSrc, index) => (
          <a-entity mindar-image-target={`targetIndex: ${index}`} key={index}>
            <a-plane
              src={`#${index}`}
              position="0 0 0"
              height="1"
              width="1"
              rotation="0 0 0"
            ></a-plane>
          </a-entity>
        ))}
      </a-scene>
    </>
  );
};
