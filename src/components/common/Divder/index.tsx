import * as Styled from './style';

export interface DividerProps {
  percent?: number;
  direction?: 'row' | 'col';
  className?: string;
}

const Divider = (props: DividerProps) => {
  const { percent = 100, direction = 'row', className, ...rest } = props;
  return <Styled.Divider css={Styled.getDirectionStyles({ percent, direction })} className={className} {...rest} />;
};

export default Divider;
