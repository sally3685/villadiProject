export interface ProductType {
  code: string;
  name: string;
  img: string;
  p_color: string;
  color: string;
  flavor: {
    primaryImg: string;
  };
}
export interface ProductDetails extends ProductType {
  detailes: string;
  flavor: {
    primaryImg: string;
    name: string;
  };
  category: {
    name: string;
  };
  videos: VideoType[];
}
export interface VideoType {
  name: string;
  productId: string;
  lang: string;
  id: string;
  embededLink: string;
  coverImg: string;
  product?: ProductType;
}

export interface CatsProdsDictionary {
  catigoriesWrapper: {
    noCats: string;
    more: string;
    view: string;
    link: string;
  };
  ProdsWrapper: {
    title: string;
    noProds: string;
    search: string;
    details: string;
  };
}
export interface mainPageDictionary extends CatsProdsDictionary {
  catigoriesWrapper: {
    more: string;
    view: string;
    link: string;
    Cats: string;
    noCats: string;
    search: string;
    all: string;
  };
  ProdsWrapper: {
    title: string;
    noProds: string;
    search: string;
    details: string;
    all: string;
  };
}
export interface ProdDetailsDictionary extends CatsProdsDictionary {
  ProdsWrapper: {
    title: string;
    noProds: string;
    search: string;
    details: string;
    product: string;
    flavor: string;
    notFound: string;
    moreProds: string;
    view: string;
    link: string;
  };
}
export interface CategoryProductsResponse {
  status: number;
  categories: {
    name: string;
    products: ProductType[];
  } | null;
}
