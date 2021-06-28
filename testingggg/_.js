const COMMANDS={help:"Supported commands: <span class='code'>about</span>, <span class='code'>experience</span>, <span class='code'>skills</span>, <span class='code'>contact</span>, <span class='code'>clear</span>.",

about:
"Hello!<br><br>I'm Caesar Evan Santoso, 18 y.o and i'm a <u><i>Penetration Tester</i></u> & <u><i>Bug Hunter</i></u><br><br>",

skills:
"Penetration Testing [Website/Mobile Application]<br><br>",

experience:
"View full at my <a href='https://www.linkedin.com/in/c3van/' class='success link'>LinkedIn profile</a>.<br><br>",

contact:
"My Email <span class='code'><a href='mailto:caesarevan23@gmail.com'>caesarevan23@gmail.com</a></span>.<br><br>",
};let userInput,terminalOutput;const app=()=>{userInput=document.getElementById("userInput");terminalOutput=document.getElementById("terminalOutput");document.getElementById("dummyKeyboard").focus();};const execute=function executeCommand(input){let output;input=input.toLowerCase();if(input.length===0)return;if(input=="clear"){$('.terminal-output > .terminal-line').not(':first').remove();return}

output=`<div class="terminal-line"><span class="success">
┌──(root💀v4n)-[/root/]<br>
└─#</span> <span class="directory"></span> ${input}</div>`;if(!COMMANDS.hasOwnProperty(input)){output+=`<div class="terminal-line">command not found : ${input}</div>`;}else{output+=COMMANDS[input];}
terminalOutput.innerHTML=`${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;terminalOutput.scrollTop=terminalOutput.scrollHeight;};const key=function keyEvent(e){const elm=$("#dummyKeyboard");const cmd=elm.val();elm.val(cmd.replace(/[^\w]+$/gi,""));if(e.key==="Enter"){execute(cmd);userInput.innerHTML="";elm.val("")}};const backspace=function backSpaceKeyEvent(e){if(e.keyCode!==8&&e.keyCode!==46)return;userInput.innerHTML=userInput.innerHTML.slice(0,userInput.innerHTML.length-1);};document.addEventListener("keydown",backspace);document.addEventListener("keypress",key);document.addEventListener("DOMContentLoaded",app);
