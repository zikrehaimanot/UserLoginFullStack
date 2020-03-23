var thumbUp = document.getElementsByClassName("fas fa-frog");
var trash = document.getElementsByClassName("fa fa-trash");
var thumbDown = document.getElementsByClassName('fa fa-thumbs-up')
// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const truth = this.parentNode.parentNode.childNodes[3].innerText
//         const truthy = this.parentNode.parentNode.childNodes[5].innerText
//         const lie = this.parentNode.parentNode.childNodes[7].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[9].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'truth': truth,
//             'truthy': truthy,
//             'lie': lie,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const lie = this.parentNode.parentNode.childNodes[7].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[9].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            // 'truth': truth,
            // 'truthy': truthy,
            'lie': lie,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const truth = this.parentNode.parentNode.childNodes[3].innerText
        const truthy = this.parentNode.parentNode.childNodes[5].innerText
        const lie = this.parentNode.parentNode.childNodes[7].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'truth': truth,
            'truthy': truthy,
            'lie': lie,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const truth = this.parentNode.parentNode.childNodes[3].innerText
        const truthy = this.parentNode.parentNode.childNodes[5].innerText
        const lie = this.parentNode.parentNode.childNodes[7].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[9].innerText)
        console.log(thumbUp)
        fetch('thumbDown', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'truth': truth,
            'truthy': truthy,
            'lie': lie,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
