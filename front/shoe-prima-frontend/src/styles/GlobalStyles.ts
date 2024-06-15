import { createGlobalStyle } from 'styled-components';

type GlobalStyleType = ReturnType<typeof createGlobalStyle>; // createGlobalStyle 함수의 반환 타입을 추론

const GlobalStyle: GlobalStyleType = createGlobalStyle`
    :root {
        --color-lightgray300: #E5E5E5;
        --color-white900: #FFF;
    }
`;

export default GlobalStyle;
