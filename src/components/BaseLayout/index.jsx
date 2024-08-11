import React from 'react';
import './index.scss'
import { NavBar, TabBar } from 'antd-mobile'
import {
 useNavigate,
 useLocation,
 Outlet
} from 'react-router-dom' 


const IconImage = (props) => {
  const { IconName } = props
  return (
    <span className={`iconimg ${IconName}`}></span>
  )
}

const Bottom = () =>{
 const navigate = useNavigate()
 const location = useLocation()
 const { pathname } = location

 const setRouteActive = (value) => {
  navigate(value)
 }

 const tabs = [
   {
     key: '/Exchange',
     title: 'Exchange',
     icon: <IconImage IconName="exchange"/>
   },
   {
     key: '/Playground',
     title: 'Playground',
     icon: <IconImage IconName="playground"/>,
   },
   {
    key: '/Friends',
    title: 'Friends',
    icon: <IconImage IconName="friends"/>,
  },
  {
    key: '/AirDrop',
    title: 'AirDrop',
    icon: <IconImage IconName="airdrop"/>,
  },
 ]

 return (
  <TabBar className='bottom bgColor2 rounded-top-max-lg fontColor1' safeArea activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
  </TabBar>
 )
}
const BaseLayout = function (){
 return (
    <div className='main-app h-100vh flex flex-column'>
      <div className='container-box'>
        <Outlet />
      </div>
      <Bottom />
    </div>
 )
}
export default BaseLayout