import React from 'react'
type props ={
  title:string;
}
const Title = ({title}:props) => {
  return (
    <h2>{title}</h2>
  )
}

export default Title