import "./App.css";
import React, { useState } from "react";
import {
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  EmailShareButton,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
  EmailIcon,
} from "react-share";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
          <div className="share-btns">
            <TwitterShareButton
              url={"https://github.com/MuhammadRabi/quote-generator"}
              title={`"${quote.content}" - ${quote.author}`}
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton
              url={"https://github.com/MuhammadRabi/quote-generator"}
              title={`"${quote.content}" - ${quote.author}`}
            >
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
            <TelegramShareButton
              url={"https://github.com/MuhammadRabi/quote-generator"}
              title={`"${quote.content}" - ${quote.author}`}
            >
              <TelegramIcon size={32} round={true} />
            </TelegramShareButton>
            <EmailShareButton
              url={"https://github.com/MuhammadRabi/quote-generator"}
              subject="Today's Quote"
              body={`"${quote.content}" - ${quote.author}`}
            >
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
