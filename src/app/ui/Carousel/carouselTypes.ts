export interface CarouselItemBase {
  id?: string;
  name: string;
  code: string;
  p_color?: string;
  color?: string;
  _count?: {
    votes?: number;
  };
}

export interface ProductItem extends CarouselItemBase {
  img: string;
  flavor: {
    primaryImg: string;
  };
  category: {
    code: string;
  };
}

export interface RecipeItem extends CarouselItemBase {
  flavor: {
    primaryImg: string;
  };
}
export interface carouselDictionary {
  vote: {
    notSigned: string;
    title: string;
  };
  catigoriesWrapper: {
    title: string;
    view: string;
    noCats: string;
  };
  recipesWrapper: {
    title: string;
    view: string;
    noRecs: string;
    link: string;
  };
}
export interface CategoryItem extends CarouselItemBase {
  img: string;
}
export type CarouselItemType =
  | ProductItem
  | RecipeItem
  | CarouselItemBase
  | CategoryItem;

export interface Carousel3DProps {
  items: CarouselItemType[];
  user?: {
    user?: {
      email: string;
    };
  };
  t: carouselDictionary;
  title: string;
  all: string;
  noItems: string;
  lang: string;
  type: "products" | "categories" | "recipes";
  linkPrefix: string;
  linkText: string;
  showVotes?: boolean;
}
