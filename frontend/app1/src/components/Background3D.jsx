import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Background3D = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      {/* Glow Orbs */}
      <motion.div
        className="position-fixed rounded-circle"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)",
          top: "10%",
          left: "5%",
          x: mousePos.x,
          y: y1,
          filter: "blur(60px)",
        }}
      />
      
      <motion.div
        className="position-fixed rounded-circle"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)",
          bottom: "10%",
          right: "5%",
          x: -mousePos.x,
          y: y2,
          filter: "blur(80px)",
        }}
      />

      {/* Floating Glass Cubes (Simplified as blurred squares for performance) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="position-fixed glass-card"
          animate={{
            y: [0, -30, 0],
            rotate: [i * 60, i * 60 + 10, i * 60],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: `${50 + i * 20}px`,
            height: `${50 + i * 20}px`,
            top: `${15 * i}%`,
            left: `${(i * 20) % 80}%`,
            opacity: 0.1,
            borderRadius: "12px",
            x: mousePos.x * (i * 0.1),
            transformZ: i * 10,
          }}
        />
      ))}
    </div>
  );
};

export default Background3D;
