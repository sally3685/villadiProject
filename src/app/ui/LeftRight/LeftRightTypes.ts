export type LeftRightItemBase = {
  id: string;
  name: string;
};

export interface CategoryItem extends LeftRightItemBase {
  img: string;
  code: string;
}
export interface RecipeItem extends LeftRightItemBase {
  code: string;
  flavor: {
    primaryImg: string;
  };
}
export interface VideoItem extends LeftRightItemBase {
  product: {
    flavor: {
      primaryImg: string;
    };
    code: string;
  };
  coverImg: string;
  embededLink: string;
}
export type MenuItemType =
  | LeftRightItemBase
  | CategoryItem
  | VideoItem
  | RecipeItem;

export type LeftRightMenuProps = {
  items: MenuItemType[];
  title: string;
  lang: string;
  emptyStateText: string;
  searchPlaceholder: string;
  linkText: string;
  type: "categories" | "recipes" | "videos";
};
