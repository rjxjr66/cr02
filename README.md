# 코딩캠퍼스 언플러그드

[https://github.com/rjxjr66/cr02](https://github.com/rjxjr66/cr02)

코딩캠퍼스 언플러그드 서비스의 개발 문서입니다.

### Abstract

- CS Unplugged 활동과 코딩캠퍼스 CR-02 수업을 기반으로 어린 학생들이 컴퓨터 과학의 여러 개념을 익히고 체험할 수 있는 실습 활동을 웹 기술을 이용해 인터넷 공간에 구현하고자 시작한 프로젝트입니다.
- 컴퓨터 과학을 처음 접하는 학습자에게 언플러그드 활동은 개념을 이해하고 스스로 문제 해결과정을 체험해 보는데 탁월한 효과가 있다는 것은 이미 입증되었습니다.
- 하지만 이런 실습은 교수자가 미리 준비해야할 실습 자료나 교구들이 매번 달라 수업 준비에 어려움이 있습니다.
- 또한 코로나 19로 인한 온라인 원격 수업에서 이런 활동들을 수업 과정에 포함하기 힘들다는 문제점이 있습니다.
- 이를 해결하고자 웹 기술을 이용해 이러한 체험 활동들을 온라인 상에 구현해 1. 교수자와 학습자의 접근성을 높히고 2. 수업 준비 과정을 간소화 하고 3. 온라인 원격 수업이라는 제약 조건상에 학습 활동의 제안을 해소하고자 합니다.

### Demo

[https://cr02.wncw.io](https://cr02.wncw.io)

## Contributor guide

코딩캠퍼스 언플러그드 서비스는 무료로 운영되고 있습니다. 오픈소스 프로젝트 기여를 통해 컴퓨터 과학을 배우고자 하는 어린 학생들을 도울 수 있는 멋진 작업에 참여해보세요.

1. 코드 기여는 github PR 로 할 수 있습니다.
2. 실습 활동 컨텐츠의 디자인 리소스에 대한 기여는 hansol@wncw.io 로 받고 있습니다.

### Getting Started

먼저, Git 리포지토리를 클론해야 합니다. 

그 후 클론된 폴더로 이동하여 디펜던시를 설치해줍니다.

```bash
git clone https://github.com/rjxjr66/cr02.git
cd cr02
npm install  # or yarn
```

디펜던시가 설치되면 개발 서버를 실행할 수 있습니다.

```bash
npm run dev  # or yarn dev
```

### Issues

이슈 및 개발 건의사항은 github issues 에서 관리됩니다.

[https://github.com/rjxjr66/cr02/issues](https://github.com/rjxjr66/cr02/issues)

### Development

이 사이트는 Next.js 와 React 를 이용하여 개발되었습니다. 관련 개발 문서를 참고하세요.

### Deploy to Production

origin/main 브랜치로 머지되면 자동으로 빌드 프로세스가 트리거되고 운영 환경으로 배포됩니다.

origin/main 브랜치에 푸시할 수 없으면 github 에서 PR 요청해주세요. [https://github.com/rjxjr66/cr02/pulls](https://github.com/rjxjr66/cr02/pulls)

```bash
git push origin/main
```