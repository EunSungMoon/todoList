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

const el = selector => document.querySelector(selector);
const elAll = selector => document.querySelectorAll(selector);

const createBtn = () => {
  const li = document.createElement("li");
  const delBtn = document.createElement('button');
  const inputBox = document.createElement('input')
  const addBtn = document.createElement('button')

  el('.listForm').appendChild(inputBox)
  el('.listForm').appendChild(addBtn)
  inputBox.className = 'inputTask'
  // inputBox.placeholder='Write to do'
  addBtn.className = 'addBtn'
  addBtn.innerText = '입력'

  el('ul').appendChild(li);
  li.append(delBtn);
  delBtn.innerText = '전체삭제'
  delBtn.className = 'delAllBtn'
}
createBtn()

const createBtnDone = () => {
  const li2 = document.createElement('li');
  const delBtn = document.createElement('button');
  el('.taskDone ul').appendChild(li2)
  li2.append(delBtn);
  delBtn.innerText = '전체삭제'
  delBtn.className = 'delAllBtn2'
}
createBtnDone()


const printList = () => {
  el('.addBtn').addEventListener('click', () => {
    console.log("되니?");
  })
}
printList()

const removeList = () => {
  elAll('.delAllBtn .delAllBtn2').addEventListener('click', () => {
    console.log("지워지니?");
  })
}
removeList()
