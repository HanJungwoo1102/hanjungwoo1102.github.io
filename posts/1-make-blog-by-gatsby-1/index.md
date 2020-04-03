---
id: 1
title: "Gatsby 로 개인 blog 만들기 (1)"
date: "2020-04-03"
image: ./gatsby.jpeg
---

![gatsby](./gatsby.jpeg)

## 블로그

블로그 운영을 꼭 해보고 싶었다. 나도 많은 블로그에서 도움을 얻기도 했고 블로그 게시글 포스팅을 통해 내가 생각하고 배운 것들을 정리할 수 있을 거라고 생각했다. 하지만 글 쓰는 재주도 없었고 귀찮기만 했었다. 마음먹고 열심히 해보려다가 포기하고 안하가를 여러 번 반복했었다. 열심히 다시 해보자고 마음 먹을 때마다 블로그를 새로 만들었어서 여러 블로그를 만들어봤다. Jekyll 을 이용한 Github 블로그, tistory, notion 등에 블로그를 만들었었다. 그러고 이번에 또 블로그를 다시 열심히 해보고 싶어서 다시 알아보게 됐다. 요즘 React 를 자주 쓰고 있어서 혹시나 React 를 사용해 블로그를 만들어 볼 수 있을까 찾아보다가 Gatsby 에 대해서 알게 됐다.

## Gatsby 란

내가 생각한 Gatsby 는 React 를 기반으로 정적 사이트를 생성 해주는 툴이다. React 로 뼈대를 잡고 여러 plugin 을 통해 쉽게 정적 사이트를 만들 수 있었다.


### 정적 사이트 생성기 (Static Site Generator)

Gatsby 는 정적 사이트 생성기라고 한다. 처음에는 정적 사이트 생성기라고 해서 뭔지 감이 잘 안잡혔다. 이럴 때는 역시 비슷한 것과 비교해 보는게 가장 좋은 것 같다. 나는 내가 개발해왔던 SPA 와 비교를 해봤다.

- React Router 를 이용해 Signle page application 을 만들어 본 적이 있는데 빌드돼서 하나의 js bundle로 나왔다. 하지만 Gatsby 는 페이지 마다 html, js, css 를 만들어 냈다.

- SPA 는 꼭 그래야 한다는 것은 아니지만 내가 제작하는 SPA 에서는 각 페이지 마다 api 콜을 때려서 data 를 불렀다면 Gatsby 는 정적 Data 들을 빌드되는 시점에 페이지 컴퍼넌트에 mapping 해서 여러 페이지를 만들어 냈다.

Data 를 저장하고 보내줄 서버를 만들 필요 없이 빌드 시점에 Data 를 각 페이지에 맵핑 시켜준다는 점에서 쉽게 블로그를 만들 수 있겠다는 생각이 들었다.

### GraphQL

Gatsby 를 선택하게 된 이유중 하나였다. GraphQL 이 무엇인지 이름만 알고 있던 상황에서 Gatsby 가 GraphQL 기반으로 사이트를 개발할 수 있다고 해서 GraphQL 을 한번 써보고 싶다는 마음에 선택을 한 것도 있다.

GraphQL 은 원하는 하나의 api 로 원하는 data 를 뽑아 쓸 수 있다는 장점이 있다고 알고있다. Gatsby 는 plugin 을 통해 여러 GraphQL query 를 제공하고 내가 필요한 data 들만 component 에서 뽑아서 쓸 수 있었다는 점에서 Gatsby 의 장점이 드러났다고 생각한다. 만약 내가 MarkDown data 를 서버에 올려놓고 restful 한 api 호출을 통해서 가져온다 했을 때 가져오고 싶은 data 가 다를 떄마다 api 를 만들고 폼이 변경 됐을 때마다 서버 코드 건들 것을 생각하니 Gatsby GraphQL 의 장점이 잘 드러난다는 생각이 들었다. plugin 에서 GrapQL query 를 만들어주는 것도 마음에 들었다. 원하는 data 가 있을 때 플러그인만 등록해도 그 query 를 사용할 수 있었다.

## 느낀점

처음에는 gatsby-config, gatsby-node, gatsby-browser 는 뭐하는 놈들이고 graphQL query 는 어디서 만들어주는 거고 어떻게 추가해야하 하는 거지?? 등의 궁금증이 많았고 그래서 더욱 어려웠다. 하지만 나는 블로그 스타일이든 기능이든 내가 원하는 대로 블로그를 직접 만들어 보고 싶었고 내가 내 contents 를 갖고 있고 싶었고 GraphQL 과 styled component 도 사용해 보고 싶었다. 그래서 Gatsby 를 선택을 했고 현재 만족하고 있다. 아직 다 완성된 것은 아니지만 일단 어느정도 구색은 갖춘 것 같아서 포스팅을 꾸준히 하면서 블로그를 계속 발전시켜나갈 계획이다.