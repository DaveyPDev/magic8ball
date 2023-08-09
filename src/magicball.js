import React, { useState, useEffect } from 'react';
import './magicball.css';
import Fortunes from './fortunes';

const Magicball = () => {
  const initialMessage = 'Think of a Question';
  const [message, setMessage] = useState(initialMessage);
  const [fortune, setFortune] = useState(initialMessage);
  const [fortuneColor, setFortuneColor] = useState('');
  const [showFortune, setShowFortune] = useState(false);

  const makeFortune = () => {
    setShowFortune(true);
  };

  useEffect(() => {
    if (showFortune) {
      const fortunesArray = Fortunes();
      const randomIndex = Math.floor(Math.random() * fortunesArray.length);
      const randomFortune = fortunesArray[randomIndex];
      setFortune(randomFortune.msg);

      if (randomFortune.color === 'green') {
        setFortuneColor('fortune-good');
      } else if (randomFortune.color === 'goldenrod') {
        setFortuneColor('fortune-meh');
      } else if (randomFortune.color === 'red') {
        setFortuneColor('fortune-bad');
      }

      const timer = setTimeout(() => {
        setFortune(initialMessage);
        setFortuneColor(''); 
        setShowFortune(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [showFortune]);

  return (
    <div className={'magicball'} onClick={makeFortune}>
      <p className={`fortune ${fortuneColor}`}>{fortune}</p>
    </div>
  );
};

export default Magicball;







// import React, { useState } from 'react';
// import './magicball.css';
// import Fortunes from './fortunes'; 

// const Magicball = (props) => {
//     const genRandom = () => Math.floor(Math.random() * 20) + 1;
//     const restart = () => {
//         setTarget(genRandom());
//         setFortune(0);
//         setFortuneCount(0);
//     };
//     const makeFortune = () => {
//         setFortune(genRandom());
//         setFortuneCount(fortuneCount + 1);
//     };
//     const [ fortune, setFortune ] = useState(genRandom());
//     const [ target, setTarget ] = useState(genRandom());
//     const [ fortuneCount, setFortuneCount ] = useState(0);
//     const isGood = target === fortune;

//     return (
//         <div className="magicball" onClick={makeFortune}>
//             <p className={isGood ? 'good' : 'bad'}>{fortune}</p>
        
//             <div>
//                 <button onClick={restart}>Cast New Fortune</button>
//             </div>
//         </div>
//     );
// };

// export default Magicball;





// import React, { useState } from 'react';
// import './magicball.css';

// const Magicball = (props) => {
// 	const genRandom = () => Math.floor(Math.random() * 20) + 1;
// 	const restart = () => {
// 		setTarget(genRandom());
// 		setFortune(0);
//     setFortuneCount(0)
// 	};
// 	const makeFortune = () => {
// 		setFortune(genRandom());
// 		setFortuneCount(fortuneCount + 1);
// 	};
// 	const [ fortune, setFortune ] = useState(genRandom());
// 	// const target = genRandom()
// 	const [ target, setTarget ] = useState(genRandom());
// 	const [ fortuneCount, setFortuneCount ] = useState(0);
// 	const isGood = target === fortune;
    
// 	return (
// 		<div className="magicball">
// 			<p className={isGood ? 'good' : 'bad'}> Casted {fortune} </p>
// 		</div>

//         <div>
// 			{!isGood && <button onClick={makeFortune}> Cast Fortune</button>}
// 			<button onClick={restart}>Cast New Fortune</button>
		
//         </div>
// 	);
// };

// {/* <h1>Target Num: {target}</h1> */}

// export default Magicball;
