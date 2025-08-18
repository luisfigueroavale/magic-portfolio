"use client";

import { usePathname } from "next/navigation";

import { Fade, Flex, Line, ToggleButton, IconButton } from "@once-ui-system/core";

import { routes, social } from "@/resources";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade fillWidth position="fixed" height="80" zIndex={9} />
      <Fade fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        position="unset"
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
      >
        <div className={styles.mask} />
        {/* Left Section - Empty for balance */}
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
        </Flex>
        
        {/* Center Section - Navigation */}
        <Flex fillWidth horizontal="center">
          <Flex
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
            className={styles.navigationContainer}
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton 
                  prefixIcon="home" 
                  href="/" 
                  selected={pathname === "/"}
                  className={styles.navButton}
                />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" className="s-flex-hide" />
              {routes["/about"] && (
                <ToggleButton
                  className={styles.navButton}
                  prefixIcon="person"
                  href="/about"
                  label="About"
                  selected={pathname === "/about"}
                />
              )}
              {routes["/work"] && (
                <ToggleButton
                  className={styles.navButton}
                  prefixIcon="grid"
                  href="/work"
                  label="Work"
                  selected={pathname.startsWith("/work")}
                />
              )}
            </Flex>
          </Flex>
        </Flex>
        
        {/* Right Section - Social Media */}
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
            className={styles.socialContainer}
          >
            {/* Social Media Icons */}
            <Flex gap="16" className={styles.socialIcons}>
              {social.map(
                (item) =>
                  item.link && (
                    <IconButton
                      key={item.name}
                      href={item.link}
                      icon={item.icon}
                      tooltip={item.name}
                      size="s"
                      variant="ghost"
                      className={styles.socialIcon}
                    />
                  ),
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
