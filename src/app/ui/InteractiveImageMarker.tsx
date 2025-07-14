"use client";
import { useState, useRef } from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";
type MarkerPosition = {
  top: number;
  left: number;
  id: string; // Added unique identifier
};

interface InteractiveImageMarkerProps {
  label: string;
  markers: MarkerPosition[];
  setMarkers: (markers: MarkerPosition[]) => void;
  className?: string;
  imageUrl: string;
  error?: string | undefined;
}

const InteractiveImageMarker = ({
  label,
  markers,
  setMarkers,
  imageUrl,
  error,
  className = "",
}: InteractiveImageMarkerProps) => {
  const [hoverPosition, setHoverPosition] = useState<MarkerPosition | null>(
    null,
  );
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setHoverPosition({
      left: (x / rect.width) * 100,
      top: (y / rect.height) * 100,
      id: "hover", // Temporary ID for hover position
    });
  };

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    if (e.target !== e.currentTarget) return; // Only proceed if clicking directly on image, not markers

    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Add new marker
    const newMarker: MarkerPosition = {
      left: (x / rect.width) * 100,
      top: (y / rect.height) * 100,
      id: Date.now().toString(), // Unique ID
    };
    setMarkers([...markers, newMarker]);
  };

  const handleMarkerClick = (e: React.MouseEvent, markerId: string) => {
    e.stopPropagation(); // Prevent triggering image click
    setMarkers(markers.filter((marker) => marker.id !== markerId));
  };

  return (
    <div className={`relative mx-auto w-full max-w-md ${className}`}>
      {label && (
        <h3 className="block text-sm font-medium text-black lg:text-lg">
          {label}
        </h3>
      )}

      <div
        ref={imageRef}
        className="relative h-[300px] w-[300px] cursor-crosshair overflow-hidden bg-[#5e9ed5]"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setHoverPosition(null);
        }}
        onMouseMove={handleMouseMove}
        onClick={handleImageClick}
      >
        {imageUrl ? (
          <Image
            src={`${imageUrl}`}
            alt="Interactive map"
            className="pointer-events-none h-[300px] w-[300px] object-contain"
            width={300}
            height={300}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/default-map-image.png";
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            <span className="text-gray-500">No image selected</span>
          </div>
        )}

        {isHovering && hoverPosition && (
          <div
            className="pointer-events-none absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-red-500 bg-white"
            style={{
              left: `${hoverPosition.left}%`,
              top: `${hoverPosition.top}%`,
            }}
          />
        )}

        {markers.map((marker) => (
          <div
            key={`marker-${marker.id}`}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer"
            style={{
              left: `${marker.left}%`,
              top: `${marker.top}%`,
            }}
            onClick={(e) => handleMarkerClick(e, marker.id)}
          >
            <MapPin
              color="#ef4444"
              size={30}
              className="transition-transform hover:scale-110"
              fill="#ef4444"
            />
          </div>
        ))}
      </div>

      <div className="mt-2 text-sm text-gray-600">
        {markers.length} {markers.length === 1 ? "marker" : "markers"} placed
      </div>

      {error && (
        <div className="mt-2">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}
    </div>
  );
};

export default InteractiveImageMarker;
