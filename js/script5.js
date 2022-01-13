let cardNum = prompt("Напишите вашей номер карты?");
document.write(
  "<h2> Номер вашей карты:" + "********" + cardNum.slice(4, 8) + "</h2>"
);
