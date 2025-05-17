import ThemeSwitcher from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <header>
        <ThemeSwitcher />
      </header>
      <main>
        <Button>Click me</Button>
      </main>
      <footer></footer>
    </div>
  );
}
