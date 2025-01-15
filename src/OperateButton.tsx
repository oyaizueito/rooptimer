import { useState, useRef } from 'react';

const OperateButton = ({ setNowTime, firstTime, setIsInputDisabled }: any) => {
  const [isResetDisabled, setIsResetDisabled] = useState<boolean>(true);

  let timer = useRef<number | undefined>(undefined);
  let $startButton = useRef<any>(null);
  let $stopButton = useRef<any>(null);
  let $restartButton = useRef<any>(null);

  // ****************************
  // スタートボタン押下処理
  // ****************************
  const startTimer = () => {
    changeButton(1);
    timer.current = window.setInterval(countDown, 1000);
    setIsResetDisabled(true);
    setIsInputDisabled(true);
  };

  // ****************************
  // カウントダウン処理
  // ****************************
  const countDown = () => {
    setNowTime((prevTime: any) => {
      if (prevTime > 1) {
        return prevTime - 1;
      } else {
        return firstTime;
      }
    });
  };

  // ****************************
  // ストップボタン押下処理
  // ****************************
  const stopTimer = () => {
    clearInterval(timer.current);
    changeButton(2);
    setIsResetDisabled(false);
  };

  // ****************************
  // リスタートボタン押下処理
  // ****************************
  const restartTimer = () => {
    changeButton(3);
    setIsResetDisabled(true);
    timer.current = window.setInterval(countDown, 1000);
  };

  // ****************************
  // リセットボタン押下処理
  // ****************************
  const resetTimer = () => {
    clearTimer();
    setIsInputDisabled(false);
  };

  // ****************************
  // タイマークリア処理
  // ****************************
  const clearTimer = () => {
    clearInterval(timer.current);
    timer.current = undefined;
    setNowTime(firstTime);
    changeButton(4);
    setIsResetDisabled(true);
  };

  // ****************************
  // ボタン制御
  // ****************************
  const changeButton = (num: number) => {
    if(num == 1) {
      $startButton.current.style.display = 'none';
      $stopButton.current.style.display = 'block';
    } else if(num == 2) {
      $stopButton.current.style.display = 'none';
      $restartButton.current.style.display = 'block';
    } else if(num == 3) {
      $stopButton.current.style.display = 'block';
      $restartButton.current.style.display = 'none';
    } else {
      $startButton.current.style.display = 'block';
      $stopButton.current.style.display = 'none';
      $restartButton.current.style.display = 'none';
    }
  }


  return (
    <div className='d-flex justify-content-center my-2'>
      <div className='mx-3'>
        <button
          onClick={startTimer}
          ref={$startButton}
          className="btn btn-outline-primary text-center"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          ref={$stopButton}
          className="btn btn-outline-danger text-center"
          style={{ display: 'none' }}
        >
          Stop
        </button>
        <button
          onClick={restartTimer}
          ref={$restartButton}
          className="btn btn-outline-success text-center"
          style={{ display: 'none' }}
        >
          Restart
        </button>
      </div>
      <div className='mx-3'>
        <button
          onClick={resetTimer}
          className="btn btn-outline-warning text-center"
          disabled={isResetDisabled}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default OperateButton