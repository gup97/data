
현재는 닫았습니다

## [분실물 관리 서비스](https://gup97.github.io/dculost/)

#### 실시간 처리 어플리케이션 구현 

[![미리보기](https://user-images.githubusercontent.com/80537765/173848505-2a34ba83-d7b0-44fc-9666-ca4995e1df30.PNG)](https://gup97.github.io/dculost/)


- [목차]
    + [index](#index)
    + [list page - list container](#list-page---list-container)
    + [list page - map container](#list-page---map-container)
    + [Submit page](#submit-page)
  * [개선사항](#개선사항)


---

`클라이언트`  react/ javascript

`서버` firebase(fireStore, fireStorage) 

`기타 라이브러리 `  
 - tailwindcss
 - kakao map api
 - korean-regexp
 - react-datepicker

---
#### index
![메인화면](https://user-images.githubusercontent.com/80537765/173851413-38cd39ad-7dec-4330-8a58-e3d93d6dd58b.png)

---
#### list page - list container

![listContainer](https://user-images.githubusercontent.com/80537765/173854155-003e0e18-e591-4e7f-a74d-0964d03a489e.gif)

#### list page - map container
![MapContainer](https://user-images.githubusercontent.com/80537765/173858856-a2a43a37-d7ec-4b6a-96e2-5e773d59dfb1.gif)

listContainer 에서 tap을 통해 map container로 이동할 수 있다.

---
#### Submit page
이미지 업로드 미리보기 기능
![이미지업로드미리보기](https://user-images.githubusercontent.com/80537765/173851657-0ff5f976-be05-42c5-be6a-69d0f416b245.gif)



---
### 개선사항

개선 사항을 해결하려던 중 문제가 생겼다. 마커가 근처에 생긴 경우 터치하기 힘들어 클러스팅을 사용하려했으나...

![질문](https://user-images.githubusercontent.com/80537765/175661328-ef2f14b8-06e6-4945-8c48-816a785ae283.png)

![답변](https://user-images.githubusercontent.com/80537765/175661439-73a86da7-03ca-4493-8f24-dd3c2773b6fe.png)

내가 생각하고 짠 구조를 벗어나는 작업이라 코딩테스트 준비 이후 수정하려고 한다!
