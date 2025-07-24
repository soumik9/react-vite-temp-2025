import { useRouter } from "next/router";
import React, { useState } from "react";
import BreadNavItem from "./partial/BreadNavItem";
import { useSelector } from "react-redux";
import { cx } from "@/utils/hooks/helper";
import { DASHBOARD_LINKS } from "@/utils/enum/link";
import PrimaryButton from "../Button/PrimaryButton";
import { GrFormNextLink } from "react-icons/gr";
import SecondaryButton from "../Button/SecondaryButton";

const Breadcrumb = ({
  title,
  nextPageText,
  nextPageLink,
  getLinks
}) => {

  // *global
  const router = useRouter();
  const global = useSelector((state) => state.global);

  // states
  const [links, setLinks] = useState([
    {
      url: DASHBOARD_LINKS.DASHBOARD,
      text: 'Dashboard',
      isActive: router.pathname === DASHBOARD_LINKS.DASHBOARD
    },
    ...(getLinks || [])
  ])

  return (
    <div className={cx(
      global.isDark ? "bg-gradient-darkPrimary" : "bg-gradient-primary",
      "flex flex-col md:flex-row justify-between md:items-center breadcrumbLayout py-4 px-5 "
    )}>
      <div>
        <h2 className={cx(
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
          endIcon={<GrFormNextLink className={cx('text-[26px] relative -top-[1px]')} />}
          onClick={() => router.push(nextPageLink ? nextPageLink : '')}
          css=''
        />
      </div> : null}

    </div>
  );
};

export default Breadcrumb;
