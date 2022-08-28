import {useCallback, useEffect, useRef, useState} from 'react';
import browserHistory from '../../browser-history';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { Film } from '../../types/film';
import { toHHMMSS } from '../../utils';

type VideoPlayerProps = {
  autoPlay?: boolean;
  fullScreen?: boolean;
  film: Film;
}

function VideoPlayer({autoPlay = false, fullScreen = false, film}: VideoPlayerProps): JSX.Element {
  const {videoLink, previewImage, name} = film;
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [remainingTime, setRemainingTime] = useState('00:00');
  const [currentPercents, setCurrentPercents] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);


  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    const handleLoadedData = () => setIsLoading(false);
    const handleTimeUpdate = () => {
      if (!fullScreen || !videoRef.current) {
        return;
      }
      const duration = videoRef.current.duration;
      const currentTime = videoRef.current.currentTime;
      const remainingTimeSec = duration - currentTime;
      setRemainingTime(toHHMMSS(remainingTimeSec));
      setCurrentPercents(currentTime * 100 / duration);
    };

    videoRef.current.addEventListener('loadeddata', handleLoadedData);
    videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      if (!videoRef.current) {
        return;
      }
      videoRef.current.removeEventListener('loadeddata', handleLoadedData);
      videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [fullScreen]);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play().catch(() => {
        // if user didn't interact with the document first
        setIsPlaying(false);
      });
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  const handleExitClick = useCallback(() => {
    browserHistory.back();
  }, []);

  const handleFullScreenClick = useCallback(() => {
    if (videoRef.current === null) {
      return;
    }

    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if ((videoRef.current as any).webkitRequestFullscreen) { /* Safari */
      (videoRef.current as any).webkitRequestFullscreen();
    } else if ( (videoRef.current as any).msRequestFullscreen) { /* IE11 */
      (videoRef.current as any).msRequestFullscreen();
    }
  }, []);

  if (!fullScreen) {
    return (
      <video src={videoLink} ref={videoRef} className="player__video" poster={previewImage} muted></video>
    );
  }

  return (
    <div className="player">
      {isLoading && <LoadingScreen />}
      <video
        src={videoLink}
        ref={videoRef}
        className="player__video"
        poster={previewImage}
        onDoubleClick={handleFullScreenClick}
      >
      </video>

      <button type="button" className="player__exit" onClick={handleExitClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={currentPercents} max="100"></progress>
            <div className="player__toggler" style={{left: `${currentPercents}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{remainingTime}</div>
        </div>

        <div className="player__controls-row">
          {
            isPlaying
              ? (
                <button type="button" className="player__play" onClick={() => setIsPlaying(false)}>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </button>
              )
              : (
                <button type="button" className="player__play" onClick={() => setIsPlaying(true)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
              )
          }
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
