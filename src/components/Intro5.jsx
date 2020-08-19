import React, { useState, useEffect } from 'react';
import bgImage from '../images/intro4.png';

import './Intro.scss';

import Paragraph from './Paragraph';
import Questions from './Questions';
import BarChart from './BarChart'


const Intro4 = () => {

  const introColors = {
    bgColor: "#112b5e",
    textColor: "#0ed8c9",
    highlightColor: "#ea497b"
  }

  const questionList=["港獨、攬炒、經濟預期、香港未來⋯⋯他們之間的關係是什麼？"];
  const introContent = {
    content: [
      ["市民對不同議題的態度之間存在關係嗎？透過交叉分析，我們可以看到經濟預期、香港對中國的重要性、攬炒及港獨之間存在一些相關性，反映了市民對這些議題的看法環環緊扣。"],
  ]}

  return (
    <>
      <Questions class="intro5" questionList={questionList} bgImage={bgImage} />
      <Paragraph class="intro5" introContent={introContent} />
    </>
  )
}

export default Intro4;
