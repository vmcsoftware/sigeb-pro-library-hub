import { 
  BarChart3, 
  BookOpen, 
  Users, 
  Calendar, 
  FileText, 
  Settings, 
  LogOut,
  Menu
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/", icon: BarChart3 },
  { name: "Livros", href: "/livros", icon: BookOpen },
  { name: "Usuários", href: "/usuarios", icon: Users },
  { name: "Empréstimos", href: "/emprestimos", icon: Calendar },
  { name: "Relatórios", href: "/relatorios", icon: FileText },
  { name: "Configurações", href: "/configuracoes", icon: Settings },
];

interface SigebSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function SigebSidebar({ collapsed, onToggle }: SigebSidebarProps) {
  const location = useLocation();

  return (
    <div
      className={cn(
        "fixed left-0 top-0 h-full bg-sigeb-dark border-r border-sigeb-dark-lighter transition-all duration-300 z-50",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-sigeb-dark-lighter">
        {!collapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sigeb-primary to-sigeb-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SP</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold text-lg">SIGEB</span>
              <span className="text-sigeb-gray text-xs">Pro</span>
            </div>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="text-sigeb-gray hover:text-white p-2"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* School Info */}
      {!collapsed && (
        <div className="px-4 py-3 border-b border-sigeb-dark-lighter">
          <p className="text-sigeb-primary text-sm font-medium">Sistema de Gestão de Biblioteca</p>
          <p className="text-sigeb-gray text-xs mt-1">Escola Estadual Bias Forte</p>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors group",
                    isActive
                      ? "bg-sigeb-primary text-white"
                      : "text-sigeb-gray hover:text-white hover:bg-sigeb-dark-lighter"
                  )}
                >
                  <item.icon
                    className={cn(
                      "h-5 w-5 flex-shrink-0",
                      collapsed ? "mx-auto" : "mr-3"
                    )}
                  />
                  {!collapsed && <span>{item.name}</span>}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Info & Logout */}
      <div className="p-4 border-t border-sigeb-dark-lighter">
        {!collapsed && (
          <div className="mb-4">
            <p className="text-white text-sm font-medium">admin@sigeb2.com</p>
            <p className="text-sigeb-gray text-xs">Administrador</p>
          </div>
        )}
        <Button
          variant="ghost"
          className={cn(
            "text-sigeb-gray hover:text-white hover:bg-sigeb-dark-lighter",
            collapsed ? "w-full justify-center p-3" : "w-full justify-start"
          )}
        >
          <LogOut className={cn("h-5 w-5", !collapsed && "mr-3")} />
          {!collapsed && "Sair"}
        </Button>
      </div>
    </div>
  );
}