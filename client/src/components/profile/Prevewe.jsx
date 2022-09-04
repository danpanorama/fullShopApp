import React, { useState } from "react";

function Prevewe(props) {
  const [preview, setpreview] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(props.file);
  reader.onload = () => {
    setpreview(reader.result);
  };

  return (
    <div className="h">
      <img src={preview} alt="" className="img" />
    </div>
  );
}

export default Prevewe;
