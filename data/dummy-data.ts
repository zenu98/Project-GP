import { List, Category, PlatForm } from "./model";

export const ListOfGames: List = {
  PC: {
    202103: {
      date: "2021년3월",
      games: {
        sekiro: {
          title: "g",
          category: {
            text: "액션",
            genre: "action",
          },
          image:
            "https://i.namu.wiki/i/XBT_2sAAccqYd9BUEg5ziDinjeWUB520wR5JoYIwiucihNUAhfPV8lgGmEqJN8Cm9lUycj8yW_dTdXJDcOhAKGIRFyCJSzpRWe5wiVMVRRtDeR3G_E60n0QFuCOHi6_0OWpeDXHInP1CiPPT4Sk4qw.webp",
          publisher: "",
          developer: "",
          video: "",
          date: "",
        },
        tekken: {
          title: "g",
          category: {
            text: "액션",
            genre: "action",
          },
          image: "../images/sekiro.webp",
          publisher: "",
          developer: "",
          video: "",
          date: "",
        },
      },
    },
    202104: {
      date: "2021년4월",
      games: {
        sekiro: {
          title: "g",
          category: {
            text: "액션",
            genre: "action",
          },
          image: "../images/sekiro.webp",
          publisher: "",
          developer: "",
          video: "",
          date: "",
        },
        tekken: {
          title: "g",
          category: {
            text: "액션",
            genre: "action",
          },
          image: "../images/sekiro.webp",
          publisher: "",
          developer: "",
          video: "",
          date: "",
        },
        tekkens: {
          title: "g",
          category: {
            text: "액션",
            genre: "action",
          },
          image: "../images/sekiro.webp",
          publisher: "",
          developer: "",
          video: "",
          date: "",
        },
      },
    },
  },
  XBOX: {
    202105: {
      date: "2021년5월",
      games: {
        tekkens: {
          title: "g",
          category: {
            text: "액션",
            genre: "action",
          },
          image: "../images/sekiro.webp",
          publisher: "",
          developer: "",
          video: "",
          date: "",
        },
      },
    },
  },
  PS5: {
    202105: {
      date: "2021년5월",
      games: {
        tekkens: {
          title: "g",
          category: {
            text: "액션",
            genre: "action",
          },
          image: "../images/sekiro.webp",
          publisher: "",
          developer: "",
          video: "",
          date: "",
        },
      },
    },
  },
  Switch: {
    202105: {
      date: "2021년5월",
      games: {
        tekkens: {
          title: "g",
          category: {
            text: "액션",
            genre: "action",
          },
          image: "../images/sekiro.webp",
          publisher: "",
          developer: "",
          video: "",
          date: "",
        },
      },
    },
  },
};

export const category: Category[] = [
  { text: "전체", genre: "all" },
  { text: "인디", genre: "indie" },
  { text: "액션", genre: "action" },
  { text: "어드벤처", genre: "adventure" },
  { text: "전략", genre: "strategy" },
  { text: "캐주얼", genre: "casual" },
  { text: "RPG", genre: "rpg" },
  { text: "시뮬레이션", genre: "simulation" },
  { text: "싱글 플레이어", genre: "single" },
  { text: "2D", genre: "2D" },
  { text: "3D", genre: "3D" },
  { text: "판타지", genre: "fantasy" },
  { text: "멀티 플레이어", genre: "multy-player" },
  { text: "퍼즐", genre: "puzzle" },
  { text: "픽셀 그래픽", genre: "pixel" },
  { text: "MMO", genre: "MMO" },
  { text: "1인칭", genre: "first-person" },
  { text: "전투", genre: "combat" },
  { text: "아케이드", genre: "arcade" },
  { text: "레이싱", genre: "racing" },
];

export const platform: PlatForm = {
  platform: ["PC", "XBOX", "PS5", "Switch"],
};
