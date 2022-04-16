import { useSelector, useDispatch } from 'react-redux';
import Slice, { locales } from './reducer'
import errors from './config/errors.json'

export const now = () => Math.round(new Date().getTime() / 1000)
const proxy = process.env.REACT_APP_PROXY || ''

export const getError = (code: number) => errors[code] || 'Unknown error';

const useStore = (): UseStoreTypes => {
	const G = useSelector((state: StoreType) => state)
	let L = G.L
	// let rtl = G.rtl
	const dispatch = useDispatch()
	const update = (payload: { [key: string]: any }) => dispatch(Slice.actions.update(payload))

	const changeLang = (lang: string) => {
		var localLang = locales[lang]
		if (lang === 'Arabic') {
			changeRtl(true)
		} else {
			changeRtl(false)
		}
		update({ lang, L: localLang })
	}

	const changeRtl = (rtl: boolean) => {
		update({ rtl })
		document.dir = rtl?"rtl":"ltr";
	}

	const T = (key: string, args?: { [key: string]: string | number } | string | number): string => {
		let text = L[key]
		if (text === undefined) throw new Error('Undefined lang key[' + key + ']')
		if (typeof args === 'string' || typeof args === 'number') {
			text = text.replace(/\{\w+\}/, String(args))
		} else {
			for (let k in args) text = text.replace(new RegExp('{' + k + '}', 'g'), String(args[k]))
		}
		return text
	}

	const call = async (url: string, params?: any): Promise<ServerResponse | null> => {
		try {
			const result = await fetch(proxy + url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: params ? JSON.stringify(params) : null });
			return await result.json();
		} catch (error) {
			console.log(error)
			update({ loading: false })
		}
		return null
	}
	return { ...G, T, update, call, changeRtl, changeLang };
}

export default useStore