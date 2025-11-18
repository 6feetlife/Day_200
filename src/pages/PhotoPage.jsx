import React, { useState, useEffect } from "react";
import heic2any from "heic2any";
import photoBookImage from "../assets/photoBook.svg";
import PhotoCard from "../components/PhotoCard";
import FeaturedCard from "../components/FeaturedCard";
import ImageCarouselModal from "../components/ImageCarouselModal";
import everlandImage from "../assets/everland/IMG_5432.PNG";

// 에버랜드 이미지들 import
import everland1 from "../assets/everland/IMG_5363.HEIC";
import everland2 from "../assets/everland/IMG_5372.HEIC";
import everland3 from "../assets/everland/IMG_5389.HEIC";
import everland4 from "../assets/everland/IMG_5393.HEIC";
import everland5 from "../assets/everland/IMG_5394.HEIC";
import everland6 from "../assets/everland/IMG_5423.JPG";
import everland7 from "../assets/everland/IMG_5432.PNG";

function PhotoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [convertedImages, setConvertedImages] = useState([]);
  const [isConverting, setIsConverting] = useState(true);

  // 원본 이미지 배열 (HEIC 포함)
  const originalImages = [
    everland1,
    everland2,
    everland3,
    everland4,
    everland5,
    everland6,
    everland7,
  ];

  // HEIC 파일 변환
  useEffect(() => {
    const convertHeicImages = async () => {
      try {
        const converted = await Promise.all(
          originalImages.map(async (image) => {
            // import한 이미지는 전부 문자열 URL이니까, 일단 전부 fetch
            if (typeof image !== "string") return image;
  
            try {
              const response = await fetch(image);
              const blob = await response.blob();
  
              // 경로 / MIME 둘 다로 HEIC 판별
              const isHeicPath = image.toLowerCase().includes(".heic");
              const isHeicMime =
                blob.type === "image/heic" || blob.type === "image/heif";
  
              if (isHeicPath || isHeicMime) {
                const convertedResult = await heic2any({
                  blob,
                  toType: "image/jpeg",
                  quality: 0.9,
                });
  
                const resultBlob = Array.isArray(convertedResult)
                  ? convertedResult[0]
                  : convertedResult;
  
                return URL.createObjectURL(resultBlob); // ✅ 변환된 JPG URL
              }
  
              // JPG / PNG 등은 그냥 원래 URL 그대로 사용
              return image;
            } catch (error) {
              console.error("이미지 변환 실패:", error);
              return image;
            }
          })
        );
  
        setConvertedImages(converted);
      } catch (error) {
        console.error("이미지 변환 중 오류:", error);
        setConvertedImages(originalImages);
      } finally {
        setIsConverting(false);
      }
    };
  
    convertHeicImages();
  }, []);

  // 에버랜드 이미지 배열 (변환된 이미지 사용)
  const everlandImages = convertedImages.length > 0 ? convertedImages : originalImages;

  // 큰 박스 데이터
  const featuredCard = {
    description: "에버랜드 첫 데이트이자 1일로 만들어줬던 날",
    image: everlandImage,
  };

  // 샘플 데이터 (나중에 실제 데이터로 교체 가능)
  const photoCards = [
    {
      id: 1,
      title: "Night Island",
      subtitle: "45 MIN • SLEEP MUSIC",
      image: null, // 이미지 경로 추가 가능
    },
    {
      id: 2,
      title: "Sweet Sleep",
      subtitle: "45 MIN • SLEEP MUSIC",
      image: null,
    },
    {
      id: 3,
      title: "Night Island",
      subtitle: "45 MIN • SLEEP MUSIC",
      image: null,
    },
    {
      id: 4,
      title: "Sweet Sleep",
      subtitle: "45 MIN • SLEEP MUSIC",
      image: null,
    },
    {
      id: 5,
      title: "Night Island",
      subtitle: "45 MIN • SLEEP MUSIC",
      image: null,
    },
    {
      id: 6,
      title: "Sweet Sleep",
      subtitle: "45 MIN • SLEEP MUSIC",
      image: null,
    },
  ];

  const handleCardClick = (cardId) => {
    console.log("Card clicked:", cardId);
    // 카드 클릭 시 동작 추가 가능
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: `url("${photoBookImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#03174C",
        overflowY: "auto",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* 헤더 */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
          paddingTop: "60px",
        }}
      >
        <h1
          style={{
            color: "#FFFFFF",
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "8px",
          }}
        >
          Photo Book
        </h1>
        <p
          style={{
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          우리가 데이트했던 사진들을 모아봤어!!
        </p>
      </div>

      {/* 컨텐츠 컨테이너 */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          paddingBottom: "40px",
        }}
      >
        {/* 큰 박스 (Featured Card) */}
        <FeaturedCard
          description={featuredCard.description}
          image={featuredCard.image}
          onClick={() => setIsModalOpen(true)}
        />

        {/* 이미지 케러셀 모달 */}
        <ImageCarouselModal
          images={everlandImages}
          description={featuredCard.description}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        {/* 작은 박스 그리드 레이아웃 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
          }}
        >
          {photoCards.map((card) => (
            <PhotoCard
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoPage;