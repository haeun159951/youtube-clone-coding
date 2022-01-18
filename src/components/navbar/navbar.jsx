import React, { useRef } from "react";
import style from "./style.module.css";

const Navbar = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <nav className={style.nav}>
      <div className={style.heading}>
        <img className={style.logo} src="/images/logo.png" alt="" />
        <h1>YouTube</h1>
      </div>
      <input
        ref={inputRef}
        className={style.search}
        type="search"
        onKeyPress={onKeyPress}
      />
      <button className={style.button} type="submit" onClick={onClick}>
        <img className={style.btnImage} src="/images/search.png" alt="" />
      </button>
    </nav>
  );
};

export default Navbar;
