"use client"

import { useUser } from "@clerk/nextjs";
import Loading from "./loading";

export default function Provider({ children }) {
    const { isLoaded } = useUser();

    if (!isLoaded) {
        return <Loading />;
    }
    return (
        <div>
            {children}
        </div>
    )
}
