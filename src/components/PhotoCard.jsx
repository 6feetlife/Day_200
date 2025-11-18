import React from "react";

function PhotoCard({ title, subtitle, image, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: "100%",
        aspectRatio: "1",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        backgroundImage: image ? `url(${image})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
      }}
    >
      {/* 그라데이션 오버레이 */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "14px 16px",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        {subtitle && (
          <div
            style={{
              color: "rgba(255, 255, 255, 0.85)",
              fontSize: "11px",
              fontWeight: "400",
              marginBottom: "4px",
            }}
          >
            {subtitle}
          </div>
        )}
        <div
          style={{
            color: "#FFFFFF",
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          {title}
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;

