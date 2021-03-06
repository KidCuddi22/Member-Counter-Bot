import Counter from "../typings/Counter";

const Math: Counter = {
	aliases: ["sum", "subtract", "multiply", "divide", "mod", "modulus"],
	isPremium: false,
	isEnabled: true,
	lifetime: 0,
	execute: async ({ args, aliasUsed }) => {
		const values = args[0]?.map((n) => Number(n));

		switch (aliasUsed) {
			case "sum":
				return values.reduce((accu, curr) => accu + curr);

			case "subtract":
				return values.reduce((accu, curr) => {
					return accu - curr;
				});

			case "multiply":
				return values.reduce((accu, curr) => accu * curr);

			case "divide":
				return values.reduce((accu, curr) => accu / curr);

			case "mod":
			case "modulus":
				return values.reduce((accu, curr) => accu % curr);

			default:
				break;
		}
	}
};

export default Math;
