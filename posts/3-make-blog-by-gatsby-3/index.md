---
id: 3
title: "나만의 HTML, CSS convention"
date: "2020-04-09"
tags: ["sfdsdf"]
---

# CSS Convention

## padding-left, padding-right vs margin-left, margin-right

- 기본은 padding 줄 때는 부모와 자식사이의 공간이고 margin 은 형제끼리의 공간을 위해 쓴다.
- 문제가 되는 여러 상황이 있었다.
- 부모와 자식들 사이의 공간이 자식들마다 다른경우
    - 공간의 크기가 겹치는 경우가 많다면 하나의 부모로 묶어서 처리
    - 공간의 크기가 자식들마다 너무 다르다면 최소 공간으로 패딩을 잡고 각 자식들마다 또 패딩을 주는 방식으로 하겠다.

## padding-(top, bottom) vs margin-(top, bottom)

- 기본은 border 이 있는 경우 padding, 그 외는 margin

## margin top vs margin bottom

- margin top 쓰자 : 인접 형제 선택자(+)는 동생만 선택되기 때문에 중간에 다른 요소가 들어가는 경우 그 바로 동생의 margin top 을 취소하기 용이

## 요소의 크기 지정하는 경우(width, height)

- 원래 요소의 크기
    1. inline : 컨텐츠의 크기에 따라 width, height 지정됨
    2. block : width 는 100%, height 은 안에 컨텐츠에 따라서 정해짐
    3. inline-block: 컨텐츠의 크기에 따라 정해짐 
- 요소의 크기를 정하는 경우는 반응형 웹에서는 특히 더 주의 해야 한다.
- height 은 안의 자식들의 크기가 정적일 경우에만 지정해야한다.
- width 는 가로로 배치하는 경우와 너비가 정해진 경우에 주로 지정하는 것 같다.
- width 를 지정하는 경우는 가로로 배치되는 레이아웃 지정하는 경우가 많은것 같다. 항상 %로 비율로 먹이자.
- 가로로 배치 되지만 width 를 먹이지 않는 경우도 있다. 요소의 너비가 가변적이어야 하는 경우다.
- 가로 배치에 경우 항상 width 생각하자
- 고정된 너비 안에 유동적인 크기를 갖는 컨텐츠가 있을 경우는 항상 지원하는 화면 너비들을 다 확인 해 봐야 한다.