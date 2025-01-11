// Assignment 2
import React from "react";

interface CardProps {
    children: string;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Card