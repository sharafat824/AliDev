import { io } from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "https://ali-dev-bay.vercel.app");

export default socket;