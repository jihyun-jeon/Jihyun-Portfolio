import { useRouter } from "next/router";

export const useCardRoute = () => {
  const navigate = useRouter();

  const onClickProject = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = (e.currentTarget as HTMLDivElement).dataset.value;

    if (value) {
      navigate.push(value);
    }
  };

  return onClickProject;
};
