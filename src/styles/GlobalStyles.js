import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button {
  margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  box-sizing: border-box;
  text-decoration: none;
  font-family: var(--font-family-2);
  list-style-type: none;
}

button, a, input {
  cursor: pointer;
}

body {
  height: 100vh;
  width: 100vw;
  font-size: 1rem;
}

:root {
  --color-primary: #0b0c12;
  --color-accent: #d02030;
  --color-gray-1: #242833;
  --color-gray-2: #363b47;
  --color-gray-3: #474d59;
  --color-gray-4: #7e838c;
  --color-gray-5: #989ea6;
  --color-gray-6: #b2b8bf;
  --color-gray-7: #c0c5cc;
  --color-gray-8: #ced3d9;
  --color-gray-9: #e6eaf0;
  --color-gray-10: #f5f7fa;
  --font-size-1: 96px;
  --font-size-2: 54px;
  --font-size-3: 32px;
  --font-size-4: 24px;
  --font-family-1: "Poppins", sans-serif;
  --font-family-2: "Roboto", sans-serif;
}

`;
