import { Outlet } from "react-router-dom";

export default function Play() {
	return (
		<div className="hero relative bg-bg-image h-screen w-full bg-center bg-no-repeat bg-cover font-main-font">
			<div className="h-full w-full relative flex flex-col gap-14">
				<div className="container w-11/12 h-full mx-auto my-5">
					<div className="flex flex-col justify-start text-white/45 gap-0">
						<h2 className="text-small-logo-sm leading-none">
							ANIME <br /> <span className="text-big-logo-sm">SCHOOL</span>
						</h2>
					</div>
					<div className="w-auto h-auto">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
}
