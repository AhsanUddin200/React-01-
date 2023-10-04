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
        <div className="text-center">
        
        <h2 className="mb-4 text-center">
            <span className="bg-blue-500 text-blue px-4 py-1 font-bold mr-2 ">Here you can see your videos</span>
            </h2>
        <div className="flex justify-center items-center">
            <video control  autoPlay src={videos[currentVideo]} >
            </video>
            </div>
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