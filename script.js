'use strict';

const tasks = [];

// todoの追加
const addTodo = () => {
  // 入力した内容をtasksに追加
  const task = {
    content: document.getElementById('comment').value,
    status: '作業中',
  }
  tasks.push(task);
};

// 出力するための行を作成
const createLine = (task, index) => {
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  td1.textContent = index;
  tr.appendChild(td1);

  const td2 = document.createElement('td');
  td2.textContent = task.content;
  tr.appendChild(td2);

  const statusButton = generateStatusButton(task);
  const td3 = document.createElement('td');
  td3.appendChild(statusButton);
  tr.appendChild(td3);

  const delButton = generateDeleteButton(index);
  const td4 = document.createElement('td');
  td4.appendChild(delButton);
  tr.appendChild(td4);
  return tr;
};

// 保存した内容をテーブルに出力
const displayTodo = () => {
  const radioValue = document.getElementById('status-list').status.value;
  const fragment = document.createDocumentFragment();
  if (radioValue === 'all') {
    // すべてのタスクを表示する
    tasks.forEach((task, index) => {
      fragment.appendChild(createLine(task, index));
    });
  } else if (radioValue === 'working') {
    // 作業中のタスクのみ表示する
    tasks.forEach((task, index) => {
      if (task.status === '作業中') {
        fragment.appendChild(createLine(task, index));
      }
    });
  } else {
      // 完了のタスクのみ表示する
      tasks.forEach((task, index) => {
      if (task.status === '完了') {
        fragment.appendChild(createLine(task, index));
      }
    });
  }
  const table = document.getElementById('table');
  table.innerHTML = '';
  table.appendChild(fragment);
};

// ステータスボタン生成
const generateStatusButton = task => {
  const statusButton = document.createElement('input');
  statusButton.type = 'button';
  statusButton.value = task.status;
  statusButton.addEventListener('click', () => {
    // ステータスボタン押下時の動作
    if (task.status === '作業中') {
      task.status = '完了';
    } else {
      task.status = '作業中';
    }

    // todoの表示更新
    displayTodo();
  });
  return statusButton;
};

// 削除ボタン生成
const generateDeleteButton = index => {
  const delButton = document.createElement('input');
  delButton.type = 'button';
  delButton.value = '削除';
  delButton.id = 'delete' + index;
  delButton.addEventListener('click', () => {
    // 削除ボタン押下時の動作
    tasks.splice(index, 1);

    // todoの表示更新
    displayTodo();
  });
  return delButton;
};

// 追加ボタン押下
document.getElementById('add_task').addEventListener('click', () => {
  addTodo();

  // 入力した内容をテキストボックスから削除
  document.getElementById('comment').value = '';

  // todoの表示更新
  displayTodo();
});

// ラジオボタンに応じてタスク表示を切り替える
document.getElementById('status-list').addEventListener('change', () => displayTodo());
