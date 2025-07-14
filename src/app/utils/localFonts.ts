import localFont from "next/font/local";

const ptSans = localFont({
  src: [
    {
      path: "@/app/fonts/pt-sans/PTSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "@/app/fonts/pt-sans/PTSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pt-sans",
  display: "swap",
});
