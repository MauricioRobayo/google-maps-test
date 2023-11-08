"use client";

import { useState } from "react";
import GoogleMap from "./GoogleMap";

export default function Home() {
  const [zoom, setZoom] = useState(10);
  return (
    <>
      <GoogleMap zoom={zoom} />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setZoom(zoom + 1)}
      >
        Zoom in
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setZoom(zoom - 1)}
      >
        Zoom out
      </button>
      <div>Zoom: {zoom}</div>
    </>
  );
}
