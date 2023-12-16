import React from "react";
import commentsData from "./CommentsData";
import CommentList from "./CommentList";

const CommentsContainer = () => {
  return (
    <div className="absolute m-5 p-2 ">
      <div className="text-2xl font-bold">Comments:</div>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
