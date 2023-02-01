import React,{useRef,useState} from 'react'
import VideoFooter from './VideoFooter'
// import VideoSidebar from './VideoSidebar'

const Video=()=> {
 const[playing,setPlaying]= useState(false)
 const videoRef = useRef(null)
 const handleVideoPress = ()=>{
    if(playing){
        videoRef.current.pause()
        setPlaying(false)
    }
    else{
        videoRef.current.play()
        setPlaying(true)

    }
 }
 
  return (
    <div className='video'>
        <video
            className="video_player"
            loop
            ref={videoRef}
            onClick={handleVideoPress}
            src='https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4'>
        </video>
        <VideoFooter />
        {/* <VideoSidebar/> */}
    </div>
  )
}

export default Video