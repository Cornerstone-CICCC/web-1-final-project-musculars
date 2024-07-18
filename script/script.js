const openChat = document.getElementById("chat-open");

openChat.addEventListener("click", () => {
  const currentSrc = openChat.src.split('/').pop();

  if (currentSrc !== "onClickChat.svg") {
    openChat.src = "./image/onClickChat.svg";
  } else {
    openChat.src = "./image/chatIcon.png";
  }
});