import Comment from '@/components/TILWrite/Comments/Comment';
import Header from '@/components/TILWrite/Comments/Header';
import TextAreaSection from '@/components/TILWrite/Comments/TextAreaSection';
import * as Styled from './style';

interface CommentsProps {
  handleCloseCommentAside: () => void;
}

const Comments = (props: CommentsProps) => {
  const { handleCloseCommentAside } = props;

  return (
    <Styled.Root>
      <Styled.HeaderContainer>
        <Header handleCloseCommentAside={handleCloseCommentAside} />
      </Styled.HeaderContainer>

      <Styled.CommentContainer>
        {Array.from({ length: 30 }).map((_, index) => {
          return <Comment key={index} />;
        })}
      </Styled.CommentContainer>

      <TextAreaSection />
    </Styled.Root>
  );
};

export default Comments;
