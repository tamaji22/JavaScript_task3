'use strict';

const tasks = [];

// todoの追加と表示
function todoAddAndDisplay() {
  // 入力した内容をtasksに追加
  const task = {
    content: document.getElementById('comment').value,
    status: '作業中',
  }
  tasks.push(task);

  // 入力した内容をテキストボックスから削除
  document.getElementById('comment').value = '';

  // 保存した内容をテーブルに出力
  const fragment = document.createDocumentFragment();
  tasks.forEach((task, index) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = index;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.textContent = task.content;
    tr.appendChild(td2);

    const statusButton = statusButtonGen(task);
    const td3 = document.createElement('td');
    td3.appendChild(statusButton);
    tr.appendChild(td3);

    const delButton = deleteButtonGen(index);
    const td4 = document.createElement('td');
    td4.appendChild(delButton);
    tr.appendChild(td4);
    fragment.appendChild(tr);
  });
  const table = document.getElementById('table');
  table.innerHTML = '';
  table.appendChild(fragment);
}

// 状態ボタン生成
function statusButtonGen(task) {
  const statusButton = document.createElement('input');
  statusButton.type = 'button';
  statusButton.value = task.status;
  return statusButton;
}

// 削除ボタン生成
function deleteButtonGen(index) {
  const delButton = document.createElement('input');
  delButton.type = 'button';
  delButton.value = '削除';
  delButton.id = 'delete' + index;
  delButton.addEventListener('click', () => {
    delTask(index);
  });
  return delButton;
}

// 削除ボタン押下
function delTask(index) {
  tasks.splice(index, 1);

    // 入力した内容をテキストボックスから削除
  document.getElementById('comment').value = '';

  // 保存した内容をテーブルに出力
  const fragment = document.createDocumentFragment();
  tasks.forEach((task, index) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = index;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.textContent = task.content;
    tr.appendChild(td2);

    const statusButton = statusButtonGen(task);
    const td3 = document.createElement('td');
    td3.appendChild(statusButton);
    tr.appendChild(td3);

    const delButton = deleteButtonGen(index);
    const td4 = document.createElement('td');
    td4.appendChild(delButton);
    tr.appendChild(td4);
    fragment.appendChild(tr);
  });
  const table = document.getElementById('table');
  table.innerHTML = '';
  table.appendChild(fragment);
}

// 追加ボタン押下
document.getElementById('add_task').addEventListener('click', () => {
  todoAddAndDisplay();
});
