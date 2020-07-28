



const textarea=document.querySelector('#textarea')
const talk=document.querySelector('#talk')
const range=document.querySelector('#range')
// console.log(speechSynthesis.getVoices())



// 	const speech=window.SpeechRecognition||webkitSpeechRecognition
// 	const speechInit= new speech()
// 	console.log(speechInit)

// 	 // speechInit.onstart=function(){
// 	 // 	console.log('recording......')
// 	 // }
// 	 // speechInit.onresult=function(event){
// 	 // 	console.log("passe ici")
// 	 // }

talk.addEventListener('click',function(){
 		speakLoud(textarea.value)
 })



function speakLoud(message){

let speak= new SpeechSynthesisUtterance()

console.log(speak)
speak.lang="esp"
speak.text=message
speak.volume=1
speak.rate=1
speak.pitch=1
window.speechSynthesis.speak(speak)
}

