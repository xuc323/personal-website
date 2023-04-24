import { GetStaticPaths, GetStaticProps } from "next";

export default function experience() {
  return;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: false };
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
