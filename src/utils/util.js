export const timeStampConversion = (timestamp) => {
	const isToday =
		new Date().toDateString() === timestamp.toDate().toDateString();
	const d2 = new Date();
	d2.setDate(d2.getDate() - 1);
	const isYest = d2.toDateString() === timestamp.toDate().toDateString();
	const d = new Date(timestamp?.toDate()).toLocaleString();
	const arr = d.split(' ');
	// console.log(arr);
	if (isToday) {
		return `今天 ${arr[1]}`;
	} else if (isYest) {
		return `昨天 ${arr[1]}`;
	}
	return arr[0];
};
