"use client";

import { useState, useEffect } from "react";
import { WhatsappIcon } from "./svgs";
import Link from "next/link";

export default function WhatsAppButton({
  phoneNumber,
  message = "Olá, gostaria de mais informações!",
  position = "right",
  size = "md",
  offset = 20,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Only show the button after the component is mounted
  useEffect(() => {
    setIsVisible(true);

    // Add scroll event listener
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Format phone number (remove any non-digit characters)
  const formattedPhone = phoneNumber.replace(/\D/g, "");

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(
    message
  )}`;

  // Define size classes with responsive options - smaller for mobile, larger for desktop
  const sizeClasses = {
    sm: "w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
    md: "w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16",
    lg: "w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20",
  };

  // Define position classes
  const positionClasses = {
    right: "right-0 ml-auto",
    left: "left-0 mr-auto",
  };

  // Adjust offset based on screen size
  const responsiveOffset = {
    bottom: `${offset}px`,
    [position]: `${offset}px`,
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed z-50 pointer-events-none`} style={responsiveOffset}>
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          ${sizeClasses[size]}
          flex items-center justify-center
          rounded-full bg-green-500 text-white
          shadow-lg hover:bg-green-600 hover:scale-110
          transition-all duration-300 pointer-events-auto
        `}
        aria-label="Contato via WhatsApp"
      >
        <WhatsappIcon
          className={
            size === "lg"
              ? "w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
              : size === "md"
              ? "w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
              : "w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
          }
        />
      </Link>
    </div>
  );
}
