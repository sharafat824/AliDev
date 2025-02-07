"use client";

import { useSearchParams } from "next/navigation";
import Chat from "@/components/Chat";
import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminChat() {
  const { user } = useUser();
  const searchParams = useSearchParams();
  const clientId = searchParams.get("clientId");

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (!clientId) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50">
        <p className="text-gray-600 text-lg">No user selected. Please select a user to chat.</p>
      </div>
    );
  }

  const roomId = `${clientId}_${user.id}`;

  return (
    <div className="flex h-screen  w-full items-center justify-center p-4 max-h-[70vh]">
        <Card className="w-full max-w-3xl h-[70vh] flex flex-col shadow-2xl border border-gray-200 rounded-lg overflow-hidden">
        {/* Header */}
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 px-8">
          <CardTitle className="text-xl font-bold">Chat with Client</CardTitle>
        </CardHeader>

        {/* Chat Content (Flexible Height) */}
        <CardContent className="flex-1 overflow-hidden py-4 px-0 bg-white">
          {roomId ? (
            <Chat roomId={roomId} receiverId={clientId} />
          ) : (
            <p className="text-gray-500">Invalid room ID.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}