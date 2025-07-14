import { Comment } from "../../../../prisma/generated/prisma";
export interface commentDictionary {
  addComment: {
    doneSubmit: string;
    title: string;
    label: string;
    placeHolder: string;
  };
  updateComment: {
    doneSubmit: string;
    title: string;
  };
  deleteComment: {
    doneSubmit: string;
    error: string;
    check: string;
    checkWarn: string;
    noPermission: string;
    noComment: string;
    title: string;
  };
  vote: {
    title: string;
  };
  submitStatus: {
    waitSubmit: string;
    submit: string;
  };
  done: {
    success: string;
  };
}
export interface userType {
  role: string;
  email: string;
  id: string;
}
export interface updateType {
  text: string;
  id: string;
  userId: string;
}
export interface stateAddType {
  errors?: {
    text?: string[];
  };
  general?: string;
  success?: boolean;
}
export interface deleteType {
  readyCheckBox: boolean;
  selectedComment: Comment;
}
export interface commentType extends Comment {
  _count: {
    votes: number;
  };
  user: userType;
}
