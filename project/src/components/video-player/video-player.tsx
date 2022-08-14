import {useEffect, useRef, useState} from 'react';

type VideoPlayerProps = {
  autoPlay?: boolean;
  src: string;
  poster: string;
}

function VideoPlayer({autoPlay = false, src, poster}: VideoPlayerProps): JSX.Element {
  const [, setIsLoading] = useState(true);
  const [isPlaying] = useState(autoPlay);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    // Для будущего спиннера
    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  return (
    <video src={src} ref={videoRef} className="player__video" poster={poster} muted></video>
  );
}

export default VideoPlayer;
