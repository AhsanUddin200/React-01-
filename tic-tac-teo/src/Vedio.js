import  {useState} from "react";

const videos = 
{
    deer:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
    snail:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
    cat:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
    spider:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
  }

function Video(){
    const [currentVideo,setCurrentVideo] = useState('');


const handlevideos = (event) => {
    console.log(event.target.value)
    setCurrentVideo(event.target.value);

}

console.log(currentVideo)
return(
    <div>
       
    <h3>Here You can see videos</h3>

        <video control  autoPlay src={videos[currentVideo]} >
        </video>
    <label>
        <input type="radio" value="deer" checked={currentVideo === 'deer'} onChange={handlevideos}/>
        deer
    </label>
    <label>
        <input type="radio" value="snail" checked={ currentVideo === 'snail'} onChange={handlevideos}/>
         snail
    </label>
    <label>
        <input type="radio" value= "cat" checked={currentVideo === 'cat'} onChange={handlevideos}/>
        cat
    </label>
    <label>
        <input type="radio" value="spider" checked={currentVideo === 'spider'} onChange={handlevideos}/>
        spider
    </label>
    <p>Selected Option: {currentVideo} </p>

    </div>


)
}
export default Video;