import './App.css'
import {GiMushroomGills} from "react-icons/gi"
import Img1 from "./assets/cogumelo1.jpg"
import Img2 from "./assets/cogume2.jpeg"
import Img3 from  "./assets/cogume3.webp"
function App() {
  return (
    <>
    <div style={{display:"flex",width:430,margin:"auto",marginBottom:30}}> 
    <GiMushroomGills size={40} color={"Sienna"}/>
   <h1 className={"titulo"} style={{lineHeight:"1%"}}>Cogumelo TypeScript</h1>
   </div>
   <section>
     <div className={"div1"}>
     <b>Cogumelo</b> é o nome comum dado ao basidioma ou ascoma,
      estrutura de reprodução sexuada de alguns fungos dos
       filos Basidiomycota e Ascomycota, pertencentes ao Reino Fungi.
        <br/>
        Sua reprodução sexuada se faz pela junção de hifas.
         São seres vivos que contêm uma ampla variedade de formas,
          cores e tamanhos. 
     </div>
       <div className={"div5"}>
     <img src={Img1} alt=""/>
     </div>
     <div className={"div2"}>
     <b>Digestão</b>
     <br/>
A maioria dos integrantes do reino Fungi, assim como as bactérias, 
obtém alimento decompondo a matéria orgânica do corpo de organismos mortos,
 atuando como saprófagos, conhecidos popularmente como decompositores. 
 Todos os fungos, sem exceção, são heterótrofos por absorção.
 <br/>
 A nutrição ocorre por quebra de enzimas complexas do fungo,
  para ajudar na absorção de nutrientes necessários para sua atividade metabólica.

     </div>
     <div className={"div3"}>
     <b>
     Importância comercial, medicinal e religiosa
     </b>
     <br/>
     Muitos cogumelos são comestíveis, alguns, como Agaricus sylvaticus,
      o Agaricus blazei e Pleurotus, entre outros, são largamente cultivados com 
      aplicação de cuidados monitorados. 
      <br/>
      Outros, no entanto, são extremamente tóxicos, como por exemplo a 
      Amanita muscaria, podendo, em alguns casos, causar morte.

     </div>
      <div className={"div6"}>
        <img src={Img2} alt="" style={{width:300,marginLeft:250}}/>
     </div>
     <div className={"div4"}>
     <b>Medicina tradicional</b>
     <br/>
Alguns cogumelos são usados na medicina tradicional.
<br/>
 Em alguns países, extratos, como polissacarídeo-K, esquizofilano,
  peptídeo polissacarídeo ou lentinano, são terapias adjuvantes contra
   o câncer registradas pelo governo, mas evidências clínicas de eficácia 
   e segurança desses extratos em humanos não foi confirmado. 
     </div>
     <div className={"div7"}>
     <img src={Img3} alt=""/>
     </div>
   </section>
    </>
  )
}

export default App
