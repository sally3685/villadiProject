export interface controlDictionary {
  addAdminForm: {
    title: string;
    selectWarn: string;
    helloAdmin: string;
    chooseAdmin: string;
    selectPlaceholder: string;
    adminWarning: string;
  };
  addCategoryForm: {
    oppName: string;
    name: string;
    namePlaceHolder: string;
    oppCode: string;
    code: string;
    codePlaceHolder: string;
    oppDetailes: string;
    detailes: string;
    detailesPlaceHolder: string;
    oppImg: string;
    img: string;
    title: string;
  };
  addProductForm: {
    title: string;
    category: string;
    oppCategory: string;
    categoryPlaceholder: string;
    flavor: string;
    oppFlavor: string;
    name: string;
    oppName: string;
    namePlaceHolder: string;
    code: string;
    oppCode: string;
    codePlaceHolder: string;
    detailes: string;
    oppDetailes: string;
    detailesPlaceHolder: string;
    img: string;
    oppImg: string;
    img2: string;
    oppImg2: string;
    oppBackgroundColor: string;
    backgroundColor: string;
    patternColor: string;
    oppPatternColor: string;
  };
  updateProductForm: {
    title: string;
  };
  search: {
    title: string;
    noOptions: string;
  };
  done: {
    success: string;
    error: string;
  };
  updateCategoryForm: {
    title: string;
  };
  required: {
    categoryRequired: string;
    flavorRequired: string;
    image: string;
    pinMark: string;
    mapRequired: string;
    productRequired: string;
    recipeRequired: string;
    coverImgRequired: string;
    videoRequired: string;
    socialAppRequired: string;
  };
  steps: {
    title: string;
    previous: string;
    next: string;
  };
  choose: {
    category: string;
    flavor: string;
    map: string;
    product: string;
    recipe: string;
    video: string;
    social: string;
  };
  updateSocial: {
    title: string;
    channelLink: string;
    embeddedLinkPlaceHolder: string;
    instagram: {
      title: string;
      steps: string[];
      embededLink: string;
    };
    facebook: {
      title: string;
      embededLink: string;
      steps: string[];
    };
    youtube: {
      title: string;
      embededLink: string;
      steps: string[];
    };
  };
  Templang: {
    langButton: string;
    opplangButton: string;
  };
  imageUpload: {
    instruction: string;
    warning: string;
    deleted: string;
    failed: string;
    uploaded: string;
    validate: string;
  };
  submitStatus: {
    waitSubmit: string;
    submit: string;
    proccessing: string;
  };
  addFlavorForm: {
    name: string;
    oppName: string;
    namePlaceHolder: string;
    oppImg: string;
    img: string;
    title: string;
  };
  updateFlavorForm: {
    title: string;
  };
  addMapForm: {
    title: string;
    img: string;
    oppImg: string;
    name: string;
    oppName: string;
    namePlaceHolder: string;
    detailes: string;
    oppDetailes: string;
    detailesPlaceHolder: string;
    selectPosition: string;
  };
  addRecipyForm: {
    title: string;
    flavor: string;
    oppFlavor: string;
    name: string;
    oppName: string;
    namePlaceHolder: string;
    code: string;
    oppCode: string;
    codePlaceHolder: string;
    details: string;
    oppDetails: string;
    detailsPlaceHolder: string;
  };
  addVideoForm: {
    title: string;
    name: string;
    oppName: string;
    namePlaceHolder: string;
    product: string;
    oppProduct: string;
    img: string;
    oppImg: string;
    embededLink: string;
    oppEmbededLink: string;
    embededLinkPlaceHolder: string;
  };
  updateVideoForm: {
    title: string;
  };
  updateRecipyForm: {
    title: string;
  };
  updateMapForm: {
    title: string;
  };
}
export interface categoryType {
  name: string;
  code: string;
  id: string;
}

export interface flavorType {
  name: string;
  id: string;
}
export interface productType {
  name: string;
  id: string;
}
export interface userType {
  id: string;
  name: string;
  email: string;
  role: string;
}
export interface deleteType {
  submitStatus: {
    waitDelete: string;
    delete: string;
  };
  addAdminForm: {
    deleteWarning2: string;
  };
  delete: {
    deleteSuccess: string;
    deleteFailed: string;
    deleteCheck: string;
    noPermission: string;
    noSelectionText: string;
  };
  addVideoForm: {
    deleteAll: string;
    deleteWarning: string;
    deleteLabel: string;
  };
  addFlavorForm: {
    deleteAll: string;
    deleteWarning: string;
    deleteLabel: string;
  };
  addCategoryForm: {
    deleteAll: string;
    deleteWarning: string;
    deleteLabel: string;
  };
  addMapForm: {
    deleteAll: string;
    deleteWarning: string;
    deleteLabel: string;
  };
  addProductForm: {
    deleteAll: string;
    deleteWarning: string;
    deleteLabel: string;
  };
  addRecipyForm: {
    deleteAll: string;
    deleteWarning: string;
    deleteLabel: string;
  };
}
export interface CategoryFormDataType {
  name: string;
  code: string;
  detailes: string;
  img: string;
  key: string;
}

export interface FlavorFormDataType {
  name: string;
  img: string;
  key: string;
}
export interface MapFormDataType {
  name: string;
  details: string;
  img: string;
  key: string;
  markers: Array<{ top: number; left: number; id: string }>;
}
export interface ProductFormType {
  name: string;
  code: string;
  detailes: string;
  patternColor: string;
  backgroundColor: string;
}
export interface RecipeFormType {
  name: string;
  details: string;
  code: string;
}
export interface VideoFormType {
  name: string;
  embededLink: string;
  productId: string;
  img: string;
  key: string;
}
export interface socialFormType {
  name: string;
  embededlink: string;
  channelLink: string;
}
