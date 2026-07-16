"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { LogoIcon } from "../svgs";

const CLICKS_NEEDED = 5;
const ADMIN_WINDOW_MS = 2500;
const HOME_DELAY_MS = 400;

/**
 * Logo com acesso discreto ao painel: 5 cliques rápidos → /admin/login.
 * Clique único (após breve pausa) segue para homeHref, se informado.
 */
const AdminLogoGate = ({ className, homeHref = "/inicio", "aria-label": ariaLabel }) => {
  const router = useRouter();
  const clicksRef = useRef([]);
  const timerRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    const now = Date.now();
    clicksRef.current = clicksRef.current.filter((t) => now - t < ADMIN_WINDOW_MS);
    clicksRef.current.push(now);

    if (clicksRef.current.length >= CLICKS_NEEDED) {
      clicksRef.current = [];
      if (timerRef.current) clearTimeout(timerRef.current);
      router.push("/admin/login");
      return;
    }

    if (timerRef.current) clearTimeout(timerRef.current);
    const delay =
      clicksRef.current.length === 1 && homeHref ? HOME_DELAY_MS : ADMIN_WINDOW_MS;

    timerRef.current = setTimeout(() => {
      const count = clicksRef.current.length;
      clicksRef.current = [];
      if (count === 1 && homeHref) {
        router.push(homeHref);
      }
    }, delay);
  };

  return (
    <a
      href={homeHref || "/inicio"}
      onClick={handleClick}
      aria-label={ariaLabel || "Página inicial"}
      className="inline-block select-none"
    >
      <LogoIcon className={className} />
    </a>
  );
};

export default AdminLogoGate;
