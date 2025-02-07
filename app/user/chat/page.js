"use client"
import Chat from "@/components/Chat";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useUser } from "@clerk/nextjs";

export default function UserChat() {
  const adminId = process.env.ADMIN_ID || "user_2sJOFvZwRleoG9FAnw5aE725ydr";
  const { user } = useUser();
  
  const roomId = `${user.id}_${adminId}`; 
  console.log(roomId);
  return (
    <>
    <div className="flex h-screen  w-full items-center justify-center p-4 max-h-[70vh]">
    <Card className="w-full max-w-3xl h-[70vh] flex flex-col shadow-2xl border border-gray-200 rounded-lg overflow-hidden">
    {/* Header */}
    <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 px-8">
      <CardTitle className="text-xl font-bold">Chat with Developer</CardTitle>
    </CardHeader>

    {/* Chat Content (Flexible Height) */}
    <CardContent className="flex-1 overflow-hidden py-4 px-0 bg-white">
      {roomId ? (
        <Chat roomId={roomId} receiverId={adminId} />
      ) : (
        <p className="text-gray-500">Invalid room ID.</p>
      )}
    </CardContent>
  </Card>
</div>
    </>
  );
}
