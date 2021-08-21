import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

    :root {
        --white: #fff;
        --white-hover: #efefef;
        --primary: #ea1d2c;
        --primary_hover: #ca1e2a;
        --secondary: #1B1E32;
        --secondary_light: #222640;
        --tertiary: #141628;
        /* --dark_gray: #1d1e22; */
        --dark_gray: #282a36;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font: 14px 'Robot', sans-serif;
        background: #ecf1f8;
        color: #333;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }
`;