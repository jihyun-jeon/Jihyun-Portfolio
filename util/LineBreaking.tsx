export const OneLineBreaking = (title: string) => {
  return title.replace("\n", "<br/>");
};

export const SeveralLineBreaking = (title: string) => {
  return title.split("\n").reduce((acc, cur) => {
    return `<p>${acc}</p>` + `<p>${cur}</p>`;
  });
};
