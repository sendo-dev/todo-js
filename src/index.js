import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押されたボタンの親要素のdivを削除
    const completeTarget = completeButton.parentNode;
    deleteFromIncompleteList(completeTarget);

    // 押されたボタンの親要素のテキスト箇所を抜き出し、完了後の要素を作成する
    const text = completeTarget.firstChild.innerText;
    const div = document.createElement("div");
    div.className = "list-row";
    const li = document.createElement("li");
    li.innerText = text;
    div.appendChild(li);
    const button = document.createElement("button");
    button.innerText = "戻す";
    button.addEventListener("click", () => {
      const completeTarget = button.parentNode;
      document.getElementById("complete-list").removeChild(completeTarget);

      // テキストを取得
      const comText = completeTarget.firstChild.innerText;

      // div生成
      const div = document.createElement("div");
      div.className = "list-row";
      // li生成
      const li = document.createElement("li");
      li.innerText = comText;
      div.appendChild(li);

      // button(完了)タグ生成
      const completeButton = document.createElement("button");
      completeButton.innerText = "完了";
      div.appendChild(completeButton);

      // button(削除)タグ生成
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "削除";
      deleteButton.addEventListener("click", () => {
        // 押されたボタンの親要素のdivを削除
        const deleteTarget = deleteButton.parentNode;
        deleteFromIncompleteList(deleteTarget);
      });
      div.appendChild(deleteButton);
      document.getElementById("incomplete-list").appendChild(div);
    });
    div.appendChild(button);

    document.getElementById("complete-list").appendChild(div);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押されたボタンの親要素のdivを削除
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  // divにliを追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

const createCompleteBtn = () => {
  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  addEventCompleteBtn(completeButton);
};

/**
 * 完了ボタンにイベントを付加
 * @param {*} completeButton
 */
const addEventCompleteBtn = (completeButton) => {
  completeButton.addEventListener("click", () => {
    // 押されたボタンの親要素のdivを削除
    const completeTarget = completeButton.parentNode;
    deleteFromIncompleteList(completeTarget);

    // 押されたボタンの親要素のテキスト箇所を抜き出し、完了後の要素を作成する
    const text = completeTarget.firstChild.innerText;
    const div = document.createElement("div");
    div.className = "list-row";
    const li = document.createElement("li");
    li.innerText = text;
    div.appendChild(li);
    const button = document.createElement("button");
    button.innerText = "戻す";
  });
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
