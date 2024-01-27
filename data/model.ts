export interface Category {
  text: string;
  genre: string;
}

interface GameInfo {
  title: string;
  category: Category;
  image: string;
  publisher: string;
  developer: string;
  video: string;
  date: string;
}

interface GameDatas {
  date: string;
  data: {
    list: GameInfo[];
  }[];
}

export interface GameList {
  GameList: GameDatas[];
}
