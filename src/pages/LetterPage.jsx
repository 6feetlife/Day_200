import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import letterBackImage from "../assets/letterBack.jpg";

function LetterPage() {
  const navigate = useNavigate();

  const letterContent = `안녕 민지!

오늘 우리 200일이야! 나랑 같이 벌써 연애한지 반년이 넘었다는게 신기하고 너무 고마워❤️
원래 이번 겨울에는 내가 취업해서 자기 뭐라도 사주려고 했는데 상황이 뜻대로 움직여주질 않네..ㅎㅎ
꽃이랑 편지로 이번 200일을 넘기고싶진 않아서 내가
뭘 할 수 있을까 생각하다가 작은 웹페이지를 만들어 봤어 부족한 실력이지만 이쁘게 봐줬으면 좋겠다❤️

이번에 사진을 시간별로 정리하면서 묶어봤는데 우리
생각보다 많이 여행 다녔더라? 물론 매번 이쁜 숙소에서 2박3일 이렇게 보내고 오는 여행은 아니었지만 그래도 나는 자기랑 같이 여행 다닐 수 있어서 좋았어!
️이곳 저곳 다니면서 자기랑 보낸 시간, 기억들을 남길 수 있는게 너무 좋은거 같아! 어디 멀리 가거나 서로 잠시 떨어져 있어야하는 일이 생기더라도 그 장소에 자기랑 같이 보낸 추억들이 있다면 혼자 다니더라도 행복하게 잘 다닐 수 있을거같아 그러니까 우리 앞으로도 소소하게 라도 잘 놀러 다니자❤️

자기랑 같이 이쁘고 새로운곳 돌아다니는것 자체로도
재밋고 좋지만 이번에 평택에서 단풍 보면서 산책했을때 동물들이랑 이쁜 풍경 보면서 눈이 반짝반짝 빛나며 웃는 민지 얼굴 보면서 나는 자기를 이렇게 데리고 다니면서 이쁜거 보여주고 자기가 좋아하는 모습이 좋은거구나 느꼈어 ㅎㅎ 엄청 해맑게 웃으면서 눈이 초롱초롱해서 풍경을 보는 민지는 진짜 이쁘고 귀여웠어❤️

에버랜드부터 대부도, 삽교 처럼 바다랑 호수도 가보고
안산에서 자주 했던 여름밤 산책들 너무 행복했어!
앞으로도 같이 있을 시간은 많지만 정작 볼 수 있는 시간을 생각해보면 주말에만 볼 수 있으니까 뭔가 조금 그렇네..

되게 짧은 시간동안 취준생이었다가 내가 바쁘고 자기가 날 기다려주고 반대로 지금은 내가 자기를 기다리고 있는 상황을 다 겪고 있는게 신기하고 다행이라고 생각해 예방주사처럼 미리 조금씩 경험해봤잖아? 내가 어디로 파견나갈지 모르겠지만 조금 멀더라도, 너무 보고싶더라도 잘 버틸 수 있을거같다는 생각이 들어!
물론 엄첨 보고 싶겠지만 나중에 우리 더 오래오래 
같이 있기 위해 준비하는거니까 잘 견뎌보자! 
나도 노력할게!!

새로운 커리어를 시작하는 민지!
항상 도전하고 배우려하는 민지!
힘들더라도 남자친구 챙겨주는 민지!

자기가 생각하기에 저런 모습이 아니더라도 괜찮아
어떤 모습이든 민지여서 좋은거고 내가 지금까지 봐 온
민지는 저런 모습이었으니까!
어렵고 힘들고 지쳐서 칭얼거리고 가끔 짜증내도 좋아
다만 그때에도 내 연락이, 나랑 같이 있는 시간이 자기한테  충전의 시간이었으면 좋겠다

곧 새해야! 우리 26년에도 행복하게 이쁜 추억 만들면서 시간 보내자! 많이 사랑해 민지야❤️

나랑 만나줘서 고마워 앞으로도 이쁘게 만나자 공주❤️`;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: `url("${letterBackImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#03174C",
        overflowY: "hidden",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* 뒤로가기 버튼 */}
      <motion.button
        onClick={() => navigate("/photo")}
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

      {/* 컨텐츠 컨테이너 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        {/* 편지 내용 영역 */}
        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            maxHeight: "calc(100vh * 0.55)",
            overflowY: "auto",
            marginTop: "170px",
          }}
        >
          {/* 편지 내용 */}
          <div
            style={{
              whiteSpace: "pre-wrap",
              fontSize: "14px",
              color: "#ffffff",
              lineHeight: "1.6",
            }}
          >
            {letterContent}
          </div>
        </div>

        {/* 200일 축하해 버튼 */}
        <motion.button
          onClick={() => navigate("/bye")}
          style={{
            backgroundColor: "#8E97FD",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "30px",
            padding: "14px 20px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            minWidth: "230px",
            marginTop: "10px",
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
          200일 축하해!
        </motion.button>
      </div>
    </div>
  );
}

export default LetterPage;