"use server";
import { AddCommentVote, AddVote } from "../data-access-layer/votesDAL";

export async function AddVotesAction(userEmail: string, recipeId: string) {
  return await AddVote(userEmail, recipeId);
}
export async function AddVotesCommentAction(
  userEmail: string,
  commentId: string
) {
  return await AddCommentVote(userEmail, commentId);
}
