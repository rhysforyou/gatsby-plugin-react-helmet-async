import React from "react";
import { HelmetProvider } from "react-helmet-async";

const helmetContext = {};

export const wrapRootElement = ({ element }) => {
  return <HelmetProvider context={helmetContext}>{element}</HelmetProvider>;
};

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes
}) => {
  const { helmet } = helmetContext;

  if (helmet == null) {
    return;
  }

  setHeadComponents([
    helmet.base.toComponent(),
    helmet.title.toComponent(),
    helmet.meta.toComponent(),
    helmet.link.toComponent(),
    helmet.style.toComponent(),
    helmet.script.toComponent(),
    helmet.noscript.toComponent()
  ]);

  setHtmlAttributes(helmet.htmlAttributes.toComponent());
  setBodyAttributes(helmet.bodyAttributes.toComponent());
};
