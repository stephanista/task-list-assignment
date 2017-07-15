 console.log("heya");

tasks = [

]


 function addTask() {
   event.preventDefault();
   var newtaskname = document.userTaskAdd.taskName.value;
   console.log(newtaskname);
   var newtaskmaster = document.querySelector('input[name="taskymaster"]:checked').value;
   console.log(newtaskmaster);
   var newtasklevel = document.userTaskAdd.diff.value;
   console.log(newtasklevel);
   newtaskfull = [newtaskname, newtaskmaster, newtasklevel]
   tasks.push(newtaskfull);
   console.log("Oh, you added.. '" + newtaskfull + "'. Awesome!")
 }
