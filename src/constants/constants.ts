type ScreenTitleMap = Record<string, string>;

export const MENU = [
{ label: "Main", path: "/" },
{ label: "History", path: "/history" },
{ label: "Settings", path: "/settings" },
];


export const SCREEN_TITLES: ScreenTitleMap = {
"/": "Main",
"/history": "History",
"/settings": "Settings",
"/profile": "Profile",
};