import React from "react";
import NavItem from "../Navigation/NavItem/NavItem";
import styles from "./mobile-menu.module.scss";
import { NAV_SECTIONS } from "@/src/variables/general";
import { ActivatedItemType } from "@/src/types/data";

function MobileMenu({ isActive = true, toggleActive }: ActivatedItemType) {
  const NAV_ELEMENTS = NAV_SECTIONS.map((el) => {
    if (el.url) {
      return <NavItem url={el.url} text={el.name} key={el.name} onClick={toggleActive} />;
    } else {
      return <NavItem text={el.name} key={el.name} onClick={toggleActive} isDownloadable />;
    }
  });

  return (
    <nav className={`${styles.mobile} ${isActive ? styles.mobile__active : styles.mobile__hidden}`}>
      <ul className={styles.mobile__nav}>{NAV_ELEMENTS}</ul>
      <div className={styles.mobile__background} onClick={toggleActive} />
    </nav>
  );
}

export default MobileMenu;

// import React from "react";
// import styles from "./mobile-menu.module.scss";
// import { INSTAGRAM_URL, NAV_SUBPAGES, TIKTOK_URL } from "@/src/variables/variables";
// import { COLORS_NAMES } from "@/src/types/styling";
// import { Instagram, TikTok } from "@/src/components/icons";
// import IconLink from "../../IconLink/IconLink";
// import NavItem from "../HeaderNav/NavItem/NavItem";
// import { ActivatedItemType } from "@/src/types/content";

// function MobileMenu({ isActive, toggleActive }: ActivatedItemType) {
//   return (
//     <div className={`${styles.mobile} ${isActive ? styles.mobile__active : styles.mobile__hidden}`}>
//       <nav>
//         <ul className={styles.mobile__nav}>
//           {NAV_SUBPAGES.map((el) => (
//             <NavItem url={el.url} text={el.name} key={el.name} onClick={toggleActive} />
//           ))}
//         </ul>
//       </nav>
//       <div className={styles.mobile__socials}>
//         {/* <IconLink
//               url={FACEBOOK_URL}
//               IconComponent={Facebook}
//               color={COLORS_NAMES.primary}
//               size={64}
//             /> */}
//         <IconLink
//           url={INSTAGRAM_URL}
//           IconComponent={Instagram}
//           color={COLORS_NAMES.primary}
//           size={64}
//         />
//         <IconLink url={TIKTOK_URL} IconComponent={TikTok} color={COLORS_NAMES.primary} size={64} />
//       </div>
//     </div>
//   );
// }

// export default MobileMenu;
