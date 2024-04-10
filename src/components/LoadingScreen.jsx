import loading from "../assets/loading.gif";

export default function LoadingScreen() {
	return (
		<div className="w-full h-full flex flex-col items-center mt-40">
			<img src={loading} alt="Loading GIF" className="w-40 h-auto" />
			<h2 className="text-center text-small-text text-white/45 leading-none my-4">
				LOADING . . .
			</h2>{" "}
		</div>
	);
}
