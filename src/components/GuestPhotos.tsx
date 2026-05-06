import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Camera } from "lucide-react";

interface Photo {
  image_url: string;
  sender: string;
  timestamp: string;
}

const API_URL = "https://api.inviteyours.com/api/wedding-photos";

const GuestPhotos = () => {
  const { ref, isVisible } = useScrollAnimation();

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);

  // 👉 MODAL + SWIPE STATE
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  // 👉 Fetch photos
  const fetchPhotos = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch photos");

      const data: Photo[] = await res.json();
      setPhotos(data);
      setShowPhotos(true);
    } catch (err) {
      console.error("Photo fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  // 👉 Swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null || selectedIndex === null) return;

    const distance = touchStart - touchEnd;

    // Swipe LEFT → next
    if (distance > minSwipeDistance && selectedIndex < photos.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }

    // Swipe RIGHT → prev
    if (distance < -minSwipeDistance && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-script text-3xl text-secondary">
            Shared Memories
          </span>

          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">
            Guest Photos
          </h2>

          <p className="font-body text-sm text-muted-foreground mt-3">
            Photos shared by our guests via Telegram
          </p>

          <div className="w-16 h-px bg-secondary mx-auto mt-4" />
        </div>

        {/* View Button */}
        {!showPhotos && (
          <div className="text-center">
            <button
              onClick={fetchPhotos}
              className="btn-gold inline-flex items-center gap-2"
            >
              <Camera size={16} />
              View Guest Photos
            </button>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <p className="text-center text-muted-foreground mt-6">
            Loading photos...
          </p>
        )}

        {/* Gallery */}
        {showPhotos && !loading && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden shadow-lg border border-secondary/20"
              >
                <img
                  src={photo.image_url}
                  alt={`Photo by ${photo.sender}`}
                  onClick={() => setSelectedIndex(i)}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                  loading="lazy"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent p-3">
                  <div className="flex items-center gap-2">
                    <Camera size={14} className="text-secondary" />
                    <span className="font-body text-xs text-background">
                      {photo.sender || "Guest"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Share Button */}
        <div className="text-center mt-8">
          <a
            href="https://t.me/Tolosagudina_80th_birthdaybot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
          >
            <Camera size={16} />
            Share Your Photos
          </a>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Image */}
            <img
              key={photos[selectedIndex].image_url}
              src={photos[selectedIndex].image_url}
              alt="Preview"
              className="max-h-full max-w-full object-contain rounded-lg transition-all duration-300"
            />

            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 text-white bg-black/60 px-3 py-1 rounded"
            >
              ✕
            </button>

            {/* Prev */}
            {selectedIndex > 0 && (
              <button
                onClick={() => setSelectedIndex(selectedIndex - 1)}
                className="absolute left-4 text-white bg-black/60 px-3 py-2 rounded"
              >
                ‹
              </button>
            )}

            {/* Next */}
            {selectedIndex < photos.length - 1 && (
              <button
                onClick={() => setSelectedIndex(selectedIndex + 1)}
                className="absolute right-4 text-white bg-black/60 px-3 py-2 rounded"
              >
                ›
              </button>
            )}

            {/* Sender */}
            <p className="absolute bottom-6 text-white text-sm opacity-80">
              {photos[selectedIndex].sender || "Guest"}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GuestPhotos;