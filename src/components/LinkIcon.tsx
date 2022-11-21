import "twin.macro";

const LinkIcon = ({ txt, url }: { txt: string; url: string }) => {
  return (
    <a href={url} tw="flex mr-5" target="_blank">
      {txt === "git" ? (
        <img
          tw="w-6 h-6 align-[-0.15rem] rounded-[3px] mr-1"
          src="https://www.notion.so/image/https%3A%2F%2Fwww.notion.so%2Fimages%2Fexternal_integrations%2Fgithub-icon.png?width=200&amp;userId=d5e9cf37-3b9f-432c-b5db-dfa893d368d6&amp;cache=v2"
        />
      ) : (
        <img
          tw="w-6 h-6 align-[-0.15rem] rounded-[3px] mr-1"
          src={`${import.meta.env.BASE_URL}imgs/note.png`}
        />
      )}

      <span tw="font-semibold">{txt}</span>
    </a>
  );
};
export default LinkIcon;
