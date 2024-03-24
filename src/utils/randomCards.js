export const randomIndex = () => {
	const indexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	const selectedArr = [];
	for (let num = 0; num < 3; num++) {
		let selected = indexArr[Math.floor(Math.random() * indexArr.length)];
		selectedArr.push(selected);
		indexArr.splice(selected, 1);
	}

	return selectedArr;
};
