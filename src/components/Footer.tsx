import { Flex, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      fillWidth
      padding="8"
      horizontal="center"
      className={styles.footer}
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
      >
        <Text 
          variant="body-default-s" 
          onBackground="neutral-strong"
          className={styles.copyright}
        >
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
        </Text>
        <Flex gap="16" className={styles.socialContainer}>
          {social.map(
            (item) =>
              item.link && (
                <SmartLink
                  key={item.name}
                  href={item.link}
                  variant="ghost"
                  size="s"
                  className={styles.socialIcon}
                  aria-label={item.name}
                >
                  <IconButton
                    icon={item.icon}
                    size="s"
                    variant="ghost"
                  />
                </SmartLink>
              ),
          )}
        </Flex>
      </Flex>
      <Flex height="80" show="s" className={styles.mobileSpacer}></Flex>
    </Flex>
  );
};
