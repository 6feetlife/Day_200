import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import photoBookImage from "../assets/photoBook.svg";
import PhotoCard from "../components/PhotoCard";
import FeaturedCard from "../components/FeaturedCard";
import ImageCarouselModal from "../components/ImageCarouselModal";

// 에버랜드 이미지들 import
import everland1 from "../assets/everland/everland_01.jpg";
import everland2 from "../assets/everland/everland_02.jpg";
import everland3 from "../assets/everland/everland_03.jpg";
import everland4 from "../assets/everland/everland_04.jpg";
import everland5 from "../assets/everland/everland_05.jpg";
import everland6 from "../assets/everland/everland_06.jpeg";
import everland7 from "../assets/everland/everland_07.jpg";

// 포장마차(streetFood) 이미지들 import
import streetFood1 from "../assets/streetFood/streetFood_01.jpg";
import streetFood2 from "../assets/streetFood/streetFood_02.jpg";
import streetFood3 from "../assets/streetFood/streetFood_03.jpg";

// 양평(yangpyeong) 이미지들 import
import yangpyeong1 from "../assets/yangpyeong/yangpyeong_01.jpg";
import yangpyeong2 from "../assets/yangpyeong/yangpyeong_02.jpg";
import yangpyeong3 from "../assets/yangpyeong/yangpyeong_03.jpg";
import yangpyeong4 from "../assets/yangpyeong/yangpyeong_04.jpg";
import yangpyeong5 from "../assets/yangpyeong/yangpyeong_05.jpg";
import yangpyeong6 from "../assets/yangpyeong/yangpyeong_06.jpg";
import yangpyeong7 from "../assets/yangpyeong/yangpyeong_07.jpg";
import yangpyeong8 from "../assets/yangpyeong/yangpyeong_08.jpg";
import yangpyeong9 from "../assets/yangpyeong/yangpyeong_09.jpg";
import yangpyeong10 from "../assets/yangpyeong/yangpyeong_10.jpg";
import yangpyeong11 from "../assets/yangpyeong/yangpyeong_11.jpg";
import yangpyeong12 from "../assets/yangpyeong/yangpyeong_12.jpg";

// 대부도(daebudo) 이미지들 import
import daebudo1 from "../assets/daebudo/daebudo_01.jpg";
import daebudo2 from "../assets/daebudo/daebudo_02.jpg";
import daebudo3 from "../assets/daebudo/daebudo_03.jpg";
import daebudo4 from "../assets/daebudo/daebudo_04.jpg";
import daebudo5 from "../assets/daebudo/daebudo_05.jpeg";
import daebudo6 from "../assets/daebudo/daebudo_06.jpeg";
import daebudo7 from "../assets/daebudo/daebudo_07.jpg";
import daebudo8 from "../assets/daebudo/daebudo_08.jpg";
import daebudo9 from "../assets/daebudo/daebudo_09.jpg";
import daebudo10 from "../assets/daebudo/daebudo_10.jpg";
import daebudo11 from "../assets/daebudo/daebudo_11.jpg";
import daebudo12 from "../assets/daebudo/daebudo_12.jpg";
import daebudo13 from "../assets/daebudo/daebudo_13.jpg";
import daebudo14 from "../assets/daebudo/daebudo_14.jpg";
import daebudo15 from "../assets/daebudo/daebudo_15.jpg";

