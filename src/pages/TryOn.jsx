import { useEffect, useRef, useState } from "react";
import { FaceMesh } from "@mediapipe/face_mesh";
import { Camera } from "@mediapipe/camera_utils";

export default function TryOn() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [skinTone, setSkinTone] = useState("Medium");
  const [shade, setShade] = useState("#d16b7c");
  const [shadeName, setShadeName] = useState("Rose Blush");

  /* SHADES */
  const shadeMap = {
    Light: [
      { name: "Peach Nude", color: "#f4b6a6" },
      { name: "Soft Pink", color: "#f2a7c1" },
    ],
    Medium: [
      { name: "Rose Blush", color: "#d16b7c" },
      { name: "Coral Bloom", color: "#e57373" },
    ],
    Deep: [
      { name: "Berry Wine", color: "#7b1e3c" },
      { name: "Plum Rush", color: "#8e244d" },
    ],
  };

  useEffect(() => {
    if (!videoRef.current) return;

    let camera;

    const faceMesh = new FaceMesh({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    });

    faceMesh.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.6,
      minTrackingConfidence: 0.6,
    });

    faceMesh.onResults(onResults);

    camera = new Camera(videoRef.current, {
      onFrame: async () => {
        if (!videoRef.current) return;
        await faceMesh.send({ image: videoRef.current });
      },
      width: 480,
      height: 360,
    });

    camera.start();

    // 🔥 CLEANUP – prevents background crashes
    return () => {
      if (camera) camera.stop();
    };
  }, []);

  function onResults(results) {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    // 🔒 HARD GUARDS
    if (!canvas || !video) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // SAFE DIMENSIONS
    canvas.width = video.videoWidth || 480;
    canvas.height = video.videoHeight || 360;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!results.multiFaceLandmarks?.length) return;

    const landmarks = results.multiFaceLandmarks[0];
    drawLips(ctx, landmarks);
    detectSkinTone(landmarks);
  }

  function drawLips(ctx, lm) {
    const lips = [
      61, 146, 91, 181, 84, 17, 314, 405, 321, 375,
      291, 308, 324, 318, 402, 317, 14, 87, 178,
      88, 95, 78,
    ];

    ctx.beginPath();
    lips.forEach((i, index) => {
      const x = lm[i].x * canvasRef.current.width;
      const y = lm[i].y * canvasRef.current.height;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();

    ctx.fillStyle = shade;
    ctx.globalAlpha = 0.65;
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  function detectSkinTone(lm) {
    const cheekPoints = [234, 454];
    let avgY = 0;

    cheekPoints.forEach((i) => {
      avgY += lm[i]?.y || 0.5;
    });

    avgY /= cheekPoints.length;

    if (avgY < 0.45) setSkinTone("Light");
    else if (avgY < 0.6) setSkinTone("Medium");
    else setSkinTone("Deep");
  }

  return (
    <div style={container}>
      <h1>AI Virtual Try-On</h1>
      <p>Real-time lipstick try-on using MediaPipe</p>

      <div style={videoWrap}>
        <video ref={videoRef} autoPlay muted style={videoStyle} />
        <canvas ref={canvasRef} style={canvasStyle} />
      </div>

      <h3>Detected Skin Tone: {skinTone}</h3>

      <h3>Recommended Shades</h3>
      <div style={shadeRow}>
        {shadeMap[skinTone].map((s) => (
          <div key={s.name} style={{ textAlign: "center" }}>
            <div
              onClick={() => {
                setShade(s.color);
                setShadeName(s.name);
              }}
              style={{
                ...shadeCircle,
                background: s.color,
                border:
                  shade === s.color
                    ? "3px solid black"
                    : "2px solid #ccc",
              }}
            />
            <p>{s.name}</p>
          </div>
        ))}
      </div>

      <h3>Selected Shade: {shadeName}</h3>
    </div>
  );
}

/* STYLES */
const container = {
  padding: 30,
  textAlign: "center",
};

const videoWrap = {
  position: "relative",
  width: 480,
  margin: "20px auto",
};

const videoStyle = {
  width: "100%",
  borderRadius: 20,
};

const canvasStyle = {
  position: "absolute",
  top: 0,
  left: 0,
};

const shadeRow = {
  display: "flex",
  justifyContent: "center",
  gap: 25,
  marginTop: 15,
};

const shadeCircle = {
  width: 45,
  height: 45,
  borderRadius: "50%",
  cursor: "pointer",
};
