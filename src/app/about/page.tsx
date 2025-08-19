import {
  Avatar,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `${baseURL}${person.avatar}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`${baseURL}${person.avatar}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Flex 
        fillWidth 
        horizontal="center"
        className={styles.mainContainer}
      >
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />

            {person.languages && person.languages.length > 0 && (
              <Flex wrap={false} gap="12" horizontal="center">
                {person.languages.map((language) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
            
            {about.tableOfContent.display && (
              <Column
                className={styles.tableOfContents}
                gap="32"
                paddingLeft="24"
              >
                <TableOfContents structure={structure} about={about} />
              </Column>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={`${styles.blockAlign} ${styles.scheduleCallButton}`}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth>
                {social.map(
                  (item) =>
                    item.link && (
                      <IconButton
                        key={item.name}
                        size="l"
                        href={item.link}
                        icon={item.icon}
                        variant="secondary"
                      />
                    ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience) => (
                  <Column key={`${experience.company}-${experience.role}`} fillWidth>
                    <Flex 
                      fillWidth 
                      horizontal="between" 
                      vertical="end" 
                      marginBottom="4"
                      className={styles.workExperienceHeader}
                    >
                      <Text 
                        id={experience.company} 
                        variant="heading-strong-l"
                        className={styles.companyTitle}
                      >
                        {experience.company}
                      </Text>
                      <Text 
                        variant="heading-default-xs" 
                        onBackground="neutral-weak"
                        className={styles.dateText}
                      >
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map((achievement: React.ReactNode, index: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Flex fillWidth gap="l" wrap>
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} flex={1} minWidth="160" gap="4">
                    <Text id={skill.title} variant="heading-strong-l">{skill.title}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.images && skill.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Flex>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
