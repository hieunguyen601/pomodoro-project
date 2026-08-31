import React, {useState, useEffect} from 'react';
import background1 from './assets/images/studying-room.jpg';
import background2 from './assets/images/studying-room2.jpg';
import background3 from './assets/images/studying-room3.jpg';
import background4 from './assets/images/studying-room4.jpg';
import background5 from './assets/images/beach.jpg';
import './App.css'

function App() {
  const [customTimes, setCustomTimes] = useState({
    focus: 45,
    short: 5,
    long: 15
  });

  const images = [
    background1, background2, background3, background4, background5
  ]

  const [time, setTime] = useState(45 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("focus"); // 'focus' | 'short' | 'long'
  const [cycles, setCycles] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length); // wrap back to 0 at the end
  };

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsRunning(false);
            if (mode === 'focus') {
              setCycles((c) => c + 1);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => clearInterval(timer);
  }, [isRunning, mode]);

  useEffect(() => {
    const modeLabel = mode === 'focus' ? 'Focus' : 'Break';
    document.title = `${formatTime()} - ${modeLabel} | Pomodoro`;
  }, [time, mode]);

  const switchMode = (newMode) => {
    setIsRunning(false);
    setMode(newMode);
    setTime(customTimes[newMode] * 60);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(customTimes[mode] * 60);
  };

  const handleTimeChange = (modeKey, newMinutes) => {
    const mins = Math.max(1, Number(newMinutes) || 1);
    setCustomTimes((prev) => ({
      ...prev,
      [modeKey]: mins
    }));

    // If adjusting the currently active mode while stopped, update timer immediately
    if (mode === modeKey && !isRunning) {
      setTime(mins * 60);
    }
  };

  const formatTime = () => {
    const mins = Math.floor(time / 60).toString().padStart(2, '0');
    const secs = (time % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${images[index]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '97vh',
        width: '100%',
        borderRadius: '12px',
        position: 'relative'
      }}
      className='pomodoro'
    >
      <div className='top-bar'>
        <h1 className='pomodoro-title'>POMODORO</h1>
        <div className='top-actions'>
          <button
            className='bg-btn'
            onClick={nextImage}
            title='Change Background'
            aria-label='Change Background'
          >
            🖼️
          </button>
          <button
            className='settings-btn'
            onClick={() => setShowSettings(!showSettings)}
            aria-label='Settings'
            title='Settings'
          >
            ⚙️
          </button>
        </div>
      </div>
      
      {/* Settings Modal */}
      {showSettings && (
        <div className='settings-overlay' onClick={() => setShowSettings(false)}>
          <div className='settings-modal' onClick={(e) => e.stopPropagation()}>
            <h3 className='settings-heading'>Adjust Timers (mins)</h3>
            
            <div className='setting-field'>
              <label>Focus:</label>
              <input
                type='number'
                min='1'
                max='180'
                value={customTimes.focus}
                onChange={(e) => handleTimeChange('focus', e.target.value)}
              />
            </div>

            <div className='setting-field'>
              <label>Short Break:</label>
              <input
                type='number'
                min='1'
                max='60'
                value={customTimes.short}
                onChange={(e) => handleTimeChange('short', e.target.value)}
              />
            </div>

            <div className='setting-field'>
              <label>Long Break:</label>
              <input
                type='number'
                min='1'
                max='90'
                value={customTimes.long}
                onChange={(e) => handleTimeChange('long', e.target.value)}
              />
            </div>

            <button className='close-btn' onClick={() => setShowSettings(false)}>
              Done
            </button>
          </div>
        </div>
      )}

      <div className='mode-group'>
        <button
          className={`mode-btn ${mode === 'focus' ? 'active' : ''}`}
          onClick={() => switchMode('focus')}
        >
          Focus
        </button>
        <button
          className={`mode-btn ${mode === 'short' ? 'active' : ''}`}
          onClick={() => switchMode('short')}
        >
          Short Break
        </button>
        <button
          className={`mode-btn ${mode === 'long' ? 'active' : ''}`}
          onClick={() => switchMode('long')}
        >
          Long Break
        </button>
      </div>

      <h1 className='timer-display'>{formatTime()}</h1>
      <h2>{mode === 'focus' ? 'Focus Time' : mode === 'short' ? 'Short Break' : 'Long Break'}</h2>

      <div className='control-group'>
        <button
          className='control-btn btn-start'
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button className='control-btn btn-reset' onClick={handleReset}>
          Reset
        </button>
      </div>

      <p style={{ marginTop: '10px', fontSize: '18px', fontWeight: '500' }}>
        Pomodoros Completed: {cycles}
      </p>
    </div>
  );
}

export default App
