"use client";
import { useState, useRef } from "react";
import { MapPin } from "lucide-react";

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
  error?: string[] | undefined;
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
    null
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
    <div className={`relative w-full max-w-md mx-auto ${className}`}>
      {label && (
        <h3 className="text-sm font-medium text-gray-700 mb-2">{label}</h3>
      )}

      <div
        ref={imageRef}
        className="relative w-[300px] h-[300px] bg-[#5e9ed5] overflow-hidden cursor-crosshair"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setHoverPosition(null);
        }}
        onMouseMove={handleMouseMove}
        onClick={handleImageClick}
      >
        {/* Image with error handling */}
        {imageUrl ? (
          <img
            src={`/${imageUrl}`}
            alt="Interactive map"
            className="w-[300px] h-[300px] object-contain pointer-events-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/default-map-image.png";
            }}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No image selected</span>
          </div>
        )}

        {/* Hover effects */}
        {isHovering && hoverPosition && (
          <div
            className="absolute w-3 h-3 bg-white border-2 border-red-500 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${hoverPosition.left}%`,
              top: `${hoverPosition.top}%`,
            }}
          />
        )}

        {/* Render all markers */}
        {markers.map((marker) => (
          <div
            key={`marker-${marker.id}`}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
            style={{
              left: `${marker.left}%`,
              top: `${marker.top}%`,
            }}
            onClick={(e) => handleMarkerClick(e, marker.id)}
          >
            <MapPin
              color="#ef4444"
              size={30}
              className="hover:scale-110 transition-transform"
              fill="#ef4444"
            />
          </div>
        ))}
      </div>

      {/* Status information */}
      <div className="mt-2 text-sm text-gray-600">
        {markers.length} {markers.length === 1 ? "marker" : "markers"} placed
      </div>

      {/* Error display */}
      {error && error.length > 0 && (
        <div className="mt-2">
          {error.map((err, idx) => (
            <p key={`error-${idx}`} className="text-sm text-red-600">
              {err}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default InteractiveImageMarker;
