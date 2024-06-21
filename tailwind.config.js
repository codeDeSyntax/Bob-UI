/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js'
];
export const theme = {
  extend: {},
  colors:{
    background:'#2f3235',
    lighter:'#22272a',
    text:'#c8cfd3',
    textBlue:'#40aae2'
  }
};
export const plugins = [require('flowbite/plugin')];