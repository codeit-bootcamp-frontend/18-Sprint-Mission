import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
}

function Portal({ children }: Props) {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // setContainer(document.getElementById("portal"));
    setContainer(document.body);
  }, []);

  return container && createPortal(children, container);
}

export default Portal;
