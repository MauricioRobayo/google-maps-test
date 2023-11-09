"use client";

import {
  APIProvider,
  Map,
  useApiIsLoaded,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

export default function GoogleMap() {
  const [address, setAddress] = useState("");
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
      <Geocoder address={address} />
      <label
        htmlFor="address"
        className="mb-2 text-sm font-medium text-gray-900"
      >
        Address:
      </label>
      <input
        id="address"
        type="text"
        className="max-w-sm  border border-gray-300 text-gray-900 rounded-lg p-2.5"
        onChange={(e) => setAddress(e.target.value)}
      />
    </APIProvider>
  );
}

function Geocoder({ address }: { readonly address: string }) {
  const [position, setPosition] = useState<google.maps.LatLng>();
  const geocoding = useMapsLibrary("geocoding");
  const isLoaded = useApiIsLoaded();

  useEffect(() => {
    async function getAddressPosition() {
      if (isLoaded && geocoding) {
        const geocoder = new geocoding.Geocoder();
        const response = await geocoder.geocode({ address });
        setPosition(response.results[0].geometry.location);
      }
    }

    getAddressPosition();
  }, [address, geocoding, isLoaded]);

  return (
    <div className="aspect-video max-w-lg">
      <Map
        key={address} // force a re-render while this lands: https://github.com/visgl/react-google-maps/pull/64
        zoom={9}
        center={position}
        disableDefaultUI
      />
    </div>
  );
}
