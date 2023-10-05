import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('@/components/TILWrite/Editor'), { ssr: false });

const TilWrite = () => {
  return <Editor />;
};

export default TilWrite;
