"use client";

import { APIProvider, ControlPosition, Map } from "@vis.gl/react-google-maps";

export default function GoogleMap() {
  const position = { lat: 53.54, lng: 10 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
      <div className="aspect-video max-w-lg">
        <Map
          zoom={9}
          center={position}
          disableDefaultUI
          zoomControl
          zoomControlOptions={{
            position: ControlPosition.LEFT_TOP,
          }}
        />
      </div>
    </APIProvider>
  );
}
