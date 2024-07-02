import * as React from "react";
import './LoadingGif.css';

interface propsForLoadingGif {
    loading:boolean;
  }
export default function LoadingGif({loading}:propsForLoadingGif) {
    if (!loading) return null;
  return (
    <div className="loading-overlay" >
      <img src='https://media.tenor.com/tuyrWEKoEI8AAAAi/lasso-cowboy.gif' className="loadinggif" alt="Animated GIF"  />
    </div>

  );
}
