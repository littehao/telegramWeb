import React from 'react';
import './Level.scss'
import { useNavigate } from 'react-router-dom';
import { NavBar } from 'antd-mobile'

import role from '@/assets/images/role.png'

const LevelPage = function (){
 const navigate = useNavigate();
 return (
  <div className='levelPage'>
    <NavBar className='font-white position-sticky top-0' onBack={() => {
     navigate(-1)
    }}>Level</NavBar>
    <div className='flex'>
      <div className='skin-show'>
        <img className='skin-img' src={role} alt="" />
      </div>
      <div>
        <h3 className='fs-48 font-weight-border font-white'>Master</h3>
        <div className='progress-show'>
          <div className='fontColor5 fs-32'>62.56M/100M</div>
          <div className='progressOut bgColor6 rounded-circle position-relative mt-3 mb-1'>
            <div className='progressIn bgColor5 position-absolute top-0 left-0 bottom-0 rounded-circle' style={{width:'50%'}}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
 )
}
export default LevelPage