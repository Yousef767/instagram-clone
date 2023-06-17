import React, { Fragment,useState } from 'react';
import './scss/style.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import IconsNav from './Components/IconsNav';
import Explore from './Components/Explore';
import Chats from './Components/Chats';
import Notifications from './Components/Notifications';
import Profile from './Components/Profile';
import Reels from './Components/Reels';

function App() {
  const [users] = useState([
    { userName: "xu5gg",name: "xu5gg", img: "i1.jpg" },
    { userName: "xvfg506",name: "xvfg506",img: "i2.jpg" },
    { userName: "voidp50_305",name: "voidp50_305", img: "i3.jpg" },
    { userName: "tyh6090",name: "tyh6090", img: "i4.jpg" },
    { userName: "you8_xr",name: "you8_xr", img: "i5.jpg" },
    { userName: "kpt850",name: "kpt850", img: "i6.jpg" },
    { userName: "yuui950",name: "yuui950", img: "i7.jpg" },
    { userName: "lkrgr50",name: "lkrgr50", img: "i8.jpg" },
    { userName: "r20g_gg",name: "r20g_gg", img: "i9.jpg" },
    { userName: "yr80_rr",name: "yr80_rr", img: "i10.jpg" },
    { userName: "bnvr90",name: "bnvr90", img: "i11.jpg" },
    { userName: "rdckf80",name: "rdckf80", img: "i12.jpg" },
  ]);
  return (
    <Fragment>
      <BrowserRouter>
      <IconsNav users={users}/>
        <Routes>
          <Route index path='/' element={<Home/>}></Route>
          <Route index path='/explore' element={<Explore users={users}/>}></Route>
          <Route index path='/chats' element={<Chats users={users}/>}></Route>
          <Route index path='/notifications' element={<Notifications/>}></Route>
          <Route index path='/profile' element={<Profile/>}></Route>
          <Route index path='/reels' element={<Reels/>}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
