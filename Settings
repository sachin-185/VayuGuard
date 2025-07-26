import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Bell, 
  Shield, 
  Globe, 
  Palette, 
  HelpCircle, 
  LogOut,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function Settings() {
  const settingsItems = [
    {
      icon: Bell,
      title: "Notifications",
      description: "Air quality alerts and updates",
      action: "switch"
    },
    {
      icon: Shield,
      title: "Privacy",
      description: "Data and location settings",
      action: "navigate"
    },
    {
      icon: Globe,
      title: "Language",
      description: "English",
      action: "navigate"
    },
    {
      icon: Palette,
      title: "Theme",
      description: "App appearance",
      action: "navigate"
    },
    {
      icon: HelpCircle,
      title: "Help & Support",
      description: "FAQs and contact",
      action: "navigate"
    }
  ];

  return (
    <div className="p-4 pb-20">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-4">
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <span className="ml-2 font-semibold text-gray-800">Settings</span>
        </div>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        {settingsItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  
                  {item.action === "switch" ? (
                    <Switch />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="shadow-md border-red-200">
            <CardContent className="p-4">
              <Button
                variant="ghost"
                className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <LogOut className="w-5 h-5 mr-3" />
                Sign Out
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <div className="text-center pt-6 text-gray-400 text-sm">
          VayuGuard v1.0.0
        </div>
      </div>
    </div>
  );
}