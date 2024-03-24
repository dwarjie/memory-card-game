import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPopularAnime } from "../utils/fetchAPI";
import { randomIndex } from "../utils/randomCards";

export const memoryLoader = async () => {
	const cards = await getPopularAnime();
	return cards.data.slice(0, 9);
};

export default function MemoryCard() {
	const data = useLoaderData();
	console.log(data);
	const [clickedCards, setClickedCards] = useState();

	const renderCards = () => {
		const indexArr = randomIndex();
		return (
			data &&
			data.map((item, index) => {
				if (indexArr.includes(index)) {
					return (
						<div
							key={index}
							className="w-36 rounded cursor-pointer transition-all duration-150 hover:scale-105 hover:shadow-sm"
						>
							<img
								src={item.images.jpg.image_url}
								alt={item.title_english}
								className="w-full h-auto rounded"
							/>
						</div>
					);
				}
			})
		);
	};

	return (
		<div className="w-full h-full my-14">
			<div className="h-full flex flex-col items-center gap-6">
				{renderCards()}
			</div>
		</div>
	);
}
