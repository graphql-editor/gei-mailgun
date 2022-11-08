/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	MessageQuery:{
		send:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
	MessageQuery:{
		send:"String"
	},
	Query:{
		messages:"MessageQuery"
	}
}

export const Ops = {
query: "Query" as const
}