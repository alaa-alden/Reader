import css from 'styled-jsx/css'
export const Global = css.global`
    html,body{
        height: 100%;   
    }
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;

}   
`

export const Style_Root = css`
                #root{
                        height: 100%;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    
            `
export const Style_Header = css`
header{
  position: fixed;
  top: 0;
  width:100%;
  z-index:1;
}
              nav{
  background: #5a5a5c;
  height: 80px;
  width: 100%;
}
label.logo{
  color: #f2f2f2;
  font-size: 33px;
  line-height: 80px;
  padding: 0 140px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}
nav ul{
  float: right;
  margin-right: 60px;
}
nav ul li{
  display: inline-block;
  line-height: 80px;
  margin: 0 2px;
}
nav ul li a{
  color: #f2f2f2;
  font-weight: 500;
  font-size: 20px;
  padding: 7px 13px;
  border-radius: 3px;
  /* text-transform: uppercase; */
  font-family: 'Poppins', sans-serif;
}
a.active,a:hover{
  background: #29d  ;
  transition: .5s;
}
.checkbtn{
  font-size: 30px;
  color: white;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}
#check{
  display: none;
}
@media (max-width: 952px){
  label.logo{
    font-size: 27px;
    padding-left: 25px;
  }
  nav ul li a{
    font-size: 16px;
  }
}
@media (max-width: 858px){
  .checkbtn{
    display: block;
    margin-right: 40px;
  }
  ul{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #131414;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all .5s;
    z-index:1;
  }
  nav ul li{
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav ul li a{
    font-size: 20px;
  }
  a:hover,a.active{
    background: none;
    color: #f9c49a;
  }
  #check:checked ~ ul{
    left: 0;
  }
}
  `
export const Style_Main = css`
  main{
    position:absolute;
    top:30%;
    // left:15%;
    // tarnsform:tr anslate(-50%,-50%);
    // padding: 20px;
    // display:grid;
    // place-content:center; 
    // align-items: center;
    /* justify-content: center; */
    // min-height:80% ;
    // height: 80%; 
    // width:100%;
  }
  `
export const Style_Image = css`
 #div1 form{
  display:grid;
  grid-template-columns:auto;
  grid-template-rows:2fr 2fr 2fr;
  grid-template-areas:'label'
  '.'
  'button';
 }
#selector{
  grid-area:label;
  padding:10px 16px;
  // for position
      border-radius:48px;
      letter-spacing:2px;
      font-weight:bold;
      background:#5a5a5c;
      color:white;
      font-size:2em;
      cursor:pointer;
  }
#selector:hover{
    transform:scale(1.04);
    background:rgb(34, 153, 221);
}   
#div1 form button{
    grid-area:button;
  // for position
    outline: none;
    font-size:2em;
    border:none;
    background:#5a5a5c;
    color:#fff;
    border-radius:48px;
    letter-spacing:2px;
    font-weight:bold;    
    cursor:pointer;
  } 
  #div1 form button:disabled,button[disabled] {
  color:#5a5a5c;
  background:#e4e4e4;
  cursor:not-allowed;
}
  // div2
#div2 form label{ 
    font-size:2em;
    position: relative;
    right:10px;
    bottom: 10px;
    color:#5a5a5c;
  }
  #div2 form input{
    font-size:40px;
  font-family: Arial, Helvetica, sans-serif;
  line-height:40px;
  /* grid-area:'input'; */
  width: 100%;
  padding: 12px 20px;
  margin-bottom:10px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 50px;
  box-sizing: border-box;
  outline:none;
  }
  #div2 form button{
  outline: none;
  width:100%;
  font-size:2em;
  border:none;
  background:#5a5a5c;
  color:#fff;
  border-radius:50px;
  padding:15px;
  cursor:pointer
  }

  @media(max-width:952px){
    #div2 form{
        font-size:1em;
        height:50%;
        displa:flex;
        justify-content:center;
        align-items:center; 
    }
   #div2 form label{
      left:5px;
    }
   #div2 form input{
    }
   #div2 form button{
      width:50%;

    }
  }
  `
export const Style_File = css`
  #div1 form{
  display:grid;
  grid-template-columns:auto;
  grid-template-rows:2fr 2fr 2fr;
  grid-template-areas:'label'
  '.'
  'button';
 }
#selector{
  grid-area:label;
  padding:10px 26px;
  // for position
      border-radius:48px;
      letter-spacing:2px;
      font-weight:bold;
      background:#5a5a5c;
      color:white;
      font-size:2em;
      cursor:pointer;
  }
#selector:hover{
    transform:scale(1.04);
    background:rgb(34, 153, 221);
}   
#div1 form button{
    grid-area:button;
  // for position
    outline: none;
    font-size:2em;
    border:none;
    background:#5a5a5c;
    color:#fff;
    border-radius:48px;
    letter-spacing:2px;
    font-weight:bold;    
    cursor:pointer;
  } 
#div1 form button:disabled,button[disabled] {
  color:#5a5a5c;
  background:#e4e4e4;
  cursor:not-allowed;
}
  // div2
#div2 form label{ 
    font-size:2em;
    position: relative;
    right:10px;
    bottom: 10px;
    color:#5a5a5c;
  }
  #div2 form input{
    font-size:40px;
  font-family: Arial, Helvetica, sans-serif;
  line-height:40px;
  /* grid-area:'input'; */
  width: 100%;
  padding: 12px 20px;
  margin-bottom:10px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 50px;
  box-sizing: border-box;
  outline:none;
  }
  #div2 form button{
  outline: none;
  width:100%;
  font-size:2em;
  border:none;
  background:#5a5a5c;
  color:#fff;
  border-radius:50px;
  padding:15px;
  cursor:pointer
  }

  @media(max-width:952px){
    #div2 form{
        font-size:1em;
        height:50%;
        displa:flex;
        justify-content:center;
        align-items:center; 
    }
   #div2 form label{
      left:5px;
    }
   #div2 form input{
    }
   #div2 form button{
      width:50%;

    }
  }
  `
export const Style_Text = css`
form{

}
form label{ 
    font-size:2em;
    position: relative;
    right:10px;
    bottom: 10px;
    color:#5a5a5c;
  }
  form input{
    font-size:40px;
  font-family: Arial, Helvetica, sans-serif;
  line-height:40px;
  /* grid-area:'input'; */
  width: 100%;
  padding: 12px 20px;
  margin-bottom:10px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 50px;
  box-sizing: border-box;
  outline:none;
  }
  form button{
  outline: none;
  width:100%;
  font-size:2em;
  border:none;
  background:#5a5a5c;
  color:#fff;
  border-radius:50px;
  padding:15px;
  cursor:pointer
  }

  @media(max-width:952px){
    form{
        font-size:1em;
        height:50%;
        displa:flex;
        justify-content:center;
        align-items:center; 
    }
    form label{
      left:5px;
    }
    form input{
    }
    form buttom{
      width:50%;

    }
  }
  `
export const Style_Footer = css`
/* footer */
  footer {
    height: 6.5%;
    display:grid;
    place-content:center;
    background:#5a5a5c;
    color:#fff;
    font-size:20px;
    padding:15px;
    // margin-top:8px;
    // margin-bottom:0px;
    position: fixed;
    bottom: 0;
    width:100%;
                      }
              `