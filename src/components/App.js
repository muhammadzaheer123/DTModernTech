import React, { useState } from 'react';
import './credit-card.css';
import visaLogo from '../constants/imgs/visa_logo.png';
import masterCardLogo from '../constants/imgs/mc_logo.png';

export default () => {
  const[backColor,setbackColor]=useState('linear-gradient(25deg, #0f509e, #1399cd)');
  const[logo,setLogo]=useState('')
  const [cardNo,setCardNo]=useState('Enter Card Number');
    return (
      <div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <div className='credit-card' style={{background:backColor}}>
            <div className='credit-card__logo'>
            <img className='logo' src={logo} width="60"/>
            </div>

            <div className='credit-card__number'>{cardNo==''?'Enter Card Number':cardNo}</div>
            
            <div className='credit-card__info'>
                <div className='credit-card__info_name'>
                    <div className='credit-card__info_label'>CARDHOLDER'S NAME</div>
                    <div>MATT SMITH</div>
                </div>

                <div className='credit-card__info_expiry'>
                    <div className='credit-card__info_label'>VALID UP TO</div>
                    <div>06/2027</div>
                </div>
            </div>
            </div>
            <div className='credit-card__back' style={{background:backColor,marginLeft:'20px'}}>
              <div className='credit-card-back__container' />
              <div className='credit-card-back__input__container'>
                <text style={{}}>123</text>
                </div>
            
              
              {/* <img className='logo' src={logo} width="60" /> */}

           

       
            </div>

        </div>
    <div style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
            <button title="Red" onClick={()=>setbackColor('red')} style={{height:'40px',width:'100px',marginTop:'50px',borderRadius:'10px',backgroundColor:'red',borderWidth:'0px'}} />
            <button title="default" onClick={()=>setbackColor('linear-gradient(25deg, #0f509e, #1399cd)')} style={{height:'40px',width:'100px',marginTop:'50px',borderRadius:'10px',backgroundColor:'#1171B3',borderWidth:'0px'}} />
<img src={masterCardLogo} style={{width:'50px',height:'50px',borderRadius:'40px',marginTop:50}}  onClick={()=>setLogo(masterCardLogo)} />
<img src={visaLogo} style={{width:'50px',height:'50px',backgroundColor:'black',marginTop:50}}  onClick={()=>setLogo(visaLogo)} />
<input style={{width:'100px',height:'20px',border:'1px solid black'}} onChange={(text)=>setCardNo(text.target.value)} />
        </div>
        </div>
    );
}