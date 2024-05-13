module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest", // 사용할 ECMAScript 버전을 설정
    ecmaFeatures: {
      // ECMAScript의 언어 확장 기능을 설정
      jsx: true, // ECMScript 규격의 JSX 사용 여부
    },
    sourceType: "module",
  },
  ignorePatterns: ["build", "dist", "public"], // lint 무시 파일 정하기

  rules: {
    "react/jsx-filename-extension": ["warn", { extensions: [".ts, .tsx"] }], // "warn": 규칙을 경고로 사용
    "react-hooks/rules-of-hooks": "error", // 리액트 훅의 순서를 지키게끔 한다. (React는 Hook이 호출되는 순서에 의존하기 때문에)
    "react/jsx-props-no-spreading": "off", // props를 스프레드 연산자를 통해 전달하도록
    "react/forbid-prop-types": "off",
    "react/function-component-definition": [
      // 함수 작성 방식
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react-hooks/exhaustive-deps": "warn", // useEffect, useCallback, useMemo 등의 dependencies 배열 에러
    "react/self-closing-comp": "warn", // 태그 사이 아무 것도 없으면 닫힘 태그로 <div />와 같이 사용하도록
    "react/prop-types": "off", // prop-type 지정

    "no-console": ["warn", { allow: ["warn", "error", "info"] }], // 콘솔은 확인 뒤 지우기
    "no-unused-vars": "error", // 사용하지 않는 변수 error처리
    "no-undef": "error", // 정의 안 한 변수 사용 x
    "no-shadow": "off", // 바깥 스코프의 선언된 변수와 같은 이름의 새로운 변수 선언 금지
    "no-trailing-spaces": "error", // 쓸데없는 공백 없애기
    "no-empty-pattern": "warn", // 빈 구조분해 할당 에러

    "import/no-unresolved": "off", // 타입스크립트에서 경로를 제대로 잡지 못할 때 사용 or  eslint-import-resolver-typescript 설치

    "linebreak-style": "off",
    "import/no-dynamic-require": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "global-require": "off",
    "import/no-extraneous-dependencies": "warn", // package.json의 의존성에 있지 않는 외부 모듈 import 시 에러
    "import/newline-after-import": [2, { count: "warn" }], // import 구문들 뒤에 한 칸 띄우고 코드 작성
    "import/extensions": "off",
    "no-use-before-define": "off",

    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": "warn", // 타입스크립트의 사용하지 않는 변수 error 처리
  },
};
