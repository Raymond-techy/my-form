const synth=window.speechSynthesis;
const speakA=new SpeechSynthesisUtterance('please enter all fields');
const speakB=new SpeechSynthesisUtterance('message delivered successfully');

const btn=document.querySelector('.btnSend');
const surName=document.getElementById('surName').value;
const firstName=document.getElementById('firstName').value;
const Email=document.getElementById('mail').value;
const phoneNo=document.getElementById('phoneNo').value;
btn.addEventListener('click',speakWord);
function speakWord(){
    // e.preventDefault();
    if(surName=='' || firstName=='' || Email==''){
    synth.speak(speakA);
    console.log("spea");
    }else if(surName!='' && firstName!='' ){
        synth.speak(speakB);
        console.log("speaked");
    }
}