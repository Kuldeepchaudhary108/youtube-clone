// export const API_KEY = "AIzaSyDiV68SnVyfsuy1PV0sV7zm1N10yrAhP3M";~
export const API_KEY = import.meta.env.VITE_API_KEY;
export const valueConverter = (value) => {
  if (value > 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value > 1000) {
    return Math.floor(value / 1000) + "K";
  } else return value;
};

// AIzaSyCnffHdp4xLhLYMNO3DvKQcjQdmee99ka0
// AIzaSyDiV68SnVyfsuy1PV0sV7zm1N10yrAhP3M
