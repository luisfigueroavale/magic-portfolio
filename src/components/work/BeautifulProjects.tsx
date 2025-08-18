"use client";

import { Column, Flex, Heading, SmartLink, Text, Badge } from "@once-ui-system/core";
import { person } from "@/resources";
import styles from "./BeautifulProjects.module.scss";

export function BeautifulProjects() {
  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l" className={styles.container}>
      {/* CostCuts Project */}
      <Flex
        className={`costcuts-card ${styles.costcutsCard}`}
        direction="column"
        fillWidth
        background="surface"
        border="neutral-alpha-weak"
        radius="xl"
        padding="xl"
        gap="l"
      >
        {/* Header with Product Hunt Badge */}
        <Flex 
          fillWidth 
          horizontal="between" 
          vertical="center"
          className={styles.projectHeader}
        >
          <Heading variant="display-strong-l" onBackground="neutral-strong">
            CostCuts
          </Heading>
          <Badge className={styles.productHuntBadge}>
            🏆 #4 Product of the Day in Product Hunt
          </Badge>
        </Flex>

        {/* Description */}
        <Text variant="body-default-l" onBackground="neutral-weak">
          A no-fee solution that helps smaller startups and SMBs save 10-30% on their software spend through collective buying power. 
          Built with my co-founders Lakshya Rajoria and Howard Zhu, CostCuts democratizes access to enterprise-level software discounts.
        </Text>

        {/* Key Features */}
        <Column gap="m">
          <Text variant="body-strong-m" onBackground="neutral-strong">
            Key Features:
          </Text>
          <ul className={styles.featureList}>
            <li>No fees - we don't charge startups a dime</li>
            <li>Collective buying power for enterprise discounts</li>
            <li>25% off Rippling, 10% off Vanta, 30% off LinkedIn Sales Navigator</li>
          </ul>
        </Column>

        {/* Links */}
        <Flex gap="m" horizontal="start">
          <SmartLink href="/work/costcuts">
            Read Case Study →
          </SmartLink>
          <SmartLink href="https://www.producthunt.com/products/costcuts">
            Visit Website ↗
          </SmartLink>
        </Flex>
      </Flex>

      {/* GEM Project */}
      <Flex
        className={`gem-card ${styles.gemCard}`}
        direction="column"
        fillWidth
        background="surface"
        border="neutral-alpha-weak"
        radius="xl"
        padding="xl"
        gap="l"
      >
        {/* Header */}
        <Heading variant="display-strong-l" onBackground="neutral-strong">
          Global Equity Management (GEM)
        </Heading>

        {/* Description */}
        <Text variant="body-default-l" onBackground="neutral-weak">
          The leading intercollegiate student-run finance organization extending opportunities to 100+ students across 10+ universities internationally. 
          Founded in August 2022, GEM bridges the gap between academia and the financial industry.
        </Text>

        {/* Key Programs */}
        <Column gap="m">
          <Text variant="body-strong-m" onBackground="neutral-strong">
            Key Programs:
          </Text>
          <ul className={styles.gemFeatureList}>
            <li>Undergraduate Stock Pitch Competition</li>
            <li>Educational Workshops & Mentorship Programs</li>
            <li>Industry Partnerships & Professional Networking</li>
          </ul>
        </Column>

        {/* Impact Stats */}
        <Flex className={styles.statsContainer} gap="xl" horizontal="center">
          <Column horizontal="center" gap="xs">
            <Text variant="display-strong-xl" onBackground="neutral-strong">
              100+
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Students Impacted
            </Text>
          </Column>
          <Column horizontal="center" gap="xs">
            <Text variant="display-strong-xl" onBackground="neutral-strong">
              10+
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Universities
            </Text>
          </Column>
          <Column horizontal="center" gap="xs">
            <Text variant="display-strong-xl" onBackground="neutral-strong">
              2022
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Founded
            </Text>
          </Column>
        </Flex>

        {/* Links */}
        <Flex gap="m" horizontal="start">
          <SmartLink href="/work/global-equity-management">
            Read Case Study →
          </SmartLink>
          <SmartLink href="https://www.globalequitymanagement.org/">
            Visit Website ↗
          </SmartLink>
        </Flex>
      </Flex>
    </Column>
  );
}
