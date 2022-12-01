import "twin.macro";
import Image from "next/image";
import React from "react";

const LinkIcon = ({ txt, url }: { txt: string; url: string }) => {
  return (
    <a href={url} tw="flex mr-5" target="_blank" rel="noreferrer">
      {txt === "git" ? (
        <Image
          tw="w-6 h-6 align-[-0.15rem] rounded-[3px] mr-1"
          src={"/imgs/github-icon.png"}
          alt="gitIcon"
          width={24}
          height={24}
        />
      ) : (
        <Image
          tw="w-6 h-6 align-[-0.15rem] rounded-[3px] mr-1"
          src={`/imgs/note.png`}
          alt="noteIcon"
          width={24}
          height={24}
        />
      )}

      <span tw="font-semibold">{txt}</span>
    </a>
  );
};
export default LinkIcon;
