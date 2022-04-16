import { createSlice } from '@reduxjs/toolkit';

const appKey = 'yonescat-site-1.0'

export const locales = {
	"English": require('./locales/en-US.json'),
	"Chinese": require('./locales/zh-CN.json'),
	"Arabic": require('./locales/ar.json'),
};

const lang = window.localStorage.getItem('lang') || 'English';
const rtl = Boolean(window.localStorage.getItem('rtl')) || false;


const initialState: StoreType = {
	lang,
	rtl,
	L: locales[lang],
	currentPage: '',
	updated: 0,
	user: null
}

const getStore = (initialState: any) => {
	try {
		const buf = window.localStorage.getItem(appKey)
		if (buf) {
			const json = JSON.parse(buf)
			for (let k in json) {
				if (initialState[k] !== undefined) {
					initialState[k] = json[k]
				}
			}
		}
	} catch (err) {
		console.log(err)
	}
	return initialState
}

const setStore = (state: any) => {
	window.localStorage.setItem(appKey, JSON.stringify(state))
}

export default createSlice({
	name: 'Yonescat',
	initialState: getStore(initialState),
	reducers: {
		update: (state: any, action) => {
			for (const k in action.payload) {
				if (state[k] === undefined) new Error('🦊 undefined account item')
				state[k] = action.payload[k]
			}
			setStore(state)
		}
	}
})

