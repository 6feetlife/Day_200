import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import landingImage from "../assets/landing.svg";

function LandingPage() {
  const [ripples, setRipples] = useState([]);
  const [particles, setParticles] = useState([]);
  const [stars, setStars] = useState([]);

  // 폭죽 효과 생성 함수
  const createFireworks = (x, y) => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: Date.now() + i + Math.random(),
      x,
      y,
      angle: (Math.PI * 2 * i) / 15,
    }));
    setParticles((prev) => [...prev, ...newParticles]);

    // 일정 시간 후 제거
    setTimeout(() => {
      setParticles((prev) =>
        prev.filter((p) => !newParticles.some((np) => np.id === p.id))
      );
    }, 600);
  };

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Ripple 효과
    const newRipple = {
      id: Date.now(),
      x,
      y,
    };
    setRipples((prev) => [...prev, newRipple]);

    // Particle 효과 (버튼 클릭 시)
    createFireworks(x + rect.left, y + rect.top);

    // 일정 시간 후 제거
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  // 별 파티클 생성 (화면 곳곳에 반짝이는 효과)
  useEffect(() => {
    const createStar = () => {
      const newStar = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100, // 화면 너비의 0-100%
        y: Math.random() * 100, // 화면 높이의 0-100%
        size: Math.random() * 4 + 2, // 2-6px 크기
        duration: Math.random() * 2 + 1.5, // 1.5-3.5초 지속
        delay: Math.random() * 0.5, // 0-0.5초 딜레이
      };
      setStars((prev) => [...prev, newStar]);

      // 애니메이션 종료 후 제거
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== newStar.id));
      }, (newStar.duration + newStar.delay) * 1000);
    };

    // 초기 별 생성 (더 많이)
    Array.from({ length: 40 }, () => createStar());

    // 주기적으로 별 생성 (0.25-0.75초 간격으로 2배 더 자주)
    const starInterval = setInterval(() => {
      createStar();
    }, Math.random() * 500 + 250);

    return () => clearInterval(starInterval);
  }, []);

  // 화면 곳곳에 폭죽 효과 자동 생성
  useEffect(() => {
    const createRandomFireworks = () => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      createFireworks(x, y);
    };

    // 초기 폭죽 생성
    Array.from({ length: 5 }, () => {
      setTimeout(() => {
        createRandomFireworks();
      }, Math.random() * 2000);
    });

    // 주기적으로 폭죽 생성 (1초 간격)
    const fireworksInterval = setInterval(() => {
      createRandomFireworks();
    }, 1000);

    return () => clearInterval(fireworksInterval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${landingImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "80px",
        paddingBottom: "60px",
      }}
    >
      {/* 상단 텍스트 영역 */}
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          zIndex: 1,
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          style={{
            fontSize: "16px",
            color: "#FFFFFF",
            fontWeight: "500",
            letterSpacing: "2px",
            marginTop: "170px",
          }}
        >
          DAY_200
        </motion.div>
        <motion.div
          style={{
            fontSize: "32px",
            color: "#FFFFFF",
            fontWeight: "700",
            marginTop: "20px",
          }}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          민지 ♥ 본석
        </motion.div>
        <motion.div
          style={{
            fontSize: "18px",
            color: "#FFFFFF",
            fontWeight: "400",
            marginTop: "4px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          우리의 200일을 축하해!!
        </motion.div>
      </motion.div>

      {/* 하단 버튼 */}
      <motion.button
        style={{
          position: "relative",
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
          marginBottom: "130px",
          overflow: "hidden",
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 6px 20px rgba(142, 151, 253, 0.4)",
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={handleClick}
      >
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              style={{
                position: "absolute",
                left: ripple.x,
                top: ripple.y,
                width: 0,
                height: 0,
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
              initial={{ width: 0, height: 0, opacity: 1 }}
              animate={{
                width: 300,
                height: 300,
                opacity: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ))}
        </AnimatePresence>

        <span style={{ position: "relative", zIndex: 1 }}>
          우리의 추억 둘러보기
        </span>
      </motion.button>

      {/* 버튼 클릭 시 Particle 효과 */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            style={{
              position: "fixed",
              left: particle.x,
              top: particle.y,
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              pointerEvents: "none",
              zIndex: 1000,
            }}
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              x: Math.cos(particle.angle) * 60,
              y: Math.sin(particle.angle) * 60,
              opacity: 0,
              scale: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>

      {/* 별 반짝임 효과 (화면 곳곳) */}
      <AnimatePresence>
        {stars.map((star) => (
          <motion.div
            key={star.id}
            style={{
              position: "fixed",
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
              pointerEvents: "none",
              zIndex: 999,
            }}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 1, 0.8, 1, 0],
              scale: [0, 1.2, 0.8, 1.1, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              ease: "easeInOut",
              times: [0, 0.3, 0.5, 0.7, 1],
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default LandingPage;