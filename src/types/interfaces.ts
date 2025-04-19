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
export interface PointOfViewCardProps {
  name: string;
  jobPosition: string;
  disc: string;
  profile: string;
}

export interface TeamMemberCardProps {
  cover: string;
  cardOverLay: {
    name: string;
    jobPosition: string;
    disc: string;
  };
}
export interface LatestBlogCardProps {
  cover: string;
  date: string;
  title: string;
  author: string;
  countComments: number;
  disc: string;
}
