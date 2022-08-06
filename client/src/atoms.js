/* eslint-disable no-unused-vars */
import { atom } from 'recoil';

export const UI_LANGUAGE = atom({
	key: 'language',
	default: 'cz',
});
export const UI_SIDEBAR = atom({
	key: 'toggle',
	default: false,
});
export const UI_HAS_SIDEBAR = atom({
	key: 'visibility',
	default: false,
});
export const UI_THEME = atom({
	key: 'theme',
	default: 'classic',
});
export const CLIENT_ADRESS = atom({
	key: 'url',
	default: 'http://localhost:3000',
});

