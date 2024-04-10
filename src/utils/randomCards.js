export const randomIndex = (cards) => {
	const indexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
	const selectedCards = [];
	for (let num = 0; num < 3; num++) {
		let selected = indexArr[Math.floor(Math.random() * indexArr.length)];
		if (selectedCards.includes(selected)) continue;

		selectedCards.push(cards[selected]);
		indexArr.splice(selected, 1);
	}

	return selectedCards;
};
