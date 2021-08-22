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
        --dark_gray: #282a36;
    }

    @media screen and (min-width: 1280px) and (max-width: 1500px) {
        :root {
            --horizontal__padding: 15%;
            --vertical__padding: 40px;
            --grid__flex__direction: column;
            --width: 80%;
        }
    }
    @media screen and (min-width: 1501px) {
        :root {
            --horizontal__padding: 25%;
            --vertical__padding: 40px;
            --grid__flex__direction: column;
            --width: 80%;
        }
    }
    
    @media screen and (min-width: 769px) and (max-width: 1279px) {
        :root {
            --horizontal__padding: 150px;
            --vertical__padding: 40px;
            --grid__flex__direction: column;
            --width: 80%;
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        :root {
            --horizontal__padding: 70px;
            --vertical__padding: 40px;
            --grid__flex__direction: column;
            --width: 75%;
        }
    }
    @media screen and (max-width: 480px) {
        :root {
            --horizontal__padding: 30px;
            --vertical__padding: 40px;
            --grid__flex__direction: row;
            --width: 100%;
        }
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
        /* background: #ecf1f8; */
        background: white;
        color: #333;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }
`;