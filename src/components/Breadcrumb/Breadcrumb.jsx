import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GrFormNextLink } from "react-icons/gr";
import { useLocation, useNavigate } from "react-router";
import { DASHBOARD_LINKS } from "@src/libs/enum/link";
import { cn } from "@src/libs/hooks";
import BreadNavItem from "./partial/BreadNavItem";
import SecondaryButton from "../Button/SecondaryButton";

const Breadcrumb = ({
  title,
  nextPageText,
  nextPageLink,
  getLinks
}) => {

  // *global
  const navigate = useNavigate();
  const location = useLocation();
  const global = useSelector((state) => state.global);

  // states
  const [links, setLinks] = useState([
    {
      url: DASHBOARD_LINKS.DASHBOARD,
      text: 'Dashboard',
      isActive: location.pathname === DASHBOARD_LINKS.DASHBOARD
    },
    ...(getLinks || [])
  ])

  return (
    <div className={cn(
      global.isDark ? "bg-gradient-darkPrimary" : "bg-gradient-primary",
      "flex flex-col md:flex-row justify-between md:items-center breadcrumbLayout py-4 px-5 "
    )}>
      <div>
        <h2 className={cn(
          global.isDark ? 'text-livid' : 'text-white',
          "lg:text-[28px] text-2xl font-medium  cursor-default font-secondary"
        )}>
          {title ? title : 'Dashboard'}
        </h2>

        <ul className="flex items-center gap-x-1.5 mt-1.5">
          {links.map((item, index) => <BreadNavItem
            key={index}
            item={item}
            links={links}
            index={index}
            isDark={global.isDark}
          />)}
        </ul>
      </div>

      {(nextPageText && nextPageLink) ? <div className="mt-4 md:mt-0">
        <SecondaryButton
          text={nextPageText}
          endIcon={<GrFormNextLink className={cn('text-[26px] relative -top-[1px]')} />}
          onClick={() => navigate(nextPageLink ? nextPageLink : '')}
          css=''
        />
      </div> : null}

    </div>
  );
};

export default Breadcrumb;
