"use client";

import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type FitDims = { scale: number; clipW: number; clipH: number };

const EMPTY: FitDims = { scale: 1, clipW: 0, clipH: 0 };

/**
 * Scales hero content down when it exceeds the available area (zoom / short viewports).
 * Uses a clip box + transform so layout matches the visual size across browsers.
 */
export function HeroViewportFit({ children }: { children: React.ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState<FitDims>(EMPTY);

  const measure = useCallback(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const nw = inner.offsetWidth;
    const nh = inner.offsetHeight;
    if (nw < 8 || nh < 8) return;

    const ch = outer.clientHeight;
    const cw = outer.clientWidth;
    const pad = 10;
    const s = Math.min(1, (ch - pad) / nh, (cw - pad) / nw);
    const scale = Number.isFinite(s) && s > 0 ? s : 1;

    setDims({
      scale,
      clipW: Math.ceil(nw * scale),
      clipH: Math.ceil(nh * scale),
    });
  }, []);

  useLayoutEffect(() => {
    measure();
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const ro = new ResizeObserver(() => {
      requestAnimationFrame(measure);
    });
    ro.observe(outer);
    ro.observe(inner);

    const onResize = () => requestAnimationFrame(measure);
    window.addEventListener("resize", onResize);
    window.visualViewport?.addEventListener("resize", onResize);
    window.visualViewport?.addEventListener("scroll", onResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
      window.visualViewport?.removeEventListener("resize", onResize);
      window.visualViewport?.removeEventListener("scroll", onResize);
    };
  }, [measure]);

  return (
    <div
      ref={outerRef}
      className="flex min-h-0 w-full min-w-0 flex-1 flex-col items-center justify-center overflow-hidden"
    >
      <div
        className="relative shrink-0 overflow-hidden"
        style={{
          width: dims.clipW > 0 ? dims.clipW : undefined,
          height: dims.clipH > 0 ? dims.clipH : undefined,
          maxWidth: "100%",
        }}
      >
        <div
          ref={innerRef}
          className="mx-auto flex w-fit max-w-full flex-col items-center"
          style={{
            transform: `scale(${dims.scale})`,
            transformOrigin: "top left",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
