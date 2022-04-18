import { inputObjectType } from "nexus";
import { FullNameInput, DepositAddressInput } from "../commons";

export const CreateRetailInput = inputObjectType({
	name: "CreateRetailInput",
	definition(t) {
		t.id("id");
		t.list.string("supportTicket");
		t.string("email");
		t.string("nickname");
		t.field("fullName", { type: FullNameInput });
		t.field("depositAddress", { type: DepositAddressInput });
	},
});
