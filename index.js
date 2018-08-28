window.addEventListener("load", () => {
  
  document.getElementById("submit").addEventListener("click", function(event){
      event.preventDefault();
      const length = document.getElementById("length").value;
      console.log(length);
  })
});
