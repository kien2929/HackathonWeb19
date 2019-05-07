import React from 'react';

const Page = ({children, singleMode, id}) => (<div
  id={id} className="bg-white shadow-1 center pa4" 
  style={{width: "100%", height: singleMode ? "297mm" : ""}}
>
  {children}
</div>); 

export default Page;