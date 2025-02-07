"use client";

import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { useUser } from "@clerk/nextjs";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Chat = ({ roomId, receiverId }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();
  const messagesEndRef = useRef(null);
  const { user } = useUser();

  useEffect(() => {
    socketRef.current = io("http://localhost:3000", { path: "/api/socket" });

    socketRef.current.emit("join_room", roomId);

    socketRef.current.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
      scrollToBottom();
    });

    // Fetch chat history
    const fetchMessages = async () => {
      try {
        const res = await fetch(`/api/getMessages?roomId=${roomId}`);
        const data = await res.json();
        setMessages(data);
        scrollToBottom();
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const sendMessage = async () => {
    if (message.trim()) {
      const messageData = {
        roomId,
        senderId: user?.id,
        receiverId,
        message,
        timestamp: new Date().toISOString(),
      };

      // Send message to the server
      socketRef.current.emit("send_message", messageData);

      // Clear input field
      setMessage("");
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="flex flex-col h-full w-full bg-white rounded-lg overflow-hidden shadow-sm">
    
      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-gray-300">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.senderId === user?.id ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] px-4 py-2 rounded-lg shadow-md text-sm ${
                msg.senderId === user?.id
                  ? "bg-primary text-gray-50  rounded-br-none"
                  : "bg-gray-100 text-gray-800   rounded-bl-none"
              }`}
            >
              {msg.message}
              <p className="text-xs text-gray-400 mt-1 text-right">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="border-t flex items-center p-4 bg-gray-50">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Button
          onClick={sendMessage}
          className="ml-3 bg-primary rounded-full px-4 py-2 shadow-md"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chat;