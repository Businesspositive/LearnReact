import React from "react";

export default function About (props) {
    // const [myStyle, setMyStyle]=useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btnText, setBtnText]=useState("Enable Dark Mode")
    // const toggleStyle =()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    let myStyle = {
      color:props.mode==="dark"?'white':'#042743',
      backgroundColor:props.mode==="dark"?'#042743':'white',
    }

  return (
    <div className="container" style={{color:props.mode==="dark"?'white':'#042743'}}>
        <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils gives you ability to analyze your text 
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
             <strong>Free to use</strong> 
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body" style={myStyle}>
              Textutil is a free charecter tool that provide instant charecter count
              & word count statitics for a given text.so it can help in writing text with 
              word/charecter limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter website works with any web browser such as Chrome, firefox, Internet Explorer etc.
              it is suitable for counting charecters in facebook posts, blogs, books, excel documents, pdf documents, essays etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
