import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --dark: hsl(345, 6%, 13%);
  --white: hsla(0, 0%, 100%, 1);
  --light-grey: hsl(0, 0%, 93%);
  --mid-gray: #4B4B4B;
  --primary: hsla(358, 75%, 50%, 1);
  --secondary: hsla(358, 75%, 55%, 1);

  --normal: 400;
  --bold: 700;
  --extra-bold: 800;
}

a {
  color: var(--dark);
  text-decoration: none;
}

a:hover {
  color: var(--secondary);
}

ul {
  list-style: none;
}

html, body, button, a, p {
  color: var(--dark);
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
}

`
