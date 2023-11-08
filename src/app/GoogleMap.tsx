"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function GoogleMap({ zoom }: { readonly zoom: number }) {
  const position = { lat: 53.54, lng: 10 };

  console.log({ zoom });

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
      <div className="aspect-video max-w-lg">
        <Map zoom={zoom} center={position} disableDefaultUI />
      </div>
    </APIProvider>
  );
}
