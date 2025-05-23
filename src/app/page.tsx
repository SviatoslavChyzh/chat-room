"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useRef, useState } from "react";
import { ArrowUp, Globe, Paperclip } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ChatMessage from "./_components/ChatMessage";
import { mockMessages } from "../../fixtureData/messages";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  file?: File | null;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = () => {
    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: message,
      isUser: true,
      file: selectedFile,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setSelectedFile(null);

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `This is a simulated response to your message: "${message}"`,
        isUser: false,
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);

      e.target.value = "";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
      setMessage("");
    }
  };

  return (
    <Card className="mx-2 grid grid-rows-[1fr_auto]">
      <CardContent className="h-[65vh] overflow-y-auto">
        <div className="space-y-6 mb-20">
          {messages.map((message) => (
            <ChatMessage key={message.id} isUser={message.isUser}>
              {message.isUser ? (
                <>
                  <p>{message.content}</p>
                  {message.file && (
                    <div className="mt-4">
                      <img
                        src={URL.createObjectURL(message.file)}
                        alt="Selected file"
                        className="max-w-full h-auto rounded-lg"
                      />
                    </div>
                  )}
                </>
              ) : (
                <div className="space-y-4">
                  {message.content.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              )}
            </ChatMessage>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col m-2 p-2 border border-zinc-700 rounded">
        <Input
          type="text"
          placeholder="Type your message here..."
          className="w-full px-4 py-8 focus:outline-none rounded-lg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="flex w-full justify-between mt-2">
          <div className="flex gap-4 items-center">
            <Select value="gemini">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Agents</SelectLabel>
                  <SelectItem value="gemini">Gemini</SelectItem>
                  <SelectItem value="bard">Bard</SelectItem>
                  <SelectItem value="claude">Claude</SelectItem>
                  <SelectItem value="mistral">Mistral</SelectItem>
                  <SelectItem value="llama">Llama</SelectItem>
                  <SelectItem value="gpt4">GPT-4</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button>
              <Globe />
              Web Search
            </Button>
          </div>
          <div className="flex gap-4 items-center">
            {selectedFile && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="truncate max-w-[120px]">
                  {selectedFile.name}
                </span>
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => setSelectedFile(null)}
                  title="Remove file"
                >
                  ×
                </button>
              </div>
            )}
            <Button
              size="icon"
              variant="ghost"
              className="text-gray-400"
              onClick={() => fileInputRef.current?.click()}
              type="button"
            >
              <Paperclip className="h-5 w-5" />
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
            </Button>
            <Button
              size="icon"
              className="rounded-full"
              onClick={handleSendMessage}
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
