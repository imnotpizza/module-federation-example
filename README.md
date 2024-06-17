# Module Federation Example Project


## Description
Vue host & React remote 형태의 Module Federation 예제입니다.

## Spec
- yarn (4.1.0)
- Vue (3)
- React (18.2.0)
- Webpack (5)

## Usage
1. install dependencies
```
yarn
```

2. install paackage's dependencies
```
yarn workspace vue-host install
yarn workspace react-remote install    
```

3. start project
```
yarn host:start
yarn remote:start
```

4. build project
```
yarn host:build
yarn remote:build
```
