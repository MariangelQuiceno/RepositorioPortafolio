import { Header } from '../../Layouts/Header/Header'
import { LogoSena } from '../../SenaLogo/SenaLogo';
import { HeaderTitle } from '../../headerComponents/HeaderTitle/HeaderTitle';
import { ImgProfile } from '../../headerComponents/ImgProfile/ImgProfile';
import { Item } from '../../headerComponents/Item/Item';
import { NavBar } from '../../headerComponents/NavBar/NavBar';
import './headerPartCss.css'
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";



export const HeaderPart = () => {
    return (
      <div className="header-container"> 
         <Header>
         <ImgProfile/>
         <HeaderTitle text="Título Principal" level={1} />
         <p className="line" >___________</p>
         <NavBar/>
         <LogoSena/>
         < p className="iconsHeader" >
         <a href="#"><BsLinkedin/> </a>
         <a href="#"><BsFacebook/> </a>
         <a href="#"><BsInstagram/>  </a>
         <a href="#"><BsTwitterX/> </a>
         <a href="#"><BsWhatsapp/> </a>
          
          </p>
          
         </Header>
      </div>
    );
  };