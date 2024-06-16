import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

type GlobalStyleType = ReturnType<typeof createGlobalStyle>; // createGlobalStyle 함수의 반환 타입을 추론

const GlobalStyle: GlobalStyleType = createGlobalStyle`
    ${reset}
    :root {
        /* Color styles */
        --white--900: rgba(255, 255, 255, 1);
        --black--900: rgba(34, 34, 34, 1);
        --black--opacity20: rgba(34, 34, 34, 0.20000000298023224);
        --black--opacity10: rgba(34, 34, 34, 0.10000000149011612);
        --black--opacity50: rgba(34, 34, 34, 0.5);
        --gray--900: rgba(55, 55, 55, 1);
        --gray--500: rgba(128, 128, 128, 1);
        --lightgray--300: rgba(229, 229, 229, 1);
        --lightgray--200: rgba(244, 244, 244, 1);
        --lightgray--100: rgba(249, 249, 249, 1);
        --red--900: rgba(255, 59, 48, 1);
        --orange--900: rgba(255, 149, 0, 1);
        --orange--opacity10: rgba(255, 149, 0, 0.10000000149011612);
        --yellow--900: rgba(255, 204, 0, 1);
        --green--900: rgba(52, 199, 89, 1);
        --mint--900: rgba(0, 199, 190, 1);
        --teal--900: rgba(48, 176, 199, 1);
        --cyan--900: rgba(50, 173, 230, 1);
        --blue--900: rgba(0, 122, 255, 1);
        --blue--opacity10: rgba(0, 122, 255, 0.10000000149011612);
        --indigo--900: rgba(88, 86, 214, 1);
        --purple--900: rgba(175, 82, 222, 1);
        --pink--900: rgba(255, 45, 85, 1);
        --brown--900: rgba(162, 132, 94, 1);

        /* Text-size styles */
        /* base size: body--body1--regular (16px) */
        --title--title1--regular: 2.25rem;
        --title--title1--bold: 2.25rem;
        --title--title2--regular: 1.75rem;
        --title--title2--bold: 1.75rem;
        --title--title3--regular: 1.5rem;
        --title--title3--bold: 1.5rem;
        --heading--heading1--regular: 1.38rem;
        --heading--heading1--bold: 1.38rem;
        --heading--heading2--regular: 1.25rem;
        --heading--heading2--bold: 1.25rem;
        --headline--headline1--regular: 1.12rem;
        --headline--headline1--bold: 1.12rem;
        --headline--headline2--regular: 1.06rem;
        --headline--headline2--bold: 1.06rem;
        --body--body1--regular: 1rem;
        --body--body1--bold: 1rem;
        --body--body1--underline: 1rem;
        --body--body1--reading: 1rem;
        --body--body2--regular: 0.94rem;
        --body--body2--bold: 0.94rem;
        --body--body2--underline: 0.94rem;
        --body--body2--reading: 0.94rem;
        --body--body3--regular: 0.88rem;
        --body--body3--bold: 0.88rem;
        --body--body3--reading: 0.88rem;
        --label--regular: 0.94rem;
        --label--bold: 0.94rem;
        --caption--caption1--regular: 0.81rem;
        --caption--caption2--regular: 0.75rem;

    }
`;

export default GlobalStyle;
