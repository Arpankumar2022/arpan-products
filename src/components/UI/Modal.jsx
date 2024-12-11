import {createPortal}  from 'react-dom';
import {useEffect,useRef} from 'react';


const Modal = ({children,open, className=''}) =>{

const dialog = useRef();


/**
useEffect(()=>{},[open])  Basically useEffect is used when open is getting
changes at the same time corresponding ()=>{} is getting changed

**/
useEffect(()=>{
  if(open){
   dialog.current.showModal();
  }
},[open])


return createPortal(
<dialog  ref={dialog}   className={`modal ${className}`}>
{children}
</dialog>,
document.getElementById('modal')
);


}

export default Modal;