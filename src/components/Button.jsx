import React from "react";
import { Link } from "react-router-dom";

export default function Button({ name, style, link }) {
  return (
    // <Link to={link} target={'_blank'}>
    <button className={style}>{name}</button>

    
  );
}
