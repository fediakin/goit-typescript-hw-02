import React from "react";
import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtn {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtn> = ({ onClick }) => {
  return (
    <div className={s.wrap}>
      <button className={s.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
