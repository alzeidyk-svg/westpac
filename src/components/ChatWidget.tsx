"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, Bot, User, Clock } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

const quickReplies = [
  "Check account balance",
  "Apply for home loan",
  "Credit card information",
  "Branch locations",
  "Technical support"
];

const assistantResponses: { [key: string]: string } = {
  "hello": "Hello! I'm Sarah from Westpac customer support. How can I help you today?",
  "hi": "Hi there! Welcome to Westpac. What can I assist you with?",
  "balance": "I can help you check your account balance. Please log into your online banking or visit any Westpac branch with your ID.",
  "loan": "I'd be happy to help with home loan information! Our current rates start from 6.24% p.a. Would you like me to connect you with a lending specialist?",
  "credit card": "We offer several credit card options with great rewards. Our Altitude cards are very popular. Would you like details about our current offers?",
  "branch": "You can find your nearest Westpac branch using our branch locator tool. What suburb are you looking for?",
  "help": "I'm here to help! You can ask me about accounts, loans, credit cards, branches, or any banking services.",
  "thanks": "You're very welcome! Is there anything else I can help you with today?",
  "hours": "Most Westpac branches are open Monday to Friday 9:30am-4:00pm, and Saturday 9:00am-12:00pm. Online banking is available 24/7!",
  "fees": "Account fees vary by product. Our Choice account has no monthly fees, while our Life account offers premium benefits. Would you like specific fee information?",
  "default": "I understand your question. For detailed assistance, I can connect you with a specialist or you can visit any Westpac branch. How else can I help?"
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Sarah, your virtual assistant. How can I help you with your banking needs today?",
      sender: "assistant",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAssistantResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    for (const [key, response] of Object.entries(assistantResponses)) {
      if (message.includes(key)) {
        return response;
      }
    }

    return assistantResponses.default;
  };

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const assistantResponse: Message = {
        id: Date.now() + 1,
        text: getAssistantResponse(messageText),
        sender: "assistant",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply: string) => {
    sendMessage(reply);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <Button
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl transition-all duration-300 z-50 ${
          isOpen
            ? "bg-gray-600 hover:bg-gray-700"
            : "bg-[#d31d1a] hover:bg-red-700 animate-pulse"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          <CardHeader className="bg-gradient-to-r from-[#d31d1a] to-red-600 text-white rounded-t-lg p-4">
            <CardTitle className="flex items-center gap-3 text-lg">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <div>Westpac Assistant</div>
                <div className="text-sm text-red-100 font-normal flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Online now
                </div>
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] ${message.sender === "user" ? "order-2" : "order-1"}`}>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.sender === "user"
                          ? "bg-[#d31d1a] text-white rounded-br-md"
                          : "bg-gray-100 text-gray-800 rounded-bl-md"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <div className={`flex items-center gap-1 mt-1 text-xs text-gray-500 ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}>
                      <Clock className="h-3 w-3" />
                      {formatTime(message.timestamp)}
                    </div>
                  </div>

                  <div className={`flex items-end mb-6 ${
                    message.sender === "user" ? "order-1 mr-2" : "order-2 ml-2"
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === "user"
                        ? "bg-[#d31d1a] text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}>
                      {message.sender === "user" ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4" />
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 mb-2">Quick options:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs h-8 hover:bg-[#d31d1a] hover:text-white transition-colors duration-200"
                      onClick={() => handleQuickReply(reply)}
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 focus:ring-[#d31d1a] focus:border-[#d31d1a]"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      sendMessage(inputMessage);
                    }
                  }}
                />
                <Button
                  className="bg-[#d31d1a] hover:bg-red-700 transition-colors duration-200"
                  onClick={() => sendMessage(inputMessage)}
                  disabled={!inputMessage.trim() || isTyping}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Available 24/7 • Responses may take a few seconds
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
