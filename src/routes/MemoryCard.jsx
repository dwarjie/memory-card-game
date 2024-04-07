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
	const [score, setScore] = useState(0);
	const [clickedCards, setClickedCards] = useState([]);
	const [selectedCards, setSelectedCards] = useState([]);

	useEffect(() => {
		if (data) getRandomCards();
	}, []);

	const chooseCard = (card) => {
		if (clickedCards.includes(card)) return console.log("Exist");

		if (score === 9) return console.log("Winner");

		let chosenCard = clickedCards || [];
		chosenCard.push(card);
		setClickedCards(chosenCard);
		console.log(clickedCards);
		setScore(score + 1);
		getRandomCards();
	};

	const getRandomCards = () => {
		const cardsArr = randomIndex(data);
		setSelectedCards(cardsArr);
	};

	const renderCards = () => {
		return (
			selectedCards &&
			selectedCards.map((item, index) => {
				return (
					<div
						key={index}
						className="w-36 rounded cursor-pointer transition-all duration-150 hover:scale-105 hover:shadow-sm"
						onClick={() => chooseCard(item.mal_id)}
					>
						<img
							src={item.images.jpg.image_url}
							alt={item.title_english}
							className="w-full h-auto rounded"
						/>
					</div>
				);
			})
		);
	};

	return (
		<div className="w-full h-full my-6">
			<h2 className="text-small-text text-white/45 leading-none my-4">
				{`SCORE:  ${score}`}
			</h2>
			<div className="h-full flex flex-col items-center gap-6">
				{renderCards()}
			</div>
			<h2 className="text-center text-small-text text-white/45 leading-none my-4">
				SELECT A CARD
			</h2>
		</div>
	);
}
