import React from "react";
import ReactDOM from "react-dom/client";
import MenuScreen from "./routes/MenuScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Play from "./routes/Play";
import MemoryCard, { memoryLoader } from "./routes/MemoryCard";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MenuScreen />,
	},
	{
		path: "play",
		element: <Play />,
		children: [
			{
				path: "memory-card?",
				element: <MemoryCard />,
				loader: memoryLoader,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
