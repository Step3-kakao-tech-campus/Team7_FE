import { useRouter } from 'next/router';
import { useGetTil } from '@/api/hooks/til';
import Comment from '@/components/TILWrite/Comments/Comment';
import Header from '@/components/TILWrite/Comments/Header';
import TextAreaSection from '@/components/TILWrite/Comments/TextAreaSection';
import * as Styled from './style';

interface CommentsProps {
  handleCloseCommentAside: () => void;
}

const Comments = (props: CommentsProps) => {
  const { handleCloseCommentAside } = props;

  const { query } = useRouter();

  const { tilDetail } = useGetTil({
    roadmapId: query.roadmapId as string,
    stepId: query.stepId as string,
    tilId: query.tilId as string,
  });

  return (
    <Styled.Root>
      <Styled.HeaderContainer>
        <Header handleCloseCommentAside={handleCloseCommentAside} />
      </Styled.HeaderContainer>

      <Styled.CommentContainer>
        {tilDetail?.comments.map((comment) => {
          return <Comment key={comment.id} {...comment} />;
        })}
      </Styled.CommentContainer>

      <TextAreaSection />
    </Styled.Root>
  );
};

export default Comments;
