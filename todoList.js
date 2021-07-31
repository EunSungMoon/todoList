
/**
1.	To do list 돔 그리기
2.	기능 추가
-	Input에 내용 작성 후 추가 버튼을 클릭하면 list 추가 
-	Input 안에 x버튼 만들어서 클릭할 때 마다 input 내용 삭제
-	전체 삭제 클릭 후 리스트 전체 내용 삭제

-	List 각각 삭제 버튼 만들어서 삭제 이벤트s
-	리스트 내용 수정 버튼 만들어서 수정 가능하도록?
-	리스트 완료 시 체크 클릭 후 done으로 이동

-	Done 리스트에서 삭제 버튼 **/

console.log('task');

// taskList -> 리스트가 추가될 장소
//inputTask ->리스트 추가할 input 박스

const el = selector => document.querySelector(selector);
const elAll = selector => document.querySelectorAll(selector);
