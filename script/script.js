const openChat = document.getElementById("chat-open");

openChat.addEventListener("click", () => {
  const currentSrc = openChat.src.split('/').pop();

  if (currentSrc !== "onClickChat.svg") {
    openChat.src = "./image/onClickChat.svg";
  } else {
    openChat.src = "./image/chatIcon.png";
  }
});


// My Work ページの切り替え処理
window.addEventListener('load', () => {
  // checkbox
  const checkbox1 = document.getElementById("makeups");
  const checkbox2 = document.getElementById("hairstyle");

  // label
  const label1 = document.getElementById("makeupLabel");
  const label2 = document.getElementById("hairLabel");
  const underline1 = document.getElementById("underline1")
  const underline2 = document.getElementById("underline2")

  // タブの内容部分
  const hoge1Content = document.getElementById("makeup-container");
  const hoge2Content = document.getElementById("hair-container");

  // Initial state setup
  checkbox1.checked = true;
  checkbox2.checked = false;
  hoge1Content.style.display = "block";
  hoge2Content.style.display = "none";
  label1.style.color = "black"
  label2.style.color = "#888888"
  underline1.style.backgroundColor = "black"
  underline2.style.backgroundColor = "#888888"

  // hoge1タブのクリック時
  label1.addEventListener("click", function () {
    checkbox1.checked = true;
    checkbox2.checked = false;
    hoge1Content.style.display = "block";
    label1.style.color = "black"
    label2.style.color = "#888888"
    hoge2Content.style.display = "none";
    underline1.style.backgroundColor = "black"
    underline2.style.backgroundColor = "#888888"
    checkbox2.checked = false;
  });

  // hoge2タブのクリック時
  label2.addEventListener("click", function () {
    checkbox2.checked = true;
    checkbox1.checked = false;
    label1.style.color = "#888888"
    label2.style.color = "black"
    underline1.style.backgroundColor = "#888888"
    underline2.style.backgroundColor = "black"
    hoge2Content.style.display = "block";
    hoge1Content.style.display = "none";
    checkbox1.checked = false;
  });
});