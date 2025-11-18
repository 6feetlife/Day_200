import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ImageCarouselModal({ images, description, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: "calc(100vh - 200px)",
                objectFit: "contain",
                borderRadius: "12px",
                userSelect: "none",
                pointerEvents: "none",
              }}
              draggable={false}
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
            padding: "20px",
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
                margin: "0 0 10px 0",
              }}
            >
              {description}
            </p>
          )}
          {images.length > 1 && (
            <p
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "14px",
                fontWeight: "400",
                margin: 0,
              }}
            >
              {currentIndex + 1} / {images.length}
            </p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ImageCarouselModal;

