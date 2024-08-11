import React, { useState, useEffect, useRef } from 'react';
import './Exchange.scss'
import { injectIntl } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { changeLang } from '@/store/base/baseStore';
import { Button, SafeArea } from 'antd-mobile'
import { ClockCircleOutline } from 'antd-mobile-icons'
import {
  useNavigate
 } from 'react-router-dom' 


import task1 from '@/assets/images/task1.png'
import task2 from '@/assets/images/task2.png'
import task3 from '@/assets/images/task3.png'
import avatar from '@/assets/images/avatar.png'
import bb from '@/assets/images/bb.png'
import money from '@/assets/images/money.png'
import setup from '@/assets/images/setup.png'
import convert from '@/assets/images/convert.png'
import boost from '@/assets/images/boost.png'
import skin from '@/assets/images/skin.png'
import role from '@/assets/images/role.png'

//语言切换
const Lang = (props) =>{
  const { intl } = props
  const lang = useSelector((state) => state.baseStore.lang)
  const dispatch = useDispatch();
  return(
    <>
    <Button color='primary' fill='solid' onClick={() => dispatch(changeLang(lang==='en-US'?'zh-CN':'en-US'))}>
        {lang==='en-US'?'中文':'English'}
      </Button>
     <div className='homePage mainbg'>{intl.formatMessage({id:'hello'})}</div>
    </>
  )
}

const StatusTimer = ({ timestamp }) => {
  const timerId = useRef(null)
  const [timeLeft, setTimeLeft]= useState(() => {
    const now = new Date().getTime();
    const distance = timestamp - now;
    return distance < 0 ? 0 : Math.floor((distance % (1000 * 60 * 60 * 24)) / 1000);
  });
 
  useEffect(() => {
    console.log('useEffect')
    timerId.current = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        const now = new Date().getTime();
        const distance = timestamp - now;
        return distance < 0 ? 0 : Math.floor((distance % (1000 * 60 * 60 * 24)) / 1000);
      });
    }, 1000);
    
    return () => {
      clearInterval(timerId.current)
      timerId.current = null
    };
  }, []);

  useEffect(() => {
    if(timeLeft <= 0){
      clearInterval(timerId.current)
      timerId.current = null
    }
  },[timeLeft]);
 
  const hours = Math.floor(timeLeft / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  const classStatus = timeLeft <= 0?'complete': hours > 0 ?'normal':'urgent'

  return (
    <dd className={`font-white fs-24 status flex align-center justify-center ${classStatus}`}>
      {timeLeft !== 0 ?<ClockCircleOutline className='mr-1' />:null}
      <span>{ timeLeft === 0?'complete':`${hours}:${minutes}:${seconds}`}</span>
    </dd>
  )
}

const Exchange = function (props){
  const navigate = useNavigate()
 return (
  <div className='exchange-page h-100 flex flex-column'>
    <div className='ex-top'>
       <SafeArea position='top' />
       <div className='flex flex-column text-center mt-5 mb-3'>
        <div className='userimg rounded-circle overflow-hidden mx-auto'>
          <img className='w-100 h-100 mx-auto flex' src={avatar} alt="" />
        </div>
        <span className='fs-32 font-weight-bolder font-white my-1'>yoyo</span>
        <div className='progressBox mx-auto' onClick={() => { navigate('/Level')}}>
          <div className='progressOut bgColor4 rounded-circle position-relative mt-3 mb-1'>
            <div className='progressIn bgColor5 position-absolute top-0 left-0 bottom-0 rounded-circle' style={{width:'50%'}}></div>
          </div>
          <div className='flex align-center justify-between'>
            <span className='fontColor2 fs-24'>master</span>
            <div className='fontColor3 fs-28 flex algin-center'>8<span className='fontColor2 fs-24'>/12</span></div>
          </div>
        </div>
       </div>
       <div className='flex mx-2'>
          <div>
            <div className='flex flex-column mb-5'>
              <img className='optImg mx-auto' src={bb} alt="" />
              <span className='textbg rounded-circle font-white fs-24 text-center'>Exchange</span>
            </div>
            <div className='flex flex-column mb-5'>
              <img className='optImg mx-auto' src={money} alt="" />
              <span className='textbg rounded-circle font-white fs-24 text-center'>+196.55k</span>
            </div>
            <div className='flex flex-column'>
              <img className='optImg mx-auto' src={setup} alt="" />
              <span className='textbg rounded-circle font-white fs-24 text-center'>Set Up</span>
            </div>
          </div>
          <div className='flex-1 pt-10'>
            <div className='roleimg'>
              <img  className='w-100 h-100' src={role} alt="" />
            </div>
          </div>
          <div>
            <div className='flex flex-column mb-5'>
              <img className='optImg mx-auto' src={convert} alt="" />
              <span className='textbg rounded-circle font-white fs-24 text-center'>Convert</span>
            </div>
            <div className='flex flex-column mb-5'>
              <img className='optImg mx-auto' src={boost} alt="" />
              <span className='textbg rounded-circle font-white fs-24 text-center'>Boost</span>
            </div>
            <div className='flex flex-column'>
              <img className='optImg mx-auto' src={skin} alt="" />
              <span className='textbg rounded-circle font-white fs-24 text-center'>Buy skin</span>
            </div>
          </div>
       </div>
    </div>
    <div className='ex-bottom pb-2'>
      <div className='number-money flex align-center p-2'>
         <span className='coinimg mr-3 ml-1'></span>
         <span className='fs-48 font-white font-weight-bolder'>25,564,896</span>
         <div className='flex flex-column ml-auto bgColor3 rounded-lg px-2 py-1'>
          <i className='nlc mx-auto mb-1'></i>
          <span className='fs-28 font-white'>8500/9500</span>
         </div>
      </div>
      <div className='font-white fs-36 mx-3 mt-4 mb-8'>Daily tasks</div>
      <div className='flex align-center justify-between mx-3'>
        <dl className='bgColor2 rounded-lg taskItem text-center '>
          <dt><img className='task-img mx-auto flex' src={task1} alt="" /></dt>
          <dd className='fontColor2 fs-28 mb-2'>Daily reward</dd>
          <StatusTimer timestamp={0}></StatusTimer>
        </dl>
        <dl className='bgColor2 rounded-lg taskItem text-center'>
          <dt><img className='task-img mx-auto flex' src={task2} alt="" /></dt>
          <dd className='fontColor2 fs-28 mb-2'>Daily combo</dd>
          <StatusTimer timestamp={new Date('2024-8-12 23:59:59').getTime()}></StatusTimer>
        </dl>
        <dl className='bgColor2 rounded-lg taskItem text-center'>
          <dt><img className='task-img mx-auto flex' src={task3} alt="" /></dt>
          <dd className='fontColor2 fs-28 mb-2'>Mini game</dd>
          <StatusTimer timestamp={new Date('2024-8-11 23:59:59').getTime()}></StatusTimer>
        </dl>
      </div>
    </div>
  </div>
 )
}
export default injectIntl(Exchange)