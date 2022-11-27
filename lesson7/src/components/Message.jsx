import React from "react";
import { useSelector } from "react-redux";
import { messageSelector } from "../redux/reducer/selector";


const Message = () => {
    const messages = useSelector(messageSelector)
    return (
        <div>
            {messages.map((message) => (
                <div>
                    {message.title}
                </div>
            ))}
        </div>
    );
};
export default Message;