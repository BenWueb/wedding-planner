import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`



* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scrollbar-width: none;
}

:root {
  --fs-400: clamp(3rem, 12vw + 1rem, 6.5rem);
  --fs-600: clamp(2rem, 6vw + 1rem, 4rem);
  --fs-800: clamp(1rem, 6vw + 0.5rem, 3rem);
  --fs-900: clamp(1rem, 4vw + 0.5rem, 2rem);
  --fs-1000: clamp(1rem, 1vw + 0.25rem, 1.5rem);
  --fs-1100: clamp(1rem, 1vw + 0.25rem, 1rem);
  --fs-1200: clamp(0.75rem, 1vw + 0.25rem, 0.8rem);
  --font: "Luxurious Script", sans-serif;
  --secondary-dark: #ed6a5aff;
  --secondary: #b57170;
  --primary: #ffb6c1;
  --background: #FFFFF0;
  --overlay-5: rgb(25, 25, 25);
  --overlay-7: rgb(45, 45, 45);
  --overlay-9: rgba(255, 255, 255, 0.09);
  --overlay-12: rgba(255, 255, 255, 0.12);
  --overlay-16: rgba(255, 255, 255, 0.16);
  --bs: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  --toastify-color-info: #3498db;
  --toastify-color-success: #5ca4a9ff;
  --toastify-color-warning: #f4f1bbff;
  --toastify-color-error: #ed6a5aff;
  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);
}


body {
  font-family: Montserrat, sans-serif;
  font-size: (--fs-600);
  -webkit-font-smoothing: subpixel-antialiased;
  color: rgba(75, 75, 75);
  
}

a {
  text-decoration: none;
}

a:focus {
  outline: none;
}

li {
  list-style-type: none;
}

h1 {
  font-size: var(--fs-400);
  line-height: 5rem;
}

h2 {
  font-size: var(--fs-600);
  line-height: 4rem;
  
}

h3 {
  font-size: var(--fs-800);
  line-height: 2.5rem;
}

h4 {
  font-size: var(--fs-900);
}

h5 {
  font-size: var(--fs-1000);
}

p {
  font-size: var(--fs-1200);
}

 
`;

export default GlobalStyles;
