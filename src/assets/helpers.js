import { useState, useEffect } from 'react';

const capitalizeString = (text) => text.charAt(0).toUpperCase() + text.slice(1);
const cutString = (text, numChar) => (text.length <= numChar) ? text : text.slice(0, numChar) + '...' ;
const searchStorage = ( id ) => localStorage.getItem(`rule-of-thumb-id-${ id }`) === "voted" ? true : false;
const calculateVotes = ({ positive=0, negative=0 }) => {
    const posit = Number(positive);
    const negat = Number(negative);
    const totalVotes = posit + negat;
    const leftWidth = ( posit / totalVotes ) * 100;
    const rightWidth = 100 - leftWidth;

    return {
        leftWidth: leftWidth,
        rightWidth: rightWidth,
        leftPercent: `${leftWidth.toFixed(1)} %`,
        rightPercent: `${rightWidth.toFixed(1)} %`,
        good: (leftWidth > rightWidth) ? true : false
    }
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
function useWindowDimensions() {
    const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }
  

export { capitalizeString, cutString, calculateVotes, searchStorage, useWindowDimensions };