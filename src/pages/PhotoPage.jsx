import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import photoBookImage from "../assets/photoBook.svg";
import PhotoCard from "../components/PhotoCard";
import FeaturedCard from "../components/FeaturedCard";
import ImageCarouselModal from "../components/ImageCarouselModal";
import { getCategoryImages, getCategoryImage } from "../config/images";

function PhotoPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalDescription, setModalDescription] = useState("");

  // 네이버 클라우드 스토리지에서 이미지 배열 가져오기
  const everlandImages = getCategoryImages('everland');
  const streetFoodImages = getCategoryImages('streetFood');
  const yangpyeongImages = getCategoryImages('yangpyeong');
  const daebudoImages = getCategoryImages('daebudo');
  const seoulImages = getCategoryImages('seoul');
  const pyeongtaekImages = getCategoryImages('pyeongtaek');
  const sapgyoImages = getCategoryImages('sapgyo');
  const fallImages = getCategoryImages('fall');


  // 큰 박스 데이터
  const featuredCard = {
    description: "에버랜드 첫 데이트이자 1일로 만들어줬던 날",
    image: getCategoryImage('everland', 6), // everland_07.jpg (인덱스 6)
  };

  // 맨 아래 큰 박스 데이터 (가을)
  const fallFeaturedCard = {
    description: "단풍 데이트",
    image: getCategoryImage('fall', 0), // fall_01.jpg
  };

  // 샘플 데이터 (나중에 실제 데이터로 교체 가능)
  const photoCards = [
    {
      id: 1,
      title: "포장마차 데이트",
      subtitle: "2025.05.17_안산",
      image: getCategoryImage('streetFood', 1), // streetFood_02.jpg 썸네일 (인덱스 1)
    },
    {
      id: 2,
      title: "우리 커플 첫 여행",
      subtitle: "2025.05.20~23_양평",
      image: getCategoryImage('yangpyeong', 6), // yangpyeong_07.jpg 썸네일 (인덱스 6)
    },
    {
      id: 3,
      title: "대부도 여행",
      subtitle: "2025.06.21_대부도",
      image: getCategoryImage('daebudo', 0), // daebudo_01.jpg 썸네일
    },
    {
      id: 4,
      title: "서울 데이트",
      subtitle: "2025.07.01_대학로",
      image: getCategoryImage('seoul', 12), // seoul_13.jpeg 썸네일 (인덱스 12)
    },
    {
      id: 5,
      title: "평택 데이트",
      subtitle: "2025.10.03_평택",
      image: getCategoryImage('pyeongtaek', 5), // pyeongtaek_06.jpeg 썸네일 (인덱스 5)
    },
    {
      id: 6,
      title: "삽교 데이트",
      subtitle: "2025.10.18_삽교호",
      image: getCategoryImage('sapgyo', 6), // sapgyo_07.jpeg 썸네일 (인덱스 6)
    },
  ];

  const handleCardClick = (cardId) => {
    if (cardId === 1) {
      // 포장마차 데이트 카드
      setModalImages(streetFoodImages);
      setModalDescription("포장마차 데이트");
      setIsModalOpen(true);
    } else if (cardId === 2) {
      // 양평 여행 카드
      setModalImages(yangpyeongImages);
      setModalDescription("우리 커플 첫 여행");
      setIsModalOpen(true);
    } else if (cardId === 3) {
      // 대부도 여행 카드
      setModalImages(daebudoImages);
      setModalDescription("대부도 여행");
      setIsModalOpen(true);
    } else if (cardId === 4) {
      // 서울 데이트 카드
      setModalImages(seoulImages);
      setModalDescription("서울 데이트");
      setIsModalOpen(true);
    } else if (cardId === 5) {
      // 평택 데이트 카드
      setModalImages(pyeongtaekImages);
      setModalDescription("평택 데이트");
      setIsModalOpen(true);
    } else if (cardId === 6) {
      // 삽교 데이트 카드
      setModalImages(sapgyoImages);
      setModalDescription("삽교 데이트");
      setIsModalOpen(true);
    } else {
      console.log("Card clicked:", cardId);
      // 다른 카드 클릭 시 동작 추가 가능
    }
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
      {/* 뒤로가기 버튼 */}
      <motion.button
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          top: "16px",
          left: "16px",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "#FFFFFF",
          fontSize: "16px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          padding: 0,
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: "rgba(255, 255, 255, 0.25)",
        }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </motion.button>

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
          onClick={() => {
            setModalImages(everlandImages);
            setModalDescription(featuredCard.description);
            setIsModalOpen(true);
          }}
        />

        {/* 이미지 케러셀 모달 */}
        <ImageCarouselModal
          images={modalImages.length > 0 ? modalImages : everlandImages}
          description={modalDescription || featuredCard.description}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setModalImages([]);
            setModalDescription("");
          }}
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

        {/* 맨 아래 큰 박스 (가을 Featured Card) */}
        <div style={{ marginTop: "18px" }}>
          <FeaturedCard
            description={fallFeaturedCard.description}
            image={fallFeaturedCard.image}
            onClick={() => {
              setModalImages(fallImages);
              setModalDescription(fallFeaturedCard.description);
              setIsModalOpen(true);
            }}
          />
        </div>

        {/* 본석이 편지 읽기 버튼 */}
        <motion.button
          onClick={() => navigate("/letter")}
          style={{
            width: "100%",
            backgroundColor: "#8E97FD",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "30px",
            padding: "14px 20px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            marginTop: "24px",
            marginBottom: "40px",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 6px 20px rgba(142, 151, 253, 0.4)",
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          본석이 편지 읽기
        </motion.button>
      </div>
    </div>
  );
}

export default PhotoPage;