import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import Footer from '@/components/TILWrite/Footer';
import Header from '@/components/TILWrite/Header';
import RoadMap from '@/components/TILWrite/RoadMap';

const Editor = dynamic(() => import('@/components/TILWrite/Ckeditor'), { ssr: false });

const TILWrite = () => {
  return (
    <>
      <Header />
      <PanelGroup style={{ height: 'calc(100% - 8rem)' }} direction="horizontal">
        <Panel style={{ overflowY: 'scroll', height: 'calc(100% - 30px)' }} defaultSize={70}>
          <Editor />
        </Panel>
        <ResizeHandle />
        <Panel style={{ overflowY: 'scroll' }} defaultSize={30} maxSize={30} minSize={0}>
          <RoadMap />
        </Panel>
      </PanelGroup>
      <Footer />
    </>
  );
};

export default TILWrite;

const ResizeHandle = styled(PanelResizeHandle)`
  width: 50px;
  height: 100%;
  background-image: url('/assets/icons/ic_spring.svg');
`;
