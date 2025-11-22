import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ImageCarouselModal({ images, description, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 모달이 열릴 때마다 currentIndex를 0으로 리셋
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen, images]);
  
  // 현재 이미지의 앞뒤 이미지 미리 로드
  useEffect(() => {
    if (!isOpen || images.length === 0) return;

    const preloadImages = () => {
      // 현재 이미지
      const current = images[currentIndex];
      if (current) {
        const img = new Image();
        img.src = current;
      }

      // 다음 이미지
      const nextIndex = (currentIndex + 1) % images.length;
      const next = images[nextIndex];
      if (next) {
        const img = new Image();
        img.src = next;
      }

      // 이전 이미지
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      const prev = images[prevIndex];
      if (prev) {
        const img = new Image();
        img.src = prev;
      }

      // 다음 다음 이미지 (더 부드러운 전환을 위해)
      const nextNextIndex = (currentIndex + 2) % images.length;
      const nextNext = images[nextNextIndex];
      if (nextNext) {
        const img = new Image();
        img.src = nextNext;
      }

      // 이전 이전 이미지
      const prevPrevIndex = (currentIndex - 2 + images.length) % images.length;
      const prevPrev = images[prevPrevIndex];
      if (prevPrev) {
        const img = new Image();
        img.src = prevPrev;
      }
    };

    preloadImages();
  }, [currentIndex, images, isOpen]);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onClose}
      >
        {/* 상단 이미지 카운터 */}
        {images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              position: "absolute",
              top: "20px",
              // left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(10px)",
              padding: "8px 16px",
              borderRadius: "20px",
              zIndex: 1001,
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <span
              style={{
                color: "#FFFFFF",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              {currentIndex + 1} / {images.length}
            </span>
          </motion.div>
        )}

        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            border: "none",
            color: "#FFFFFF",
            fontSize: "24px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1001,
            backdropFilter: "blur(10px)",
          }}
        >
          ×
        </button>

        {/* 이미지 컨테이너 */}
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            padding: "60px 20px 100px 20px",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 이미지 슬라이더 */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(event, info) => {
              const threshold = 50; // 최소 드래그 거리
              if (info.offset.x > threshold) {
                prevImage();
              } else if (info.offset.x < -threshold) {
                nextImage();
              }
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              cursor: "grab",
            }}
            whileDrag={{ cursor: "grabbing" }}
          >
            <motion.img
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: "calc(100vh - 200px)",
                objectFit: "contain",
                borderRadius: "12px",
                userSelect: "none",
                pointerEvents: "none",
                willChange: "opacity",
              }}
              draggable={false}
              loading="eager"
            />
          </motion.div>
        </div>

        {/* 하단 설명 영역 */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "0px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(10px)",
            textAlign: "center",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {description && (
            <p
              style={{
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "400",
                margin: "0 0 90px 0",
              }}
            >
              {description}
            </p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ImageCarouselModal;

