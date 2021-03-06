import Counter from "../typings/Counter";

const MemberCounter: Counter = {
	aliases: ["members", "count"],
	isPremium: false,
	isEnabled: true,
	lifetime: 0,
	execute: async ({ guild }) => {
		return guild.memberCount;
	}
};

export default MemberCounter;
