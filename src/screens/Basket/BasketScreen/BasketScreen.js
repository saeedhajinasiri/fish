import React, {useState} from 'react';
import {FirstStep, SecondStep, ThirdStep, FourthStep} from "./steps";

export const BasketScreen = (props) => {
  const [basketCount, setBasketCount] = useState(0);
  const [basketStep, setBasketStep] = useState('second');

  if (basketCount === 0) {
    return (
      <FirstStep setBasketCount={setBasketCount}/>
    )
  }

  if (basketStep === 'third') {
    return (
      <ThirdStep basketStep={basketStep} setBasketStep={setBasketStep}/>
    );
  }

  if (basketStep === 'fourth') {
    return (
      <FourthStep basketStep={basketStep} setBasketStep={setBasketStep}/>
    );
  }

  return (
    <SecondStep basketStep={basketStep} setBasketStep={setBasketStep}/>
  );
};
