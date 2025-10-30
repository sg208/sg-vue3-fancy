import { defineStore } from "pinia";

export const useNavigationStore = defineStore(
  "navigation",
  {
    state: () => {
      return {
        header: [
          {
            name: "Breakfast",
            path: "/breakfast",
          },
          {
            name: "Lunch",
            path: "/lunch",
          },
          {
            name: "Dinner",
            path: "/dinner",
          },
          {
            name: "Desserts",
            path: "/desserts",
          },
        ],
        footer: [
          {
            name: "About",
            path: "/about",
          },
          {
            name: "Features",
            path: "/features",
          },
          {
            name: "Blog",
            path: "/blog",
          },
          {
            name: "Team",
            path: "/team",
          },
          {
            name: "Pricing",
            path: "/pricing",
          },

          {
            name: "Contact",
            path: "/contact",
          },
          {
            name: "Terms",
            path: "/terms",
          },
        ],
      };
    },
  },
  {
    persist: true,
  },
);
