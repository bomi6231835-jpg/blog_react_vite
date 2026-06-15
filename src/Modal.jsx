import React, { useState } from 'react'

const Modal = (props) => {
  const { title, color, titlenum, setModal, setTitle} = props
  // console.log(props)
  const [input, setInput] = useState('')
  
  return (
    <div className='modal' style=
      {{ backgroundColor: props.color }}>
      <h4>제목:{title[titlenum]}</h4>
      <p>날짜</p>
      <p>상세내용</p>


      <input onChange={e => { setInput(e.target.value) }} value={input} />
      <button onClick={() => {
        let copy = [...title];
        copy[titlenum] = input
        setTitle(copy);
        setInput('');  // input 초기화
      }}>제목수정</button><br />

      <button onClick={()=>{
        setModal(false)}}>닫기</button>
    </div>
  )
}

export default Modal;


