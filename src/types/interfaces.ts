import { ButtonProps, TypographyProps } from "@mui/material";
import React from "react";

export interface IWhietTextTP extends TypographyProps {
  innerText: string;
}
export interface ICallToActionBtnH extends ButtonProps {
  innerText: {
    top: string;
    Bottom: string;
  };
  icon: React.ReactNode;
}

export interface HIWCardProps {
  title: string;
  link: string;
  disc: string;
  iconImage: string;
}
