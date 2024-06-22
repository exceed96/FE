"use client";

import { ReactNode, useEffect, useState } from "react";

interface DropDownProps {
  visibility: boolean;
  setDropdownVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

const DropDown = (props: DropDownProps): JSX.Element => {
  const [visibilityAnimation, setVisibilityAnimation] =
    useState<boolean>(false);

  useEffect(() => {
    if (props.visibility) {
      setVisibilityAnimation(true);
    } else {
      setTimeout(() => {
        setVisibilityAnimation(false);
      }, 400);
    }
  }, [props.visibility]);

  return (
    <article
      className={`absolute ${
        props.visibility && "border-[1px] right-0 border-[#E6E6E6] min-w-24"
      } flex self-end overflow-hidden top-9 z-100 bg-white`}
      onClick={(e) => props.setDropdownVisibility(!props.visibility)}
    >
      {visibilityAnimation && props.children}
    </article>
  );
};

export default DropDown;
