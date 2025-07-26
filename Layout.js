import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { User } from "@/entities/User";
import { 
  Home, 
  Map, 
  User as UserIcon, 
  Route,
  Settings,
  MessageCircle,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const userData = await User.me();
      setUser(userData);
    } catch (error) {
      // User not logged in
    }
  };

  const navigationItems = [
    { title: "Home", url: createPageUrl("Home"), icon: Home },
    { title: "Maps", url: createPageUrl("Maps"), icon: Map },
    { title: "Profile", url: createPageUrl("Profile"), icon: UserIcon },
    { title: "Non-pollution Route", url: createPageUrl("Routes"), icon: Route },
    { title: "AI Chatbox", url: createPageUrl("Chat"), icon: MessageCircle },
    { title: "Settings", url: createPageUrl("Settings"), icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-48 h-48 border-4 border-blue-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-8 w-64 h-64 border-4 border-blue-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border-4 border-blue-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 border-4 border-blue-200 rounded-full opacity-30"></div>
      </div>

      {/* Mobile Header */}
      <header className="relative z-50 bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-3 flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-700"
        >
          <Menu className="w-6 h-6" />
        </Button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">UN</span>
          </div>
          <span className="font-semibold text-gray-800">
            {user?.full_name || "UserName"}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <img 
            src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=40&h=40&fit=crop&crop=center" 
            alt="VayuGuard" 
            className="w-10 h-10 rounded-full"
          />
          <span className="text-sm font-bold text-blue-600">VayuGuard</span>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-yellow-200 to-yellow-300 transform transition-transform duration-300 z-50 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">UN</span>
              </div>
              <div>
                <h2 className="font-bold text-gray-800">UserName</h2>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.url
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-yellow-100'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-3 text-gray-600">
            <div className="flex-1 text-center">
              <div className="text-2xl">•••</div>
            </div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* AI Chatbot Button */}
      <Link 
        to={createPageUrl("Chat")}
        className="fixed bottom-6 right-6 z-30"
      >
        <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-800">
          <MessageCircle className="w-6 h-6 text-gray-800" />
        </div>
      </Link>
    </div>
  );
}