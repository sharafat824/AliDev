"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        setUsers(data.users);
        setFilteredUsers(data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const results = users.filter((user) =>
      user.email.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(results);
    setCurrentPage(1); // Reset pagination when searching
  }, [search, users]);

  const getAvatarColor = (email) => {
    const colors = [
      "bg-blue-200",
      "bg-red-200",
      "bg-green-200",
      "bg-purple-200",
      "bg-yellow-200",
      "bg-indigo-200",
      "bg-pink-200",
      "bg-teal-200",
      "bg-orange-200",
      "bg-cyan-200",
    ];
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
      hash = email.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const displayedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          User List
        </h1>

        {/* Search Bar */}
        <div className="mb-6 flex justify-center">
          <Input
            type="text"
            placeholder="Search users by email..."
            className="w-full sm:w-96 p-3 border border-gray-300 rounded-md bg-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Loading Skeleton */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="bg-white shadow-md rounded-lg p-4">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Skeleton className="w-14 h-14 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[150px]" />
                      <Skeleton className="h-4 w-[100px]" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredUsers.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No users found.</p>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {displayedUsers.map((user) => (
                <Card
                  key={user.clerkUserId}
                  className="bg-white shadow-sm border border-gray-200 rounded-lg p-4 group hover:shadow-md transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      {/* User Avatar */}
                      <Avatar className="w-14 h-14 aspect-square">
                        <AvatarFallback
                          className={`${getAvatarColor(
                            user.email
                          )} text-gray-700 text-xl font-bold uppercase`}
                        >
                          {user.email.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col w-full">
                        <span className="text-lg font-medium text-gray-800 truncate">
                          {user.email}
                        </span>
                        {/* Role Badge */}
                        <Badge
                          className={`w-max px-2 py-1 rounded-md text-xs ${
                            user.role === "Admin"
                              ? "bg-red-100 text-red-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {user.role || "User"}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Chat Button */}
                    <Link
                      href={`/admin/chat?clientId=${user.clerkUserId}`}
                      className="w-full"
                    >
                      <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-[1.02]">
                        Chat
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 space-x-3">
              <Button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                Prev
              </Button>
              <span className="text-lg font-medium text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                Next
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
