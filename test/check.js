/* first step 
 * get the alarm to work
 * set up a time and trigger something
 */
 
 function renderStatus(statusText) {
  document.getElementById('status').textContent = "Hi how are you?";
}

document.addEventListener('DOMContentLoaded', function(){ renderStatus("Hello World!"); });