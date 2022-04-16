
declare interface SessionType {
	username: string
	created: number
}

declare interface LoginReqeustType {
	username: string
	password: string
}

declare interface LoginResponseType {
	tokenId: string
	lastSeen: number
	created: number
}

declare interface RegisterReqeustType {
	username: string
	email: string
	password: string
}
declare interface ResetReqeustType {
	email: string
}

declare interface ResetResponseType {
	success: boolean
}

declare interface ResultType {
	err: string,
	result: string
}

interface StoreType {
	rtl: boolean
	lang: string
	L: { [lang: string]: any }
	user: LoginResponseType | null
	updated: number
	loading?: boolean
	currentPage: string
}
interface ServerResponse {
	err: number
	data: JSON
}
interface UseStoreTypes extends StoreType {
	changeLang(lange: string)
	changeRtl(lange: rtl)
	T(key: string, args?: { [key: string]: string | number } | string | number): string
	update(payload: { [key: string]: string | number | boolean | PendingTypes | TxTypes | CoinTypes })
	call(url: string, params?: any): Promise<ServerResponse | null>
}