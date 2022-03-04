

document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };


  const fortuneBtn = document.getElementById("fortuneBtn").addEventListener('click', () => {
        axios.get('http://localhost:4000/api/fortune/')
             .then((res) => {
                const fortuneData = res.data
                alert(fortuneData)
             })
        

  })



  const submitBtn = document.querySelector('.submitBtn')
  const userInput = document.querySelector('.input')
  const list = document.querySelector('.todolist')
 



// submitBtn.addEventListener('click', (e)=> {
//     e.preventDefault()

//     let item = userInput.value
//     console.log(item)

//     const newItem = document.createElement('li')
//     const newBtn = document.createElement('button')
//     newBtn.innerHTML = "Remove"
//     newBtn.classList.add('remove')
    
//     const newInput = {
//         text: userInput.value
//     }


//     newItem.appendChild(newBtn)
//     list.appendChild(newItem)

//    const newItems = {
//        text: userInput.value
//    }

//     axios.post('http://localhost:4000/api/showlist', newInput)
//         .then(res => {
//             showList(res.data)
//             console.log(res.data) 
//         }) 
 
//     let removeBtn = document.querySelectorAll('.remove')
//     removeBtn.forEach((item) => {
//     item.addEventListener('click', removeItem)

//     })
//     userInput.value = ' '
    
//   })

// const showList = (items) => {

//     while(list.firstChild){
//         list.removeChild(list.firstChild)
//     }
// }




//   const removeItem = () => {
//       axios.delete('"http://localhost:4000/api/list/${e.target.value}')
//             .then((res) => {
//                 alert('item removed from list')
//             })
//   }



