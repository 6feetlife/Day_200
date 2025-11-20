import React from "react";

function FeaturedCard({ description, image, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: "100%",
        aspectRatio: "16/9",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        cursor: onClick ? "pointer" : "default",
        backgroundColor: image
          ? "transparent"
          : "rgba(31, 38, 94, 0.3)",
        backgroundImage: image ? `url(${image})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        marginBottom: "24px",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = "scale(1.01)";
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.4)";
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3)";
        }
      }}
    >
      {/* 하단 컨텐츠 영역 */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "12px 24px 10px 24px",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        {/* 설명 */}
        {description && (
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            {description}
          </div>
        )}
      </div>
    </div>
  );
}

export default FeaturedCard;

