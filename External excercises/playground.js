const findTheOldest = function (arr) {
	let oldest = {};
	arr.filter((value) => {
		if (
			oldest.yearOfDeath - oldest.yearOfBirth >
			value.yearOfDeath - value.yearOfBirth
		) {
			oldest = value;
		}
		return oldest;
	});
};

const people = [
	{
		name: 'Carly',
		yearOfBirth: 1942,
		yearOfDeath: 1970,
	},
	{
		name: 'Ray',
		yearOfBirth: 1962,
		yearOfDeath: 2011,
	},
	{
		name: 'Jane',
		yearOfBirth: 1912,
		yearOfDeath: 1941,
	},
];

console.log(findTheOldest(people));
