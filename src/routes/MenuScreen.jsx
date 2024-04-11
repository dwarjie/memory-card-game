import { useState } from "react";
import { Link } from "react-router-dom";

function MenuScreen() {
	return (
		<div className="hero relative bg-bg-image h-screen bg-center bg-no-repeat bg-cover font-main-font">
			<div className="h-full relative flex flex-col items-center justify-center gap-14">
				<div className="text-center text-white/45">
					<h2 className="text-small-title-sm">ANIME</h2>
					<h1 className="text-big-title-sm">SCHOOL</h1>
				</div>
				<div className="text-center text-white">
					<h3 className="text-button-sm">
						<Link to={`/play/memory-card`}>PLAY</Link>
					</h3>
					<h3 className="text-button-sm">
						<Link to={`/about`}>ABOUT</Link>
					</h3>
				</div>
			</div>
		</div>
	);
}

export default MenuScreen;
