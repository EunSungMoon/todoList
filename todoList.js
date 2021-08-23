/************************************************************
1.	To do list 돔 그리기 -ok
2.	기능 추가
-	Input에 내용 작성 후 추가 버튼을 클릭하면 list 추가  ok
-	Input 안에 x버튼 만들어서 클릭할 때 마다 input 내용 삭제
-	전체 삭제 클릭 후 리스트 전체 내용 삭제 ok

-	List 각각 삭제 버튼 만들어서 삭제 이벤트
-	리스트 내용 수정 버튼 만들어서 수정 가능하도록?
-	리스트 완료 시 체크 클릭 후 done으로 이동

-	Done 리스트에서 삭제 버튼 
************************************************************/

const el = selector => document.querySelector(selector);
const elAll = selector => document.querySelectorAll(selector);
const makeDom = dom => document.createElement(dom)


//기본 첫 화면 그리기(버튼 생성 input박스 생성)
const createDom = () => {
  let inputBox = makeDom('input')
  let addBtn = makeDom('button')
  el('.listForm').appendChild(inputBox)
  el('.listForm').appendChild(addBtn)
  inputBox.className = 'inputTask'
  inputBox.placeholder = 'Write to do'
  addBtn.className = 'addBtn'
  addBtn.innerText = '입력'
}
createDom()

//전체 삭제 버튼 만들기
const createBtn = (dom) => {
  let delAllBtn = makeDom('button');
  el(dom).append(delAllBtn);
  delAllBtn.innerText = '전체삭제'
  delAllBtn.className = 'delAllBtn'
}
createBtn('.taskList') //todolist에 전체삭제
createBtn('.taskDone') //완료된 리스트 전체삭제

//리스트 추가 
const addEvt = () => {
  el('.addBtn').addEventListener('click', () => {
    if (el('.inputTask').value.length == 0) {
      alert('Please enter a task')
    } else {
      el('.taskList ul').innerHTML +=
        `<li class="list">${el('.inputTask').value}<button class="completeBtn">완료</button> <button class="delBtn">삭제</button></li>`
    }
    el('.inputTask').value = ''
  })
}

// 전체 삭제
const removeTaskList = (target1, target2) => { //
  el(target1).addEventListener('click', () => {
    elAll(target2).forEach(e => {
      e.remove();
    })
  })
}
removeTaskList('.taskList .delAllBtn', '.taskList li') //리스트 전체 삭제
removeTaskList('.taskDone .delAllBtn', '.taskDone li') //완료된 리스트 전체 삭제

//리스트 삭제, 완료
const removeList = () => {
  el('ul').addEventListener('click', e => {
    if (e.target.className == 'delBtn') {
      e.target.parentNode.remove()
    }
    else if (e.target.className == 'completeBtn') {
      el('.taskDone ul').insertBefore(e.target.parentNode, null)
      e.target.remove();
      el('.list').classList.add('doneList')
    }
  })
}
removeList()


//화면 그리는 함수 실행
const printList = () => {
  addEvt()
}
printList()