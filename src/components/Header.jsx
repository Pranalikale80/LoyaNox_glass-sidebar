import { Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header({ toggle }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">

      <div className="flex items-center justify-between backdrop-blur-lg bg-black/30 rounded-xl px-4 py-2">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Shield />
          <span>Plating</span>
        </div>

        {/* Toggle Button */}
        <Button onClick={toggle} variant="ghost">
          <Menu />
        </Button>
      </div>
    </header>
  );
}