(function() {
    const timeBlocks = document.querySelectorAll(".time-block");
    const currentHour = dayjs().hour();
  
    timeBlocks.forEach(function(timeBlock) {
      const timeBlockHour = parseInt(timeBlock.id.split("-")[1], 10);
      if (timeBlockHour < currentHour) {
        timeBlock.classList.add("past");
      } else if (timeBlockHour === currentHour) {
        timeBlock.classList.add("present");
      } else {
        timeBlock.classList.add("future");
      }
    });
  
    const saveButtons = document.querySelectorAll(".saveBtn");
    saveButtons.forEach(function(button) {
      button.addEventListener("click", function(event) {
        const timeBlock = event.target.parentNode;
        const input = timeBlock.querySelector("textarea.description").value;
  
        localStorage.setItem(timeBlock.id, input);
      });
    });
  
    const textareas = document.querySelectorAll("textarea.description");
    textareas.forEach(function(textarea) {
      const timeBlockId = textarea.parentNode.id;
      let savedValue = localStorage.getItem(timeBlockId);
      if (savedValue) {
        textarea.value = savedValue;
      }
    });
  
    const currentDay = document.querySelector("#currentDay");
  
    function updateDate() {
      const today = dayjs();
      const dateString = today.format("MMMM, D, YYYY");
      currentDay.textContent = dateString;
    }
  
    updateDate();
    setInterval(updateDate, 86400000);
  })();
  
