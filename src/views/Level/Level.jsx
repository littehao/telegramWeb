import React from 'react';
import './Level.scss'
import { useNavigate } from 'react-router-dom';
import { NavBar } from 'antd-mobile'

import role from '@/assets/images/role.png'
import avatar from '@/assets/images/avatar.png'

const LevelPage = function (){
 const navigate = useNavigate();
 return (
  <div className='levelPage'>
    <NavBar className='font-white position-sticky top-0' onBack={() => {
     navigate(-1)
    }}>Level</NavBar>

    <div className='flex px-3 level-top'>
      <div className='skin-show position-relative'>
        <img className='skin-img' src={role} alt="" />
      </div>
      <div className=''>
        <h3 className='fs-48 font-weight-border font-white pl-3 mb-2'>Master</h3>
        <div className='progress-show pt-2 pr-3'>
          <div className='fontColor5 fs-32'>62.56M/100M</div>
          <div className='progressOut bgColor6 rounded-circle position-relative mt-3 mb-1'>
            <div className='progressIn bgColor5 position-absolute top-0 left-0 bottom-0 rounded-circle' style={{width:'50%'}}></div>
          </div>
        </div>
      </div>
    </div>

    <div className='pro-three flex text-center mx-4 px-3 justify-between'>
      <div className='twoth flex flex-column'>
        <div className='userimg2 rounded-circle overflow-hidden mx-auto'>
          <img className='w-100 h-100 mx-auto flex' src={avatar} alt="" />
        </div>
        <span className='font-black fs-28 my-1'>yahuhu</span>
        <span className='fontColor6 fs-36 font-weight-bolder'>20.5w</span>
      </div>
      <div className='oneth flex flex-column'>
        <div className='userimg1 rounded-circle overflow-hidden mx-auto'>
          <img className='w-100 h-100 mx-auto flex' src={avatar} alt="" />
        </div>
        <span className='font-black fs-28 my-1'>yahuhu</span>
        <span className='fontColor7 fs-36 font-weight-bolder'>22.5w</span>
      </div>
      <div className='threeth flex flex-column'>
        <div className='userimg2 rounded-circle overflow-hidden mx-auto'>
          <img className='w-100 h-100 mx-auto flex' src={avatar} alt="" />
        </div>
        <span className='font-black fs-28 my-1'>yahuhu</span>
        <span className='fontColor8 fs-36 font-weight-bolder'>18.2w</span>
      </div>
    </div>
  </div>
 )
}
export default LevelPage