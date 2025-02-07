"use client";
import { useUser, useClerk } from "@clerk/nextjs";
import { useState } from "react";

export default function Profile() {
    const { user } = useUser();
    const { clerk } = useClerk();
    const [name, setName] = useState(user?.fullName || "");
    const [email, setEmail] = useState(user?.primaryEmailAddress?.emailAddress || "");

    const handleUpdateProfile = async () => {
        try {
            await clerk.users.updateUser(user.id, {
                fullName: name,
                primaryEmailAddress: email,
            });
            alert("Profile updated successfully!");
        } catch (error) {
            alert("Error updating profile!");
        }
    };

    return (
        <div className="max-w-2xl mx-auto py-10">
            <h1 className="text-2xl font-bold mb-6">Update Profile</h1>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                    disabled
                />
            </div>

            <button
                onClick={handleUpdateProfile}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
                Update Profile
            </button>
        </div>
    );
}
