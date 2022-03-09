const textForm = document.getElementById("text-form")
const inputText = document.getElementById("input-text")
const taskContainer = document.getElementById("tasklist");
const quoteBtn = document.getElementById("quoteBtn")
const quotes = document.querySelector(".quotes")

document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment")
    .then(function (res) {
      const data = res.data;
      alert(data);
    });
};
    
document.getElementById("fortuneButton").onclick = function () {
  axios.get("http://localhost:4000/api/fortune")
    .then(function (res) {
      const data = res.data;
      alert(data);
    });
};
    

function displayTaskList(arr){
  while(taskContainer.firstChild){
    taskContainer.removeChild(taskContainer.firstChild)
  }
  
  for (let i = 0; i < arr.length; i++){
    const newTask = document.createElement("div");
    
    newTask.innerHTML = `<p>${arr[i].text}</p><button class="delete-btn" value ="${arr[i].id}">Delete</button>`
    
    taskContainer.appendChild(newTask);
    
    let removeBtns = document.getElementsByClassName('delete-btn');
    
    for (let i = 0; i < removeBtns.length; i++){
      removeBtns[i].addEventListener('click', deleteTask)
    }
  }
}

const deleteTask = (e) => {
  axios.delete(`http://localhost:4000/api/list/${e.target.value}`)
    .then((res) => {
      displayTaskList(res.data);
    });
};

textForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newDisplayText = {
    text: inputText.value
  }

  axios.post("http://localhost:4000/api/list", newDisplayText)
    .then(res => {
      console.log((res.data));
      displayTaskList(res.data);
    });

  inputText.value = '';
})




document.getElementById("quoteBtn").onclick = function () {
  axios.get("http://localhost:4000/api/quote")
    .then(function (res) {
      const data = res.data;
      alert(data);


      let displayQuotes = document.createElement('p')
      quotes.appendChild(displayQuotes)
      displayQuotes.textContent = data.value

      

    });

};



