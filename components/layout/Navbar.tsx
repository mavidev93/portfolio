"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { Bold, Italic, Underline } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "../ui/button";
import { ModeToggle } from "../modeToggle";
const links = [
  { className: "", href: "/", label: "Home" },
  { className: "", href: "/projects", label: "Projects" },
  { className: "", href: "/about", label: "About" },
];
function Navbar() {
  const pathname = usePathname();

  return (
    <div className="mb-12  py-5">
      <nav className="flex items-center gap-4 justify-center  max-w-[400px] mx-auto">
        {links.map((link) => (
          <Button
            key={link.href}
            asChild
            variant={pathname === link.href ? "default" : "outline"}
            className="text-sm cursor-pointer"
          >
            <NavLink href={link.href}>{link.label}</NavLink>
          </Button>
        ))}
        <div>
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className }: NavLinkProps) => {
  return (
    <Link href={href}>
      <div className={` ${className || ""}`}>{children}</div>
    </Link>
  );
};

export default Navbar;
