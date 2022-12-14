/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Mutation:{
		send:{
			mailgunData:"MailgunData"
		},
		sendHTML:{
			mailgunData:"MailgunData"
		}
	},
	MailgunData:{

	}
}

export const ReturnTypes: Record<string,any> = {
	Mutation:{
		send:"String",
		sendHTML:"String"
	},
	Query:{
		version:"String"
	}
}

export const Ops = {
mutation: "Mutation" as const,
	query: "Query" as const
}