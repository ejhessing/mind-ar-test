import React, { useState } from "react";
import "./App.css";
import MindARViewer from "./mindar-viewer";
import MindARThreeViewer from "./mindar-three-viewer";
import AFrameExample from "./aframe";

const data = [
  {
    id: "1",
    src: "./test/1/1.mind",
    images: ["./test/1/1.jpeg", "./test/1/2.jpeg", "./test/1/3.jpeg"],
  },
  {
    id: "2",
    src: "./test/2/2.mind",
    images: ["./test/2/4.jpeg", "./test/2/5.jpeg", "./test/2/6.jpeg"],
  },
];

function App() {
  const [started, setStarted] = useState(null);

  return (
    <div className="App">
      <h1>Test</h1>
      {/* 
      <div className="control-buttons">
        {started === null && <button onClick={() => {setStarted('aframe')}}>Start AFRAME version</button>}
        {started === null && <button onClick={() => {setStarted('three')}}>Start ThreeJS version</button>}
        {started !== null && <button onClick={() => {setStarted(null)}}>Stop</button>}
      </div>

      {started === 'aframe' && (
        <div className="container">
          <MindARViewer/>
          <video></video>
        </div>
      )}

      {started === 'three' && (
        <div className="container">
          <MindARThreeViewer />
        </div>
      )} */}

      <div className="control-buttons">
        {
          <button
            onClick={() => {
              setStarted("1");
            }}
          >
            1
          </button>
        }
        {
          <button
            onClick={() => {
              setStarted("2");
            }}
          >
            2
          </button>
        }

        {started !== null && (
          <button
            onClick={() => {
              setStarted(null);
            }}
          >
            Stop
          </button>
        )}
      </div>

      {started === "1" && (
        <div className="container">
          <AFrameExample images={data[0].images} src={data[0].src} />
          <video></video>
        </div>
      )}
      {started === "2" && (
        <div className="container">
          <AFrameExample images={data[1].images} src={data[1].src} />
          <video></video>
        </div>
      )}
    </div>
  );
}

export default App;
