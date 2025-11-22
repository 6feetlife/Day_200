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
  const [modalDescriptions, setModalDescriptions] = useState([]);

  // 네이버 클라우드 스토리지에서 이미지 배열 가져오기
  const everlandImages = getCategoryImages('everland');
  const streetFoodImages = getCategoryImages('streetFood');
  const yangpyeongImages = getCategoryImages('yangpyeong');
  const daebudoImages = getCategoryImages('daebudo');
  const seoulImages = getCategoryImages('seoul');
  const pyeongtaekImages = getCategoryImages('pyeongtaek');
  const sapgyoImages = getCategoryImages('sapgyo');
  const fallImages = getCategoryImages('fall');

  // 에버랜드 이미지별 설명 배열
  const everlandDescriptions = [
    "민지가 좋아하는 라일락이 있어서 나도 기분 좋았어!",
    "이렇게 머리띠 쓰고 해맑게 웃는거 너무 이뻐❤️",
    "츄러스 진짜 맛있었는데 ㅠㅜ 나중에 또 먹으러 가장!",
    "새침 공주 밍지❤️",
    "나연이가 자기 잘 나왔다고 말해준 사진이야! 역시 짱 이뻐",
    "나랑 같이 찍은것도 넣어봤어 ㅎㅎ",
    "우리 첫 네컷 사진이야❤️",
  ];

  // 포장마차 이미지별 설명 배열
  const streetFoodDescriptions = [
    "내 첫 포장마차이자 우리의 첫 포장마차였어! 짠~",
    "너무 해보고 싶었어..❤️",
    "나중에 또 가자 !!",
  ];

  // 양평 이미지별 설명 배열
  const yangpyeongDescriptions = [
    "첫 휴게소 간식! 저번에 갔던 만남의 광장도 좋았어 ㅎㅎ",
    "한적하고 정원 관리가 잘 되어있어서 '내가 잘 찾아봤군' 하고 뿌듯했지!",
    "한적하고 정원 관리가 잘 되어있어서 '내가 잘 찾아봤군' 하고 뿌듯했지!",
    "단호방 빙수 짱 맛있었어! 자기가 단호박 잘먹어서 다행이었어",
    "우리 이쁜 민지 완전 청순해 ❤️",
    "우리 첫 바비큐였어! 그래도 내가 나름 나쁘지 않게 고기를 구운것 같아 다행이었어",
    "민지가 해준 계란말이❤️",
    "사진 찍어주고 싶었는데 어색해도 포즈 취해줘서 너무 고마웠어",
    "사진 찍어주고 싶었는데 어색해도 포즈 취해줘서 너무 고마웠어",
    "우리의 성공적인 요리! 여행의 마지막 저녁이라 더 맛있었어",
    "다음에 여행갈때도 마스크팩하자❤️",
    "앞으로도 이쁜곳 여행 많이 다니자 공주❤️",
  ];

  // 대부도 이미지별 설명 배열
  const daebudoDescriptions = [
    "내 최애 사진중 하나야",
    "조개 듬뿍 들어간 칼국수도 맛있었어! 민지가 이쁘게 나와서 이 사진 넣어봤어❤️",
    "진짜 뷰 최고였어..!",
    "민지가 좋아하는 사진이지? 민지랑 있으면 편안해 지나봥",
    "통창이라 그런지 빛이 잘들어와서 이쁜 사진 많이 건진것같아",
    "통창이라 그런지 빛이 잘들어와서 이쁜 사진 많이 건진것같아",
    "민지 아니었다면 천장에 비치는것도 몰랐을거야 ㅎㅎ",
    "피자집 뷰도 너무 좋았어 이날 날씨가 좋아서 다행이었어",
    "밤에 다른 사람없이 우리끼리 이렇게 사진 찍을 수 있어서 좋았어",
    "밤에 다른 사람없이 우리끼리 이렇게 사진 찍을 수 있어서 좋았어",
    "내 로망! 귀엽게 봐줘서 고마웠어❤️",
    "남친 따라하는 밍지❤️",
    "처음에 내걸로 찍자고 하는줄 알았는데 ㅋㅋㅋ",
    "우리 이쁜 거울샷 ㅎㅎ",
    "다음에 또 놀러오장❤️",
  ];

  // 서울 이미지별 설명 배열
  const seoulDescriptions = [
    "더운데도 잘 따라와주고 사진도 찍어주고 이뻐❤️",
    "이날 진짜 공주님이었는데...❤️ 밍지 왕관 사줄까?",
    "이날 진짜 공주님이었는데...❤️ 밍지 왕관 사줄까?",
    "민지 덕분에 건진 이쁜 거울샷!",
    "쀼 ❤️",
    "역시 이날 민지 짱이뻤어",
    "빙수 기다리며 서로 사진찍어주면서 놀았었는데 ㅎㅎ",
    "빙수 기다리며 서로 사진찍어주면서 놀았었는데 ㅎㅎ",
    "이날 연극 너무 재밋었어! 소소한 역할도 맡겨보고 최고였어 ㅎㅎ",
    "이날 연극 너무 재밋었어! 소소한 역할도 맡겨보고 최고였어 ㅎㅎ",
    "운세 뽑기! 내추억박스에 있지~",
    "이제보니 레드가 잘어울리네 공주?",
    "여름에 먹은 붕어빵!",
    "여름에 먹은 붕어빵!",
    "덥고 힘들었을텐데도 남친 사진 찍어주는건없지❤️",
    "진짜 짱 이뻐❤️",
    "진짜 짱 이뻐❤️",
    "나도 이날 나름 최선을 다해 찍어줬었는데 만족스러운 사진이 나와서 좋았지",
    "이번 겨울이나 봄에 다시한번 가보자 공주❤️",
    "이번 겨울이나 봄에 다시한번 가보자 공주❤️",
  ];

  // 평택 이미지별 설명 배열
  const pyeongtaekDescriptions = [
    "우리 공주는 놀이터에서는 에너지가 두배가 되는거 같아..!",
    "바람이 많이 불긴했지만 여기 보여줄 수 있어서 너무 좋았어",
    "서로 싱크가 안맞았었지 ㅋㅋㅋ",
    "하트 ~♥️",
    "우리 둘다 입술 삐죽 뽀뽀였네 ㅎㅎ",
    "나중에 또가자! 자기가 막창도 먹어서 다행이야♥️",
  ];

  // 삽교 이미지별 설명 배열
  const sapgyoDescriptions = [
    "오랜만에 먹은 샤브샤브! 우리 둘다 배부르게 잘먹어서 너무 좋았어",
    "밥먹고 공원 산책하면서 찍은 두둥! 사진",
    "밥먹고 공원 산책하면서 찍은 두둥! 사진",
    "여기서 폭죽도 많이 봤는데 그칭? 버스킹도 하구.. 분위기 최고였어!!",
    "민지가 구도 잘잡아줘서 이쁘게 잘 찍었어❤️",
    "민지가 구도 잘잡아줘서 이쁘게 잘 찍었어❤️",
    "쪼그려서 귀엽지 붙어서 찍은 사진이야 그리고 엄지 너무 이쁘게 나와서 좋아",
    "쪼그려서 귀엽지 붙어서 찍은 사진이야 그리고 엄지 너무 이쁘게 나와서 좋아",
    "쪼그려서 귀엽지 붙어서 찍은 사진이야 그리고 엄지 너무 이쁘게 나와서 좋아",
    "이날 무서웠는데.. 그래도 높은곳이어서 뷰가 좋았었어!",
    "이날 무서웠는데.. 그래도 높은곳이어서 뷰가 좋았었어!",
    "밍지가 찍어준 사진! 공주가 조명까지 보변서 열심히 찍어줬는뎅 ❤️",
    "밍지가 찍어준 사진! 공주가 조명까지 보변서 열심히 찍어줬는뎅 ❤️",
    "밍지가 찍어준 사진! 공주가 조명까지 보변서 열심히 찍어줬는뎅 ❤️",
    "우리 밍지 공주❤️",
    "우리 밍지 공주❤️",
    "우리 밍지 공주❤️",
    "우리 밍지 공주❤️",
    "제일 조명 없이 잘나온 같아",
    "다음번 관람차는 안떨어볼게...!",
  ];

  // 단풍 이미지별 설명 배열
  const fallDescriptions = [
    "배불렀을때 먹었는데도 엄청 맛있었어!",
    "짱 귀여운 미니언즈 ㅎㅎ 회색으로 맞춰 입은것도 귀여웠징",
    "날씨가 너무 좋아서 다행이었어",
    "단풍이야! 🍁",
    "밍지가 엄청 좋아하던 철새",
    "오리 보는 밍지 짱 귀여워",
    "오리 보는 밍지 짱 귀여워",
    "진짜 이빨 두개 있는 해맑은 아가같아❤️",
    "쁘이✌🏻",
    "사진 찍어주고싶다는 말에 잘 맞춰줘서 고마웡❤️",
  ];


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
      setModalDescriptions(streetFoodDescriptions);
      setIsModalOpen(true);
    } else if (cardId === 2) {
      // 양평 여행 카드
      setModalImages(yangpyeongImages);
      setModalDescription("우리 커플 첫 여행");
      setModalDescriptions(yangpyeongDescriptions);
      setIsModalOpen(true);
    } else if (cardId === 3) {
      // 대부도 여행 카드
      setModalImages(daebudoImages);
      setModalDescription("대부도 여행");
      setModalDescriptions(daebudoDescriptions);
      setIsModalOpen(true);
    } else if (cardId === 4) {
      // 서울 데이트 카드
      setModalImages(seoulImages);
      setModalDescription("서울 데이트");
      setModalDescriptions(seoulDescriptions);
      setIsModalOpen(true);
    } else if (cardId === 5) {
      // 평택 데이트 카드
      setModalImages(pyeongtaekImages);
      setModalDescription("평택 데이트");
      setModalDescriptions(pyeongtaekDescriptions);
      setIsModalOpen(true);
    } else if (cardId === 6) {
      // 삽교 데이트 카드
      setModalImages(sapgyoImages);
      setModalDescription("삽교 데이트");
      setModalDescriptions(sapgyoDescriptions);
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
            setModalDescriptions(everlandDescriptions);
            setIsModalOpen(true);
          }}
        />

        {/* 이미지 케러셀 모달 */}
        <ImageCarouselModal
          images={modalImages.length > 0 ? modalImages : everlandImages}
          description={modalDescription || featuredCard.description}
          descriptions={modalDescriptions.length > 0 ? modalDescriptions : null}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setModalImages([]);
            setModalDescription("");
            setModalDescriptions([]);
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
              setModalDescriptions(fallDescriptions);
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