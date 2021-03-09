const key = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export function saveToken(token) {
	window.localStorage.setItem('t', window.btoa(token));
}

export function getToken() {
	if (!window.localStorage.getItem('t')) return null;
	return window.atob(window.localStorage.getItem('t'));
}

export function removeToken() {
	window.localStorage.removeItem('t');
}

export function saveUserInfo(data) {
	window.localStorage.setItem('u', encode(data));
}

export function getUserInfo() {
	if (!window.localStorage.getItem('u')) return null;
	return decode(window.localStorage.getItem('u'));
}

// 从对象中取值
export function getVal(obj, query, defaultValue) {
	if (obj === null || !(typeof obj === 'object')) {
		let realType = obj === null ? 'null' : typeof obj;
		console.error(`[getVal]: parameter obj's type should be 'object', but it is ${realType}`);
		return defaultValue;
	}
	if (typeof query !== 'string') {
		throw new Error(`[getVal]: parameter query's should be string, but it is ${typeof query}`);
	}
	const keys = query.split('.');
	for (let i = 0, len = keys.length; obj && i < len; i++) {
		// eslint-disable-next-line
		obj = obj[keys[i]];
	}
	if (!obj) {
		return defaultValue;
	} else {
		return obj;
	}
}

/**
 * 生成随机数
 */
export function randomUrl() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
		.replace(/[xy]/g, function(c) {
			let r = (Math.random() * 16) | 0;
			let v = c === 'x' ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		})
		.toUpperCase();
}

/**
 * 生成唯一的字符串
 * @return str{string}
 */
export function genUniqStr() {
	return (
		Math.random()
			.toString(36)
			.substring(7) + Date.now().toString(16)
	);
}

/**
 * 可控长度随机数
 * */
export function getRandomId(length = 8) {
	return String(Math.random())
		.replace('.', '')
		.substr(0, length);
}
