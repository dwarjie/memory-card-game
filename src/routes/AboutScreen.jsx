import { useNavigate } from "react-router-dom";

export default function AboutScreen() {
	const navigate = useNavigate();

	return (
		<div className="hero relative bg-bg-image h-screen w-full bg-center bg-no-repeat bg-cover font-main-font">
			<div className="h-full w-full relative flex flex-col gap-14">
				<div className="container w-11/12 h-full mx-auto my-5">
					<div className="flex flex-col justify-start text-white/45 gap-0">
						<h2
							className="text-small-logo-sm leading-none cursor-pointer"
							onClick={() => navigate(`/memory-card-game`)}
						>
							ANIME <br /> <span className="text-big-logo-sm">SCHOOL</span>
						</h2>
					</div>
					<div className="w-auto h-auto text-center text-white/45 mt-16">
						<div>
							<h2 className="text-small-logo-sm leading-none mb-3">
								Hi! I'm Mark Darius
							</h2>
							<h2 className="text-small-logo-sm leading-none">
								I made this Memory Card Game for The Odin Project
							</h2>
							<h2 className="text-small-logo-sm leading-none">
								You can check the source code{" "}
								<a
									href="https://github.com/dwarjie/memory-card-game"
									className="text-white"
								>
									here
								</a>
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
