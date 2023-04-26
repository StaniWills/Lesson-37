import { useContext, useEffect } from "react";
import { Context } from "../context/Context";

function BlockItem() {

    const {string} = useContext(Context)

    return (
      <div className="div_elem">
        BlockItem
        <p>{string}</p>
      </div>
    );
  }
  
  export default BlockItem;
  