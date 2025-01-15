import { useState} from 'react';
import './App.css';
import SelectButton from './SelectButton';
import TimeView from './TimeView';
import OperateButton from './OperateButton';

function App() {
  const [nowTime, setNowTime] = useState<number>(30);
  const [firstTime, setFirstTime] = useState<number>(30);
  const [secondTime, setSecondTime] = useState<number>(5);
  const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false);

  return (
    <div className='text-center'>
      <SelectButton
        setNowTime={setNowTime} setFirstTime={setFirstTime} setSecondTime={setSecondTime}
        isInputDisabled={isInputDisabled}
      />
      <TimeView
        nowTime={nowTime} firstTime={firstTime}
      />
      <OperateButton
        setNowTime={setNowTime} firstTime={firstTime} secondTime={secondTime}
        setIsInputDisabled={setIsInputDisabled}
      />
    </div>
  );
}

export default App;