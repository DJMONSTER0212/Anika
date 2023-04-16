import React from 'react'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const ChatSupport = () => {
  return (
    <>
    <div>ChatSupport</div>
      <b>>>Click on Icon at bottom Right Corner</b>
            {/* <div className="App"> */}
            {/* <div className="container"> */}
            <TawkMessengerReact
                propertyId="643b9ef431ebfa0fe7f88fa7"
                widgetId="1gu4gekjv"/>
        {/* </div> */}
    </>
    
  )
}

export default ChatSupport

// import React, { Component } from 'react';

// class ChatWidget extends Component {
//   componentDidMount() {
//     const s = document.createElement('script');
//     s.type = 'text/javascript';
//     s.async = true;
//     s.innerHTML = `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
//     (function(){
//     var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
//     s1.async=true;
//     s1.src='https://embed.tawk.to/643b9ef431ebfa0fe7f88fa7/1gu4gekjv';
//     s1.charset='UTF-8';
//     s1.setAttribute('crossorigin','*');
//     s0.parentNode.insertBefore(s1,s0);
//     })();`;
//     this.instance.appendChild(s);
//   }

//   render() {
//     return (
//       <div ref={el => (this.instance = el)}>
//       </div>
//     );
//   }
// }

// export default ChatWidget;


