import Dropdown from "./Dropdown";
import {
  LayoutDashboard,
  FolderPlus,
  Lock,
  User,
  Bell,
  ShoppingCart,
  Settings
} from "lucide-react";

export default function Sidebar({ isOpen }) {
  return (
    <aside
      className={`
        fixed top-0 bottom-0 w-[240px] p-4 rounded-xl
        backdrop-blur-lg bg-black/30 transition-all duration-300
        ${isOpen ? "left-4" : "-left-full"}
        lg:left-4
      `}
    >

      {/* Logo */}
      <div className="flex items-center gap-2 border-b pb-3">
        <LayoutDashboard />
        <span>Plating</span>
      </div>

      {/* Content */}
      <div className="mt-6 space-y-2">

        <a className="flex items-center gap-2 p-2 rounded hover:bg-black/30">
          <LayoutDashboard /> Dashboard
        </a>

        <Dropdown icon={<FolderPlus />} title="Create" />

        <Dropdown icon={<Lock />} title="Account" />

        <Dropdown icon={<User />} title="Profile" />

        <a className="flex items-center gap-2 p-2 hover:bg-black/30 rounded">
          <Bell /> Notifications
        </a>

        <a className="flex items-center gap-2 p-2 hover:bg-black/30 rounded">
          <ShoppingCart /> Products
        </a>

        <a className="flex items-center gap-2 p-2 hover:bg-black/30 rounded">
          <Settings /> Settings
        </a>

      </div>
    </aside>
  );
}