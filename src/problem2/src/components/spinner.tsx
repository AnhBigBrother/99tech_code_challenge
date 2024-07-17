/// <reference types="vite-plugin-svgr/client" />
import Loader from '../assets/loader-circle.svg?react';

type Props = {
  color: string;
};

export const Spinner = ({ color }: Props) => {
  return <Loader className={`w-6 h-6 text-${color} rounded-full animate-spin`} />;
};
