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
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(249, 250, 251, 0.05) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        }}
      >
        {/* Header with Product Hunt Badge */}
        <Flex fillWidth horizontal="space-between" vertical="center" className={styles.projectHeader}>
          <h2 className={styles.projectTitle}>
            CostCuts
          </h2>
          <Badge
            background="accent-strong"
            onBackground="accent-strong"
            className={styles.productHuntBadge}
            style={{
              background: '#ff6154',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            🏆 #4 Product of the Day
          </Badge>
        </Flex>

        {/* Description */}
        <p className={styles.projectDescription}>
          A no-fee solution that helps smaller startups and SMBs save 10-30% on their software spend through collective buying power. 
          Built with my co-founders Lakshya Rajoria and Howard Zhu, CostCuts democratizes access to enterprise-level software discounts.
        </p>

        {/* Key Features */}
        <Flex direction="column" gap="m" className={styles.featuresContainer}>
          <p className={styles.featuresTitle}>
            Key Features:
          </p>
          <Flex direction="column" gap="s" paddingLeft="m" className={styles.featuresList}>
            <p className={styles.featureItem}>• No fees - we don't charge startups a dime</p>
            <p className={styles.featureItem}>• Collective buying power for enterprise discounts</p>
            <p className={styles.featureItem}>• 25% off Rippling, 10% off Vanta, 30% off LinkedIn Sales Navigator</p>
          </Flex>
        </Flex>

        {/* Links */}
        <Flex gap="m" wrap className={styles.linksContainer}>
          <SmartLink
            suffixIcon="arrowRight"
            href="/work/costcuts"
            className={styles.caseStudyButton}
          >
            <span>Read Case Study</span>
          </SmartLink>
          <SmartLink
            suffixIcon="arrowUpRightFromSquare"
            href="https://www.producthunt.com/products/costcuts"
            className={styles.websiteButton}
          >
            <span>Visit Website</span>
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
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(249, 250, 251, 0.05) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        }}
      >
        {/* Header */}
        <h2 className={styles.projectTitle}>
          Global Equity Management (GEM)
        </h2>

        {/* Description */}
        <p className={styles.projectDescription}>
          The leading intercollegiate student-run finance organization extending opportunities to 100+ students across 10+ universities internationally. 
          Founded in August 2022, GEM bridges the gap between academia and the financial industry.
        </p>

        {/* Key Programs */}
        <Flex direction="column" gap="m" className={styles.featuresContainer}>
          <p className={styles.featuresTitle}>
            Key Programs:
          </p>
          <Flex direction="column" gap="s" paddingLeft="m" className={styles.featuresList}>
            <p className={styles.featureItem}>• Undergraduate Stock Pitch Competition</p>
            <p className={styles.featureItem}>• Educational Workshops & Mentorship Programs</p>
            <p className={styles.featureItem}>• Industry Partnerships & Professional Networking</p>
          </Flex>
        </Flex>

        {/* Impact Stats */}
        <Flex gap="l" wrap style={{ marginTop: '16px' }} className={styles.statsContainer} horizontal="center">
          <Flex direction="column" align="center" className={styles.statItem}>
            <span className={styles.statNumber}>100+</span>
            <p className={styles.statLabel}>Students Impacted</p>
          </Flex>
          <Flex direction="column" align="center" className={styles.statItem}>
            <span className={styles.statNumber}>10+</span>
            <p className={styles.statLabel}>Universities</p>
          </Flex>
          <Flex direction="column" align="center" className={styles.statItem}>
            <span className={styles.statNumber}>2022</span>
            <p className={styles.statLabel}>Founded</p>
          </Flex>
        </Flex>

        {/* Links */}
        <Flex gap="m" wrap className={styles.linksContainer}>
          <SmartLink
            suffixIcon="arrowRight"
            href="/work/global-equity-management"
            className={styles.caseStudyButton}
          >
            <span>Read Case Study</span>
          </SmartLink>
          <SmartLink
            suffixIcon="arrowUpRightFromSquare"
            href="https://www.globalequitymanagement.org/"
            className={styles.websiteButton}
          >
            <span>Visit Website</span>
          </SmartLink>
        </Flex>
      </Flex>
    </Column>
  );
}
