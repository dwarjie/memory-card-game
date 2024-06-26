import React from "react";
import ReactDOM from "react-dom/client";
import MenuScreen from "./routes/MenuScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Play from "./routes/Play";
import MemoryCard, { memoryLoader } from "./routes/MemoryCard";
import WinScreen, { winLoader } from "./routes/WinScreen";
import LostScreen, { lostLoader } from "./routes/LostScreen";
import AboutScreen from "./routes/AboutScreen";

const router = createBrowserRouter([
	{
		path: "/memory-card-game",
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
			{
				path: "win/:score",
				element: <WinScreen />,
				loader: winLoader,
			},
			{
				path: "lost/:score",
				element: <LostScreen />,
				loader: lostLoader,
			},
		],
	},
	{
		path: "about",
		element: <AboutScreen />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
