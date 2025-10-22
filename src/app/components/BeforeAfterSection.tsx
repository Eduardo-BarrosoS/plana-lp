"use client";

import type React from "react";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-balance md:text-5xl">
            Veja a Transformação
          </h2>
          <p className="text-muted-foreground text-lg text-balance">
            Mova o mouse para ver como transformamos um espaço vazio em um lar
            personalizado
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div
            ref={containerRef}
            className="relative aspect-[16/9] w-full cursor-ew-resize overflow-hidden rounded-2xl shadow-2xl select-none"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* after Image (Background) */}
            <div className="absolute inset-0">
              <img
                src="/images/depois.png"
                alt="Apartamento antes da personalização"
                className="h-full w-full object-cover"
              />
              <div className="absolute right-6 bottom-6 rounded-lg bg-black/70 px-4 py-2 font-semibold text-white">
                Depois
              </div>
            </div>

            {/* before Image (Clipped) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="/images/antes.png"
                alt="Apartamento depois da personalização"
                className="h-full w-full object-cover"
              />
              <div className="bg-primary text-primary-foreground absolute bottom-6 left-6 rounded-lg px-4 py-2 font-semibold">
                Antes
              </div>
            </div>

            {/* Slider Line and Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-0.5 rounded-full bg-white shadow-xl">
                <ChevronLeft className="text-foreground h-4 w-4" />
                <ChevronRight className="text-foreground h-4 w-4" />
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mt-6 text-center text-sm">
            💡 Mova o mouse ou deslize para comparar
          </p>
        </div>
      </div>
    </section>
  );
}
