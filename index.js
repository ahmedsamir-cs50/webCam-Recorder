
window.onload=()=>{
    let cameraFeed=document.getElementById("camerafeed");
let startButton=document.getElementById("start")
let stopButton=document.getElementById("stop")
let mediaRecord;
let parts =[];
navigator.mediaDevices.getUserMedia({video:true,audio:true}).then(stream=>{

    cameraFeed.srcObject=stream;
    startButton.onclick=
    ()=>{
        console.log("Start")
        mediaRecord= new MediaRecorder(stream)
        mediaRecord.start(1000);
        mediaRecord.ondataavailable=(e)=>{
parts.push(e.data)
        }
    }})
  
    stopButton.onclick=
    ()=>{
        console.log(parts)
        console.log("Stop")
        mediaRecord.stop();
        const blob=new Blob(parts,{type:"video/webm"})
        const url=URL.createObjectURL(blob)
       const a= document.createElement("a")
        document.body.appendChild(a)
        a.style="display:none"
        a.href=url
        a.download="video.webm"
        a.click();
    }
}
    

    