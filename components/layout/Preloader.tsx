"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const SESSION_KEY = "ma.portfolio.preloader.session.v1";

function readSkipSession(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function markSessionDone(): void {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    /* ignore */
  }
}

export function Preloader() {
  const reduceMotion = useReducedMotion();
  const [skip, setSkip] = useState(false);
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(4);
  const doneRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const safetyRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    if (readSkipSession()) {
      setSkip(true);
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    if (skip) return;

    const minMs = reduceMotion ? 400 : 1400;
    const started = Date.now();

    const clearTick = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    intervalRef.current = setInterval(() => {
      if (doneRef.current) return;
      setProgress((p) => {
        if (p >= 90) return p;
        return Math.min(90, p + Math.random() * 9 + 2);
      });
    }, reduceMotion ? 40 : 95);

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      if (safetyRef.current) {
        window.clearTimeout(safetyRef.current);
        safetyRef.current = null;
      }
      clearTick();
      setProgress(100);
      const elapsed = Date.now() - started;
      const rest = Math.max(0, minMs - elapsed);
      window.setTimeout(() => {
        setVisible(false);
        markSessionDone();
      }, rest + (reduceMotion ? 80 : 420));
    };

    safetyRef.current = window.setTimeout(finish, 10000);

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      if (safetyRef.current) window.clearTimeout(safetyRef.current);
      safetyRef.current = null;
      clearTick();
      window.removeEventListener("load", finish);
    };
  }, [skip, reduceMotion]);

  useEffect(() => {
    if (skip || !visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [skip, visible]);

  if (skip) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          role="status"
          aria-live="polite"
          aria-busy="true"
          aria-label="Loading site"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.12 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-[#F8FAFC] p-6 sm:p-8"
        >
          {/* Ambient glow — design/pre_loader */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <motion.div
              className="absolute h-[min(100vw,36rem)] w-[min(100vw,36rem)] rounded-full bg-[#2563EB]/[0.06] blur-[100px]"
              animate={
                reduceMotion
                  ? undefined
                  : { opacity: [0.35, 0.65, 0.35], scale: [1, 1.06, 1] }
              }
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
              }
            />
            <motion.div
              className="absolute h-[min(80vw,22rem)] w-[min(80vw,22rem)] rounded-full bg-[#475569]/[0.05] blur-[72px]"
              animate={
                reduceMotion
                  ? undefined
                  : { opacity: [0.3, 0.55, 0.3], scale: [1.04, 1, 1.04] }
              }
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: -2 }
              }
            />
          </div>

          <div className="relative z-10 flex w-full max-w-md flex-col items-center">
            {/* Logo + technical frame */}
            <div className="relative mb-12 flex items-center justify-center sm:mb-16">
              <svg
                className="absolute h-56 w-56 text-[#C3C5D7]/25 sm:h-64 sm:w-64"
                viewBox="0 0 100 100"
                fill="none"
                aria-hidden
              >
                <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.35" strokeDasharray="2 2" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.35" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.35" />
                <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="0.35" />
              </svg>

              <div className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#2563EB]/10"
                  animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.15, 0.28, 0.15] }}
                  transition={
                    reduceMotion ? undefined : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
                  }
                />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-xl bg-[#2563EB] shadow-[0_10px_40px_rgba(37,99,235,0.25)] sm:h-[5.5rem] sm:w-[5.5rem]">
                  <span className="font-sora text-xl font-bold text-white sm:text-2xl">MA</span>
                </div>
              </div>
            </div>

            <div className="mb-8 text-center sm:mb-10">
              <h1 className="font-sora text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                Muhammad Arslan
              </h1>
              <p className="mt-2 font-inter text-xs font-medium uppercase tracking-[0.28em] text-[#475569] sm:text-sm">
                Loading precision…
              </p>
            </div>

            <div className="w-full max-w-[240px] space-y-3">
              <div className="relative h-0.5 w-full overflow-hidden rounded-full bg-[#E2E8F0]">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-[#2563EB]"
                  initial={false}
                  animate={{ width: `${progress}%` }}
                  transition={{ type: "spring", stiffness: 120, damping: 22 }}
                />
              </div>
              <div className="flex items-center justify-between px-0.5 font-mono text-[10px] uppercase tracking-wider text-[#64748B]">
                <span>System initializing</span>
                <span className="font-semibold text-[#2563EB]">{Math.round(progress)}%</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 z-10 flex flex-col items-center sm:bottom-12">
            <div className="mb-3 flex items-center gap-2.5 sm:mb-4 sm:gap-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#475569] sm:text-[11px]">
                Engineering the future
              </span>
            </div>
            <div className="h-10 w-px bg-gradient-to-b from-[#C3C5D7]/40 to-transparent sm:h-12" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
