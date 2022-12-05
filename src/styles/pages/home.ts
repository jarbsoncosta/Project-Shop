import { styled } from "..";


export const HomeContainer = styled('main',{
display:"flex",
//gap:"3rem",
width:"100%",
maxWidth:'calc(100vw - ((100vw - 1180px) / 2))',
marginLeft: "auto",


})

export const Product = styled('a',{
    background:'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius:6,
    padding: 3,
    cursor:"pointer",

    position:"relative",
    overflow:'hidden',

    img:{
      objectFit:"cover"
    },
    
    '&:hover':{
      footer:{
       transform: 'translateY(0%)',
       opacity:1
      }
   
     }
    
})

export const Footer = styled('footer',{
  display:"flex", 
  justifyContent: "space-between",
  padding:"2rem",
  background:'rgb(0, 0, 0, 0.6)',
  borderRadius:6,
  alignItems:"center",

  transform:'translateY(110%)',
  opacity:0,
  transition:'all 0.2s ease-in-out',
 
  img:{
    objectFit:"cover"
  },
  
  strong:{
    color:"$gray100",
    fontSize:"1.25rem",
    fontWeight:"bold"

  },
  span:{
    color:"$green300",
    fontSize:"1.5rem",
    fontWeight:"bold"

  },
    
})