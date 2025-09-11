import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Portal({ children }) {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    // setContainer(document.getElementById("portal"));
    setContainer(document.body);
  }, []);

  return container && createPortal(children, container);
}

export default Portal;
