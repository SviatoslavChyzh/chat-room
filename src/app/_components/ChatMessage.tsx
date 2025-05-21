import type { ReactNode } from "react";

interface ChatMessageProps {
  isUser: boolean;
  children: ReactNode;
}

export default function ChatMessage({ isUser, children }: ChatMessageProps) {
  return (
    <div
      className={`p-4 rounded-lg max-w-[40%] ${
        isUser
          ? "bg-purple-100 dark:bg-zinc-800 ml-auto text-purple-900 dark:text-purple-200"
          : "bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200"
      }`}
    >
      {children}
    </div>
  );
}
