// import React from 'react';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import '../App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:"10px",
    padding:"50px",
    width:"100%",
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:"white",
  },
  gridItem:{
    border:"2px",
    color:"White",
    backgroundColor:"gray",
    alignItems:"center",
    textAlign:"center",
    padding:theme.spacing(3),
    width:"100%",

  },
  smalldiv:{
    color:"black",
    textAlign:"left",
    margin:"10px"
  }
}));

export default function FirstPage() {
 
  const classes = useStyles();
  const [selected, setSelected] = useState(0)
  const [filled, setFilled] = useState(0)

  const images = [
      {
          id: 1,
          url: "https://assets.quillbot.com/images/theme/light/premiumPage/newAvailableWord.svg",
      },
      {
          id: 2,
          url: "https://assets.quillbot.com/images/theme/light/premiumPage/synonym.svg",
      },
      {
          id: 3,
          url: "https://assets.quillbot.com/images/theme/commonImages/plagiarismChecker/plag-premium.svg",
      },
      {
          id: 4,
          url: "https://assets.quillbot.com/images/theme/commonImages/premiumPage/comparisonTable.svg",
      },
  ]

  function handleItemSelection(itemNumber) {
      setFilled(0)
      setSelected(itemNumber)
      let elements = document.getElementsByClassName("itemHeading")
      for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove("selectedItem")
      }
      elements[itemNumber].classList.add("selectedItem")
  }

  let timeoutId;

  useEffect(() => {
      if (filled < 100) {
          clearTimeout(timeoutId)
          // eslint-disable-next-line react-hooks/exhaustive-deps
          timeoutId = setTimeout(() => setFilled(prev => prev += 0.6), 30)
      }
      else {
          setFilled(0)
          setSelected(prev => {
              if (prev === 3) {
                  handleItemSelection(0)
                  return 0;
              }
              else {
                  handleItemSelection(prev + 1)
                  return prev += 1
              }
          })

      }

      let progressElement = document.getElementsByClassName("progress")

      for (let i = 0; i < progressElement.length; i++) {
          if (i === selected) {
              progressElement[i].style.width = `${filled}%`
          }
          else {
              progressElement[i].style.width = "0%"
          }
      }

      // console.log(filled)
  }, [filled, selected])

  return (
    <>
    <div style={{width:"100%"}}>
    
    <div className="firstDiv">
    <p style={{fontSize:"30px",fontWeight:"400"}}>Save time and write with confidence </p> 
    <button style={{backgroundColor:"#499557",fontSize:"18px",padding:"10px",fontWeight:"550",color:"white",heigth:"200px",width:"400px" ,border:"none",borderRadius:"20px",paddingBottom:"10px",marginTop:"20px"}}>
    Upgrade to Quillbot Premium</button>
    </div>
    <div className='firstOuterDiv' >
    <img src="./Abstract.jpg" alt=""></img>
    
            <div className='innerDiv'>
                <div className='leftSection'>
                    <div className='imageDiv'>
                        <img src={images[selected].url} alt='Slide.jpg'></img>
                    </div>
                </div>
                <div className='rightSection'>
                    <div className='rightItem' onClick={() => handleItemSelection(0)}>
                        <p className='itemHeading selectedItem'>Increase your Productivity</p>
                        <p className='itemDescription'>Paraphrase more text at once to finish writing faster.</p>
                        <div className='progressBar'>
                            <div className='progress'></div>
                        </div>
                    </div>
                    <div className='rightItem' onClick={() => handleItemSelection(1)}>
                        <p className='itemHeading'>Access all modes</p>
                        <p className='itemDescription'>Get maximum control over how you paraphrase.</p>
                        <div className='progressBar'>
                            <div className='progress'></div>
                        </div>
                    </div>
                    <div className='rightItem' onClick={() => handleItemSelection(2)}>
                        <p className='itemHeading'>Scan for plagiarism</p>
                        <p className='itemDescription'>Unlock the Plagiarism Checker to guarantee all sources are cited and nothing is unintentionally plagiarized.</p>
                        <div className='progressBar'>
                            <div className='progress'></div>
                        </div>
                    </div>
                    <div className='rightItem' onClick={() => handleItemSelection(3)}>
                        <p className='itemHeading'>Compare all mode outputs at once</p>
                        <p className='itemDescription'>Paraphrase in and compare outputs from all seven modes.</p>
                        <div className='progressBar'>
                            <div className='progress'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
    </>
  );
}

