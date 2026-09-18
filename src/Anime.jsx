import { useEffect, useRef } from "react";

function Anime() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    // YULDUZLAR
    for (let i = 0; i < 180; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        // yulduz kattaligi
        size: Math.random() * 1.5 + 0.3,

        // boshlang'ich yorqinlik
        opacity: Math.random() * 0.7 + 0.2,

        // miltillash tezligi
        speed: Math.random() * 0.02 + 0.005,

        // miltillash yo'nalishi
        direction: Math.random() > 0.5 ? 1 : -1,
      });
    }

    const animate = () => {
      // QORA FON
      ctx.fillStyle = "#000000";
      ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      stars.forEach((star) => {
        // Miltillash
        star.opacity +=
          star.speed * star.direction;

        if (star.opacity >= 1) {
          star.direction = -1;
        }

        if (star.opacity <= 0.15) {
          star.direction = 1;
        }

        // Yulduz
        ctx.beginPath();

        ctx.arc(
          star.x,
          star.y,
          star.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;

        // Juda yengil glow
        ctx.shadowBlur = 6;
        ctx.shadowColor = "white";

        ctx.fill();
      });

      // Glow keyingi chizishga o'tmasligi uchun
      ctx.shadowBlur = 0;

      animationId =
        requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}

export default Anime;