import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import byeImage from "../assets/bye.svg";

function ByePage() {
  const [snowflakes, setSnowflakes] = useState([]);

  // 눈 내리는 효과
  useEffect(() => {
    const createSnowflake = () => {
      const newSnowflake = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100, // 화면 너비의 0-100%
        size: Math.random() * 4 + 3, // 3-7px 크기
        duration: Math.random() * 3 + 5, // 5-8초 지속
        delay: Math.random() * 2, // 0-2초 딜레이
        opacity: Math.random() * 0.5 + 0.5, // 0.5-1.0 투명도
      };
      setSnowflakes((prev) => [...prev, newSnowflake]);

      // 애니메이션 종료 후 제거
      setTimeout(() => {
        setSnowflakes((prev) =>
          prev.filter((s) => s.id !== newSnowflake.id)
        );
      }, (newSnowflake.duration + newSnowflake.delay) * 1000);
    };

    // 초기 눈송이 생성
    Array.from({ length: 30 }, () => createSnowflake());

    // 주기적으로 눈송이 생성 (0.3-0.8초 간격)
    const snowInterval = setInterval(() => {
      createSnowflake();
    }, Math.random() * 500 + 300);

    return () => clearInterval(snowInterval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: `url("${byeImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#03174C",
        overflowY: "auto",
      }}
    >
      {/* 컨텐츠가 필요하면 여기에 추가 */}

      {/* 눈 내리는 효과 */}
      <AnimatePresence>
        {snowflakes.map((snowflake) => (
          <motion.div
            key={snowflake.id}
            style={{
              position: "absolute",
              top: "-10px",
              left: `${snowflake.x}%`,
              width: `${snowflake.size}px`,
              height: `${snowflake.size}px`,
              backgroundColor: "#FFFFFF",
              borderRadius: "50%",
              pointerEvents: "none",
              opacity: snowflake.opacity,
              boxShadow: `0 0 ${snowflake.size}px rgba(255, 255, 255, 0.8)`,
            }}
            initial={{
              y: -10,
              opacity: snowflake.opacity,
            }}
            animate={{
              y: window.innerHeight + 20,
              opacity: [snowflake.opacity, snowflake.opacity, 0],
            }}
            transition={{
              duration: snowflake.duration,
              delay: snowflake.delay,
              ease: "linear",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ByePage;