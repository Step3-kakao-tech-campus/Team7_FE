import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import Footer from '@/components/TILWrite/Footer';
import Header from '@/components/TILWrite/Header';

const Editor = dynamic(() => import('@/components/TILWrite/Editor'), { ssr: false });

const TilWrite = () => {
  return (
    <>
      <Header />
      <PanelGroup style={{ height: 'calc(100% - 8rem)' }} direction="horizontal">
        <Panel style={{ overflow: 'scroll', height: 'calc(100% - 30px)' }} defaultSize={70}>
          <Editor />
        </Panel>
        <ResizeHandle />
        <Panel defaultSize={30} maxSize={30} minSize={0}>
          <div>dada</div>
        </Panel>
      </PanelGroup>
      <Footer />
    </>
  );
};

export default TilWrite;

const ResizeHandle = styled(PanelResizeHandle)`
  width: 50px;
  height: 100%;
  background-image: url('/assets/icons/ic_spring.svg');
`;
