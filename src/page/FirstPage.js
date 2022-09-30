import MainPageHeader from "../components/mainPageHeader/MainPageHeader";
import MainPageAbout from "../components/mainPageAbout/MainPageAbout";
import MainPageOurBest from "../components/mainPageOurBest/MainPageOurBest";
import MainPageFooter from "../components/mainPageFooter/MainPageFooter";
import Modal from "../components/modal/Modal";
import { useState } from "react";


const FirstPage = () =>{
  const [modal, setModal] = useState(false);
  
  return(
    <>
    <MainPageHeader modal = {modal} setModal = {setModal}/>
    <MainPageAbout/>
    <MainPageOurBest/>
    <MainPageFooter/>
    <Modal modal = {modal} setModal = {setModal}/>
   </>
  )
}
export default FirstPage;