import { useThreads } from "@/queries/useThreads";
import Link from "next/link";

export default async function ThreadsList() {
  const threads = await useThreads();

  return (
    <div className="flex flex-col gap-4">
      {threads.map((thread) => (
        <Link href={`/${thread.id}`} key={thread.id}>
          <div className="py-2 hover:bg-white hover:border hover:rounded-md hover:pointer">
            <div className="px-2 text-sm">{thread.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
