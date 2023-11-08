"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function GoogleMap({ zoom }: { readonly zoom: number }) {
  const position = { lat: 53.54, lng: 10 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
      <div className="aspect-video">
        <Map zoom={zoom} center={position} />
      </div>
    </APIProvider>
  );
}
