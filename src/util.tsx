import { toast } from 'react-toastify';

export const tips = (html: string) => {
	toast(html, {
		position: "top-right",
		autoClose: 2000,
		closeButton: false,
		style: {
			backgroundColor: '#31242b',
			color: 'white',
			border: '1px solid #f22a73', 
			boxShadow: '1px 2px 2px #f22a73'
		}
	}); 
}


export const TF = (time: number, offset: number = 2) => {
	let iOffset = Number(offset);
	let date = time === undefined ? new Date(Date.now() * 1000 + (3600000 * iOffset)) : (typeof time === 'number' ? new Date(time * 1000 + (3600000 * iOffset)) : new Date(+time + (3600000 * iOffset)));
	let y = date.getUTCFullYear();
	let m = date.getUTCMonth() + 1;
	let d = date.getUTCDate();
	let hh = date.getUTCHours();
	let mm = date.getUTCMinutes();
	let ss = date.getUTCSeconds();
	let dt = ("0" + m).slice(-2) + "-" + ("0" + d).slice(-2);
	let tt = ("0" + hh).slice(-2) + ":" + ("0" + mm).slice(-2) + ":" + ("0" + ss).slice(-2);
	return y + '-' + dt + ' ' + tt;
}
export const NF = (num: number, p: number = 2) => num.toLocaleString('en', { maximumFractionDigits: p });
export const validateEmail = (email: string): boolean => email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== null;
export const validateUsername = (username: string): boolean => /^[a-zA-Z0-9]{3,20}$/.test(username);

export const copyToClipboard = (text: string) => {
	var textField = document.createElement('textarea')
	textField.innerText = text
	document.body.appendChild(textField)
	textField.select()
	document.execCommand('copy')
	textField.remove()
	tips("Copied : " + text);
};
