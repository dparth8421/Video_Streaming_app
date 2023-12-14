import React from "react";
import Comment from "./Comment";
import commentsData from "./CommentsData";
import CommentList from "./CommentList";

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <div className="text-2xl font-bold">Comments:</div>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
