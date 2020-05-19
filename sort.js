const blockSort = document.querySelector(".blockSort");

function generateNumbers() {
  
  for (let i = 0; i < 10; i ++) {
    const value = Math.floor(Math.random() * 100);

    const blockNumber = document.createElement("div");
    blockNumber.classList.add("element");

    blockNumber.innerHTML = value;
    blockSort.appendChild(blockNumber);
  }
}

function swap(element1, element2) {
  return new Promise(resolve => {
    const style1 = window.getComputedStyle(element1);
    const style2 = window.getComputedStyle(element2);

    window.requestAnimationFrame(function() {
      setTimeout(() => {
        blockSort.insertBefore(element2, element1);
        resolve();
      }, 1000);
    });
  });
}

btnSort.onclick=async function bubbleSort() {

  let elements = document.querySelectorAll(".element");
  for (let i = 0; i < elements.length - 1; i += 1) {
    for (let j = 0; j < elements.length - i - 1; j += 1) {
      elements[j].style.backgroundColor = "red";
      elements[j + 1].style.backgroundColor = "red";

      await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, 1000)
      );

      const value1 = Number(elements[j].innerHTML);
      const value2 = Number(elements[j + 1].innerHTML);

      if (value1 > value2) {
        await swap(elements[j], elements[j + 1]);
        elements = document.querySelectorAll(".element");
      }

      elements[j].style.backgroundColor = "deepskyblue";
      elements[j + 1].style.backgroundColor = "deepskyblue";
    }

    elements[elements.length - i - 1].style.backgroundColor = "green";
  }
  elements[0].style.backgroundColor = "green";
}

generateNumbers();
