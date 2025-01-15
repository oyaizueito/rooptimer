import { useRef } from "react";

const SelectButton = ({ setNowTime, setFirstTime, isInputDisabled }: any) => {
  let $timeInput = useRef<any>(null);

  const changeFirstTime = (firstTimeChange: number) => {
    setNowTime(firstTimeChange);
    setFirstTime(firstTimeChange);
    $timeInput.current.value = "";
  };

  // const changeSecondTime = (secondTimeChange: number) => {
  //   setSecondTime(secondTimeChange);
  // }

  const changeInTime = (e: any) => {
    let thisTime: number = e.target.value;
    if (thisTime == 0) {
      ;
    } else if (thisTime < 0) {
      thisTime = 0;
    } else if (thisTime > 86400){
      thisTime = 86400;
    } else {
      ;
    }
    setNowTime(thisTime);
    setFirstTime(thisTime);
    e.target.value = thisTime;
  }

  return (
    <div className="my-2">
      <div className='mb-2'>
        <button
          className="btn btn-outline-dark mx-1"
          onClick={() => changeFirstTime(30)}
          disabled={isInputDisabled}
        >30s</button>
        <button
          className="btn btn-outline-dark mx-1"
          onClick={() => changeFirstTime(60)}
          disabled={isInputDisabled}
        >1m</button>
        <button
          className="btn btn-outline-dark mx-1"
          onClick={() => changeFirstTime(300)}
          disabled={isInputDisabled}
        >5m</button>
        <button
          className="btn btn-outline-dark mx-1"
          onClick={() => changeFirstTime(600)}
          disabled={isInputDisabled}
        >10m</button>
      </div>
      {/* <div>
        <button className="btn btn-outline-dark" onClick={() => changeSecondTime(30)}>30s</button>
        <button className="btn btn-outline-dark" onClick={() => changeSecondTime(60)}>1m</button>
        <button className="btn btn-outline-dark" onClick={() => changeSecondTime(300)}>5m</button>
        <button className="btn btn-outline-dark" onClick={() => changeSecondTime(600)}>10m</button>
      </div> */}
      <div>
        <input
          type="number"
          ref={$timeInput}
          onChange={changeInTime}
          disabled={isInputDisabled}
          placeholder="second"
          min={1}
          max={86400}
        />
      </div>
    </div>
  );
}

export default SelectButton