import React, { useEffect, useState } from "react";
import { Text } from "slate";
import { BlockMath, InlineMath } from "react-katex";
// import { ListItem } from "@/components/PreviewContent/PreviewElements/ListItem";
// import { Checkbox } from "@/components/ui/checkbox";
import { alignMap } from "./help";
import styled from "styled-components";

const Hotspot = styled.div`
  @keyframes active {
    0% {
      transform: scale(0.1);
      opacity: 1;
    }
    70% {
      transform: scale(1.5);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  .beacon:before {
    content: "";
    position: absolute;
    height: 30px;
    width: 30px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    box-shadow: 0px 0px 2px 2px #ffffff;
    animation: active 2s infinite linear;
  }
`;

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { CollapsibleAudioPlayer } from "../components/AudioWrapper";
import { EmbedWidget } from "../components/Embed";
import { EmbedMapBlock } from "../components/Map";

import { ListItem } from "../components/ListItems";

const LazyLoadingWidget = ({ src }) => {
  return (
    <div className="relative h-[410px] w-[360px] overflow-y-auto px-6 sm:w-[660px]">
      <EmbedWidget widgetId={src} />
    </div>
  );
};

const renderElement = (
  node,
  children,
  key,
  index,
  nodes,
  fontFam,
  hideTitle
) => {
  switch (node.type) {
    case "paragraph":
      return (
        <p
          className={`pt-3 leading-7 text-${alignMap[node.align] || node.align}
            ${fontFam}
  
            ${fontFam === "font-mono" ? "text-sm leading-6" : ""}
            dark:text-gray-200
            `}
          key={key}
        >
          {children}
        </p>
      );

    case "heading-one":
      return (
        <h1
          className={`mt-3 pb-4   text-4xl font-bold lg:text-5xl text-${
            alignMap[node.align] || node.align
          }
              ${fontFam}
              dark:text-gray-200
              `}
          key={key}
        >
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2
          className={`mt-3  text-2xl font-bold lg:text-3xl text-${
            alignMap[node.align] || node.align
          }
              ${fontFam}
              dark:text-gray-200
              `}
          key={key}
        >
          {children}
        </h2>
      );

    case "heading-three":
      return (
        <h3
          className={`mt-3 text-xl font-bold  lg:text-2xl text-${
            alignMap[node.align] || node.align
          }
              ${fontFam}
              dark:text-gray-200
              `}
          key={key}
        >
          {children}
        </h3>
      );
    case "map":
      return <EmbedMapBlock element={node} />;
    case "block-quote":
      return (
        <blockquote
          className={`text-red  relative mb-3  ml-3 mt-4 border-l-4 border-gray-400 pl-4 text-gray-500 dark:text-gray-200
              ${fontFam}
            `}
        >
          {children}
        </blockquote>
      );

    case "bulleted-list":
      return (
        <li className={`mt-2 list-inside list-disc  ${fontFam}`} key={key}>
          {children}
        </li>
      );
    case "numbered-list":
      // Find the corresponding list group for this node
      return (
        <div className={`mt-2  ${fontFam}`}>
          <ListItem
            nodes={nodes}
            element={node}
            children={children}
            key={key}
            listType="numbered"
            isPreview={true}
          />
        </div>
      );
    case "option-list-item":
      // Find the corresponding list group for this node
      return (
        <div className={`mt-2  ${fontFam}`}>
          <ListItem
            nodes={nodes}
            element={node}
            children={children}
            key={key}
            listType="options"
            isPreview={true}
          />
        </div>
      );
    case "tts":
      return (
        <CollapsibleAudioPlayer
          node={node}
          key={key}
          index={index}
          nodes={nodes}
        >
          {children}
        </CollapsibleAudioPlayer>
      );
    case "image":
      return (
        <div className={`relative flex justify-${node.align} mt-3`}>
          <img
            src={node.url}
            width={node.width}
            height={node.height}
            className="rounded-md shadow-md"
          />
          {node.audioPoint &&
            node.audioPoint.map((el, i) => {
              let isLoading = true;
              return (
                <Hotspot
                  key={i}
                  className="absolute"
                  style={{ left: `${el.x}%`, top: `${el.y}%` }}
                >
                  <Dialog>
                    <DialogTrigger>
                      <a
                        href="#"
                        className="beacon flex h-[24px] w-[24px] items-center justify-center  rounded-full border-2 border-white shadow-lg ring-1 ring-gray-400"
                      >
                        <div className="h-[12px] w-[12px] rounded-full border border-gray-400 bg-white"></div>
                      </a>
                    </DialogTrigger>
                    {el.label && (
                      <DialogContent>
                        <DialogTitle>{el.label}</DialogTitle>
                        {el.link && (
                          <LazyLoadingWidget index={i} src={el.link} />
                        )}
                      </DialogContent>
                    )}
                  </Dialog>
                </Hotspot>
              );
            })}
        </div>
      );
    case "link":
      return (
        <a
          href={node.url}
          target="_blank"
          className="inline text-blue-600 underline dark:text-blue-400"
        >
          {children}
        </a>
      );

    case "inline-equation":
      return (
        <span className="pointer-events-none px-1 dark:text-gray-200" key={key}>
          <InlineMath math={node.latex} />
        </span>
      );

    case "equation":
      return (
        <div
          className="mb-4 mt-4 flex justify-center dark:text-gray-200"
          key={key}
        >
          <BlockMath math={node.latex} />
        </div>
      );

    case "column":
      return (
        <div className="grid w-full grid-cols-2 items-start gap-4  pb-1 pt-1">
          {children}
        </div>
      );
    case "column-cell":
      return <div>{children}</div>;

    default:
      return <div></div>;
  }
};

export const parseNodes = (nodes, fontFam, hideTitle = false) => {
  return (
    nodes &&
    nodes.map((node, index) => {
      console.log(node.type);
      if (Text.isText(node)) {
        let customNode = node; // assert that node could be any type

        let component =
          customNode.text !== "" ? (
            <span key={index}>{customNode.text}</span>
          ) : (
            "\u00A0"
          );

        if (customNode.bold) {
          component = <b key={index}>{component}</b>;
        }

        if (customNode.italic) {
          component = <i key={index}>{component}</i>;
        }

        if (customNode.underline) {
          component = <u key={index}>{component}</u>;
        }

        if (customNode.strikethrough) {
          component = <del key={index}>{component}</del>;
        }

        return component;
      } else if ("children" in node) {
        const children = parseNodes(node.children, fontFam, hideTitle);
        return renderElement(
          node,
          children,
          node.id ? node.id : index,
          index,
          nodes,
          fontFam,
          hideTitle
        );
      }
    })
  );
};
