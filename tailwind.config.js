/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-mobile": "url('../../public/banner mobile.png')",
        "banner-contact": "url('../../public/banner contact.png')",
        "banner-service": "url('../../public/banner service.png')",
        "carousel-one": "url('/public/carousel/slide1.jpeg'",
        detalhe: "url('/public/detalhe_bg.png'",
      },
    },
    screens: {
      lg: "64rem", //1024
      lmd: "90rem", //1440
      xlg: "120rem", //1920
    },
  },
  plugins: [],
};
