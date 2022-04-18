import { objectType } from "nexus";
import { FullName, DepositAddress } from "../commons";

export const Retail = objectType({
	name: "Retail",
	definition(t) {
		t.id("id");
		t.list.string("supportTicket");
		t.string("email");
		t.string("nickname");
		t.field("fullName", { type: FullName });
		t.field("depositAddress", { type: DepositAddress });
	},
});
