module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',

    'plugin:react/recommended', // react 규칙 추가
    'prettier', // prettier 통합: eslint-config-prettier를 사용하여 충돌 방지
    'plugin:import/errors', // import 관련 오류 감지
    'plugin:import/warnings', // import 관련 경고 감지
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // .tsx 파일에서 JSX 구문 지원(JSX와 TypeScript 코드 검사)
    },
    ecmaVersion: 2024, // 최신 ECMAScript 버전 설정
    sourceType: 'module', // ECMAScript 모듈 사용은 필수 (vite 같은 최신 빌드 도구는 기본적으로 ECMAScript 모듈 시스템 사용. import/export 문법 지원)
    project: './tsconfig.json', // eslint가 typescript 설정 파일 인식할 수 있게 지정 (typescript와 eslint가 일관된 설정을 공유)
  },
  plugins: ['react-refresh', 'react', '@typescript-eslint', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    // 1. import 규칙 (error 수준, warn 수준)
    'react/react-in-jsx-scope': 'off', // JSX 사용 시 React import 안해도 됨 (React 17 이후)

    'import/named': 'error', // 존재하지 않는 것들 import 시 오류
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-unresolved': 'error', // 존재하지 않는 파일 import 시 오류

    'import/no-unused-modules': 'off',
    // 'import/no-unused-modules': [
    //   'warn',
    //   {
    //     unusedExports: true, // 사용되지 않는 모듈 경고
    //     missingExports: true, // 누락된 모듈 경고
    //     src: ['src/**/*.{ts,tsx}'], // 적용할 경로 설정
    //   },
    // ],
    'import/no-duplicates': 'warn', // 같은 모듈 2번 이상 import 경고
    'import/first': 'warn', // import는 최상단 경고

    // 2. 변수 처리
    'no-use-before-define': 'off', // 기본 ESLint 규칙 비활성화 (javascript 기반)

    'no-unused-vars': 'off', // 기본 ESLint 규칙 비활성화 (javascript 기반)
    '@typescript-eslint/no-unused-vars': [
      // TypeScript 파일 내에서 사용되지 않는 변수에 대해 경고
      'warn',
      { args: 'none', ignoreRestSiblings: true },
    ],

    'no-shadow': 'off', // 기본 ESLint 규칙 비활성화 (javascript 기반)
    '@typescript-eslint/no-shadow': ['warn'], // TypeScript에서 변수 섀도잉(내부 변수의 이름이 상위 범위의 변수와 겹치는 것)을 방지

    // 3. React 관련
    'react/prop-types': 'off', // props 타입 검사 비활성화 (typescript에서 할 것)
    'react-hooks/rules-of-hooks': 'error', // Hooks는 React 함수 컴포넌트(or커스텀 훅) 내에서만 호출 + 함수 최상위에서 호출 (즉, 조건문이나 반복문 내에서 훅 호출 X)
    'react-hooks/exhaustive-deps': 'warn', // React Hook의 의존성 배열 관리 (특히, useEffect)

    // 4. 컨벤션 및 기타
    eqeqeq: 'warn', // 엄격한 일치 연산자 사용 (===와 !==를 사용)
    curly: 'warn', // 모든 제어 구문에 중괄호 사용
    'arrow-parens': ['warn', 'always'], // 매개변수에 괄호 필수

    camelcase: 'warn', // 네이밍 컨벤션: 변수명, 함수명
    'no-console': 'warn', // console 사용 시 경고

    // 5. 타입 관련
    // 타입 단언을 일관되게 사용하도록 강제
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as', // someValue as string 형식 사용으로 통일
        objectLiteralTypeAssertions: 'never',
      },
    ],
    // 모든 함수와 메서드에 대해 반환 타입을 명시적으로 지정하도록 강제
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true, // 화살표 함수 및 간단한 함수 표현식에서 반환 타입을 생략할 수 있도록 허용 (타입 추론 활용)
        allowTypedFunctionExpressions: true,
      },
    ],
    // 함수 매개변수 및 변수에서 명시적으로 타입을 지정하도록 강제
    '@typescript-eslint/typedef': [
      'warn',
      {
        arrowParameter: false, // 화살표 함수의 매개변수에 대해 타입 지정을 강제하지 않음 (타입스크립트가 타입을 추론할 수 있음)
        variableDeclaration: false, // (styled-components에서 타입 지정 강제하지 않도록) 변수 선언에서 타입 지정 강제하지 않도록 규칙 완화
        variableDeclarationIgnoreFunction: true, // 함수 내부에서 선언된 변수에 대해 타입 지정을 강제하지 않음 (타입스크립트의 타입 추론을 허용함)
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // 설치된 React 버전을 자동으로 감지
    },
    'import/resolver': {
      alias: {
        map: [
          ['/src', './src'],
          ['/public', './public'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'], // 필요한 파일 확장자 추가
      },
    },
  },
};
