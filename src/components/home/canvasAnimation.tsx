"use client";

import { useEffect, useRef } from "react";

export default function CanvasAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 初始化画布尺寸
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dot 构造函数（和 CodePen 中的写法 1:1）
    function Dot(this: any) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = Math.random() * 2 - 1;
      this.vy = Math.random() * 2 - 1;
      this.radius = Math.random() * 2 + 1;
    }

    Dot.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = "#fff";
      ctx.fill();
    };

    Dot.prototype.update = function () {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
      this.draw();
    };

    // 创建点的数组（数量与 CodePen 保持一致）
    const dots = [];
    for (let i = 0; i < 10; i++) {
      dots.push(new (Dot as any)());
    }

    // 动画函数：每一帧先画半透明背景，再更新所有点
    function animate() {
      ctx.fillStyle = "rgba(10, 10, 10, 0.2)";
      ctx.fillRect(0, 0, width, height);
      for (let i = 0; i < dots.length; i++) {
        dots[i].update();
      }
      requestAnimationFrame(animate);
    }

    animate();

    // 监听窗口尺寸变化，调整 canvas 尺寸
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
