/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Panel from "./Panel";

const Accordion = () => {

  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div>
      <h2>Zajbe&apos;s Projects</h2>

      <Panel title="paid service" isActive={activeIndex === 0 && true} onActive={()=>setActiveIndex(0)}>   
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum adipisci perferendis illo optio quisquam quae laboriosam facilis, fugit, fuga tempore explicabo hic a in tenetur, quas praesentium reiciendis iusto facere voluptates earum eius sint totam dolorem reprehenderit! Vitae, corrupti magni?
      </Panel>

      <Panel title="free service" isActive={activeIndex === 1 && true} onActive={()=>setActiveIndex(1)}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima modi veniam id tempora quasi voluptatum ipsum eos dignissimos, dolore nesciunt placeat repudiandae nobis ullam libero sequi earum aperiam maxime in. Dolorem aliquam exercitationem fugit. Quos quidem inventore doloribus optio aliquam!
      </Panel>
    </div>
  );
};

export default Accordion;
