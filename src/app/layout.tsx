import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import '@/resources/custom.css'

import classNames from "classnames";

import { Background, Flex, Meta, opacity, SpacingToken } from "@once-ui-system/core";
import { Footer, Header, Providers } from '@/components';
import { baseURL, effects, fonts, style, dataStyle, home } from '@/resources';

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
      data-brand={style.brand}
      data-accent={style.accent}
      data-neutral={style.neutral}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      data-scaling={style.scaling}
      data-viz-style={dataStyle.variant}
      data-theme="dark"
    >
      <head>
        <link rel="icon" type="image/png" href="/luis-favicon.png?v=3" />
        <link rel="icon" type="image/x-icon" href="/luis-favicon.png?v=3" />
        <link rel="apple-touch-icon" href="/luis-favicon.png?v=3" />
        <link rel="shortcut icon" href="/luis-favicon.png?v=3" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Hide Next.js development indicator */
              [data-nextjs-dev-indicator] {
                display: none !important;
              }
              [data-nextjs-dev-indicator] * {
                display: none !important;
              }
            `,
          }}
        />
      </head>
      <body
        className="display-flex position-relative p-0 m-0 page-background flex-column align-center min-width-0 fill-width"
        style={{
          overscrollBehaviorX: "auto"
        }}
      >
        <Providers>
          <Background
            position="fixed"
            mask={{
              x: effects.mask.x,
              y: effects.mask.y,
              radius: effects.mask.radius,
              cursor: false,
            }}
            gradient={{
              display: effects.gradient.display,
              opacity: effects.gradient.opacity as opacity,
              x: effects.gradient.x,
              y: effects.gradient.y,
              width: effects.gradient.width,
              height: effects.gradient.height,
              tilt: effects.gradient.tilt,
              colorStart: effects.gradient.colorStart,
              colorEnd: effects.gradient.colorEnd,
            }}
            dots={{
              display: effects.dots.display,
              opacity: effects.dots.opacity as opacity,
              size: effects.dots.size as SpacingToken,
              color: effects.dots.color,
            }}
            grid={{
              display: effects.grid.display,
              opacity: effects.grid.opacity as opacity,
              color: effects.grid.color,
              width: effects.grid.width,
              height: effects.grid.height,
            }}
            lines={{
              display: effects.lines.display,
              opacity: effects.lines.opacity as opacity,
              size: effects.lines.size as SpacingToken,
              thickness: effects.lines.thickness,
              angle: effects.lines.angle,
              color: effects.lines.color,
            }}
          />
          <Flex fillWidth minHeight="16" direction="column">
            <Header />
            <Flex
              zIndex={0}
              fillWidth
              padding="l"
              horizontal="center"
              flex={1}
            >
              <Flex horizontal="center" fillWidth minHeight="0">
                {children}
              </Flex>
            </Flex>
            <Footer/>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
