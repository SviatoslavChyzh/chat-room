import { threads } from "../../fixtureData/threads";

export type Thread = {
  id: string;
  title: string;
  content: string;
};

export async function getThreads(): Promise<
  Array<{ id: string; title: string; content: string }>
> {
  const result = await new Promise((resolve) => {
    setTimeout(() => resolve(threads), 1000);
  });

  return result as Array<Thread>;
}
