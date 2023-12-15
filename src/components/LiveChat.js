import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("polling");
      dispatch(
        addMessage({
          name: "Rahul",
          message: "Lorem Ipsum Dolar site amet",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="ml-2 p-2 h-[450px] w-full border border-black rounded-lg bg-slate-100 overflow-y-scroll">
      {chatMessages.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
