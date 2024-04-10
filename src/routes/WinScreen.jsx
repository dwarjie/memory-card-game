import { Link, useParams, useLoaderData } from "react-router-dom";
import { getScore } from "../utils/saveScore";

export const winLoader = async () => {
	const bestScore = await getScore();
	return bestScore;
};

export default function WinScreen() {
	let params = useParams();
	const bestScore = useLoaderData();
	console.log(bestScore);

	return (
		<div className="w-full h-full mt-40">
			<div className="flex flex-col items-center gap-6">
				<h1 className="text-big-title-sm text-white/45">YOU WIN</h1>
				<h2 className="text-small-text text-white/45 leading-none">
					CURRENT SCORE: {params.score}
				</h2>
				<h2 className="text-small-text text-white/45 leading-none">
					BEST SCORE: {bestScore}
				</h2>
			</div>
			<div className="text-left text-white mt-10">
				<h3 className="text-small-text">
					<Link to={`../memory-card`}>PLAY</Link>
				</h3>
				<h3 className="text-button-sm">
					<Link to={`about`}>ABOUT</Link>
				</h3>
			</div>
		</div>
	);
}
