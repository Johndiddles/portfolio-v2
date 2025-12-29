import { Project } from "@/types/projects";
import DliLibraryImage from "@/assets/Images/dli-library.svg";
import SnipCityImage from "@/assets/Images/snipcity.svg";
import ReshiitoImage from "@/assets/Images/reshiito.svg";
import RagauNGImage from "@/assets/Images/ragaung.svg";
import MiddlechaseImage from "@/assets/Images/middlechase.svg";
import DomeasolidImage from "@/assets/Images/domeasolid.svg";
// import RistoranteConFusion from "@/assets/Images/ristorante-con-fusion.svg";

export const AllProjects: Project[] = [
  {
    title: "Domeasolid",
    description:
      'DoMeASolid is a creator-first affiliate platform designed to bridge the gap between influencers, shoppers, and brands. By utilizing a smart browser extension and a centralized creator portal, the brand ensures influencers receive 100% of their earned attribution while providing shoppers with seamless access to verified deals at checkout. Built on the philosophy of mutual support, the ecosystem turns promo codes into a "teammate" for creators, protecting their commissions from traditional last-click attribution loss.',
    tools: ["Next JS", "Typescript", "Express JS", "Supabase", "Stripe"],
    status: "completed",
    canViewCode: false,
    canViewProject: true,
    project_live_url: "https://app.domeasolid.co",
    thumbnail_url: DomeasolidImage,
  },
  {
    title: "SnipCity",
    description:
      "SnipCity was created to solve a simple problem: developers often write useful code snippets that get lost in the depths of their file systems. We believe that great code should be shared, discovered, and reused by the community. Our platform makes it easy to store, organize, and share your most valuable code snippets while discovering solutions from other talented developers.",
    tools: ["Next JS", "Typescript", "Mongo DB"],
    status: "in_progress",
    canViewCode: true,
    canViewProject: true,
    github_repo_url: "https://github.com/Johndiddles/snipcity",
    project_live_url: "https://snipcity.vercel.app",
    thumbnail_url: SnipCityImage,
  },
  {
    title: "DLi Library",
    description:
      "An e-library that allows you download soft copies of all modules freely available to all dli students of the University of Lagos. This project seeks to ease access to study materials for student",
    tools: ["React Js", "Redux", "Node Js", "Express Js", "Mongo DB"],
    status: "in_progress",
    canViewCode: true,
    canViewProject: true,
    github_repo_url: "https://github.com/Johndiddles/dli-library-nextjs",
    project_live_url: "https://dli-library.vercel.app",
    thumbnail_url: DliLibraryImage,
  },
  {
    title: "Reshiito Website",
    description:
      "Reshiito takes the hassle out of expense management for individuals and businesses alike. Simply snap a photo of your receipt with your phone and Reshiito automatically organizes it. Submitting expense claims becomes effortless, and businesses can ensure control with role-based access. Gain real-time insights into your spending habits and make smarter financial decisions.",
    tools: ["Next JS"],
    status: "completed",
    canViewCode: false,
    canViewProject: true,
    project_live_url: "https://reshiito.com",
    thumbnail_url: ReshiitoImage,
  },
  {
    title: "RagauNG",
    description:
      "RagauNG seamlessly connects you with verified professionals for any need. RagauNG simplifies life, putting a curated network of skilled service providers and more at your fingertips. Book appointments, compare quotes, and enjoy reliable service – all stress-free, all online.",
    tools: ["Astro JS"],
    status: "completed",
    canViewCode: false,
    canViewProject: true,
    project_live_url: "https://ragaung.com",
    thumbnail_url: RagauNGImage,
  },
  {
    title: "Middlechase Properties",
    description:
      "Middlechase Properties empowers Nigerians to own and manage income-generating apartments and lands for both residential and commercial use. They specialize in high-cash-flow properties and offer comprehensive property management, making real estate investment in Nigeria simple and profitable.",
    tools: ["React Js", "Redux", "Node Js", "Express Js", "MySQL", "AWS"],
    status: "in_progress",
    canViewCode: false,
    canViewProject: true,
    project_live_url: "https://middlechase.vercel.app",
    thumbnail_url: MiddlechaseImage,
  },
  // {
  //   title: "Ristorante Con Fusion",
  //   description:
  //     "A restaurant web application that allows customers to find information about the restaurant, dishes, reserve tables online and send feedbacks to the restaurant.",
  //   tools: ["HTML", "Bootstrap 4"],
  //   status: "completed",
  //   canViewCode: true,
  //   canViewProject: true,
  //   project_live_url: "https://middlechase.vercel.app",
  //   thumbnail_url: RistoranteConFusion,
  // },
];