// 서울(seoul) 이미지들 import
import seoul1 from "../assets/seoul/seoul_01.jpg";
import seoul2 from "../assets/seoul/seoul_02.JPG";
import seoul3 from "../assets/seoul/seoul_03.jpg";
import seoul4 from "../assets/seoul/seoul_04.jpg";
import seoul5 from "../assets/seoul/seoul_05.jpg";
import seoul6 from "../assets/seoul/seoul_06.jpeg";
import seoul7 from "../assets/seoul/seoul_07.jpg";
import seoul8 from "../assets/seoul/seoult_08.jpg";
import seoul9 from "../assets/seoul/seoul_09.jpg";
import seoul10 from "../assets/seoul/seoul_10.jpeg";
import seoul11 from "../assets/seoul/seoul_11.jpg";
import seoul12 from "../assets/seoul/seoul_12.jpg";
import seoul13 from "../assets/seoul/seoul_13.jpeg";
import seoul14 from "../assets/seoul/seoul_14.jpeg";
import seoul15 from "../assets/seoul/seoul_15.jpg";
import seoul16 from "../assets/seoul/seoul_16.jpg";
import seoul17 from "../assets/seoul/seoul_17.jpg";
import seoul18 from "../assets/seoul/seoul_18.jpg";
import seoul19 from "../assets/seoul/seoul_19.jpeg";
import seoul20 from "../assets/seoul/seoul_20.jpeg";

// 평택(pyeongtaek) 이미지들 import
import pyeongtaek1 from "../assets/pyeongtaek/pyeongtaek_01.jpg";
import pyeongtaek2 from "../assets/pyeongtaek/pyeongtaek_02.jpg";
import pyeongtaek3 from "../assets/pyeongtaek/pyeongtaek_03.jpg";
import pyeongtaek4 from "../assets/pyeongtaek/pyeongtaek_04.jpg";
import pyeongtaek5 from "../assets/pyeongtaek/pyeongtaek_05.jpeg";
import pyeongtaek6 from "../assets/pyeongtaek/pyeongtaek_06.jpeg";
import pyeongtaek7 from "../assets/pyeongtaek/pyeongtaek_07.jpeg";
import pyeongtaek8 from "../assets/pyeongtaek/pyeongtaek_08.jpeg";
import pyeongtaek9 from "../assets/pyeongtaek/pyeongtaek_09.jpeg";

// 삽교(sapgyo) 이미지들 import
import sapgyo1 from "../assets/sapgyo/sapgyo_01.jpg";
import sapgyo2 from "../assets/sapgyo/sapgyo_02.jpeg";
import sapgyo3 from "../assets/sapgyo/sapgyo_03.jpeg";
import sapgyo4 from "../assets/sapgyo/sapgyo_04.jpeg";
import sapgyo5 from "../assets/sapgyo/sapgyo_05.jpg";
import sapgyo6 from "../assets/sapgyo/sapgyo_06.jpg";
import sapgyo7 from "../assets/sapgyo/sapgyo_07.jpeg";
import sapgyo8 from "../assets/sapgyo/sapgyo_08.jpeg";
import sapgyo9 from "../assets/sapgyo/sapgyo_09.jpeg";
import sapgyo10 from "../assets/sapgyo/sapgyo_10.jpg";
import sapgyo11 from "../assets/sapgyo/sapgyo_11.jpg";
import sapgyo12 from "../assets/sapgyo/sapgyo_12.jpg";
import sapgyo13 from "../assets/sapgyo/sapgyo_13.jpg";
import sapgyo14 from "../assets/sapgyo/sapgyo_14.jpg";
import sapgyo15 from "../assets/sapgyo/sapgyo_15.jpg";
import sapgyo16 from "../assets/sapgyo/sapgyo_16.jpg";
import sapgyo17 from "../assets/sapgyo/sapgyo_17.jpg";
import sapgyo18 from "../assets/sapgyo/sapgyo_18.jpg";
import sapgyo19 from "../assets/sapgyo/sapgyo_19.jpg";
import sapgyo20 from "../assets/sapgyo/sapgyo_20.jpg";

// 가을(fall) 이미지들 import
import fall1 from "../assets/fall/fall_01.jpg";
import fall2 from "../assets/fall/fall_02.jpg";
import fall3 from "../assets/fall/fall_03.jpg";
import fall4 from "../assets/fall/fall_04.jpg";
import fall5 from "../assets/fall/fall_05.jpg";
import fall6 from "../assets/fall/fall_06.jpg";
import fall7 from "../assets/fall/fall_07.jpg";
import fall8 from "../assets/fall/fall_08.jpg";
import fall9 from "../assets/fall/fall_09.jpg";
import fall10 from "../assets/fall/fall_10.jpg";

function PhotoPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalDescription, setModalDescription] = useState("");

  // 이미지 배열
  const everlandImages = [
    everland1,
    everland2,
    everland3,
    everland4,
    everland5,
    everland6,
    everland7,
  ];

  const streetFoodImages = [
    streetFood1,
    streetFood2,
    streetFood3,
  ];

  const yangpyeongImages = [
    yangpyeong1,
    yangpyeong2,
    yangpyeong3,
    yangpyeong4,
    yangpyeong5,
    yangpyeong6,
    yangpyeong7,
    yangpyeong8,
    yangpyeong9,
    yangpyeong10,
    yangpyeong11,
    yangpyeong12,
  ];

  const daebudoImages = [
    daebudo1,
    daebudo2,
    daebudo3,
    daebudo4,
    daebudo5,
    daebudo6,
    daebudo7,
    daebudo8,
    daebudo9,
    daebudo10,
    daebudo11,
    daebudo12,
    daebudo13,
    daebudo14,
    daebudo15,
  ];

  const seoulImages = [
    seoul1,
    seoul2,
    seoul3,
    seoul4,
    seoul5,
    seoul6,
    seoul7,
    seoul8,
    seoul9,
    seoul10,
    seoul11,
    seoul12,
    seoul13,
    seoul14,
    seoul15,
    seoul16,
    seoul17,
    seoul18,
    seoul19,
    seoul20,
  ];

  const pyeongtaekImages = [
    pyeongtaek1,
    pyeongtaek2,
    pyeongtaek3,
    pyeongtaek4,
    pyeongtaek5,
    pyeongtaek6,
    pyeongtaek7,
    pyeongtaek8,
    pyeongtaek9,
  ];

  const sapgyoImages = [
    sapgyo1,
    sapgyo2,
    sapgyo3,
    sapgyo4,
    sapgyo5,
    sapgyo6,
    sapgyo7,
    sapgyo8,
    sapgyo9,
    sapgyo10,
    sapgyo11,
    sapgyo12,
    sapgyo13,
    sapgyo14,
    sapgyo15,
    sapgyo16,
    sapgyo17,
    sapgyo18,
    sapgyo19,
    sapgyo20,
  ];

  const fallImages = [
    fall1,
    fall2,
    fall3,
    fall4,
    fall5,
    fall6,
    fall7,
    fall8,
    fall9,
    fall10,
  ];


  // 큰 박스 데이터
  const featuredCard = {
    description: "에버랜드 첫 데이트이자 1일로 만들어줬던 날",
    image: everland7, // everland_07.jpg
  };

  // 맨 아래 큰 박스 데이터 (가을)
  const fallFeaturedCard = {
    description: "단풍 데이트",
    image: fall1, // fall_01.jpg
  };

  // 샘플 데이터 (나중에 실제 데이터로 교체 가능)
  const photoCards = [
    {
      id: 1,
      title: "포장마차 데이트",
      subtitle: "2025.05.17_안산",
      image: streetFood2, // streetFood_02.jpg 썸네일
    },
    {
      id: 2,
      title: "우리 커플 첫 여행",
      subtitle: "2025.05.20~23_양평",
      image: yangpyeong7, // yangpyeong_07.jpg 썸네일
    },
    {
      id: 3,
      title: "대부도 여행",
      subtitle: "2025.06.21_대부도",
      image: daebudo1, // daebudo_01.jpg 썸네일
    },
    {
      id: 4,
      title: "서울 데이트",
      subtitle: "2025.07.01_대학로",
      image: seoul13, // seoul_13.jpeg 썸네일
    },
    {
      id: 5,
      title: "평택 데이트",
      subtitle: "2025.10.03_평택",
      image: pyeongtaek6, // pyeongtaek_06.jpeg 썸네일
    },
    {
      id: 6,
      title: "삽교 데이트",
      subtitle: "2025.10.18_삽교호",
      image: sapgyo7, // sapgyo_07.jpeg 썸네일
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