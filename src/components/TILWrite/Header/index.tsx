import { useRouter } from 'next/router';
import { useGetTil } from '@/api/hooks/til';
import Icon from '@/components/common/Icon';
import Logo from '@/components/common/Logo';
import { tilyLinks } from '@/constants/links';
import * as Styled from './style';

interface HeaderProps {
  handleOpenCommentAside: () => void;
}

const Header = (props: HeaderProps) => {
  const [isExtensionInstall, setIsExtensionInstall] = useState(false);

  const router = useRouter();

  const { tilDetail } = useGetTil({
    roadmapId: Number(router.query.roadmapId),
    stepId: Number(router.query.stepId),
    tilId: Number(router.query.tilId),
  });

  useEffect(() => {
    const isInstalled = document.documentElement.getAttribute('myextension');

    if (isInstalled) {
      setIsExtensionInstall(true);
    } else {
      setIsExtensionInstall(false);
    }
  }, []);

  return (
    <Styled.Root>
      <button onClick={() => router.push(tilyLinks.home())}>
        <Logo type="logo" imageSize={32} />
      </button>
      <Styled.Title>{tilDetail?.step.title}</Styled.Title>

      <Styled.Container>
          <button
            id="github_extenstion"
            onClick={() => {
              const detail = {
                isPersonal: tilDetail?.isPersonal,
                roadmapTitle: '조금만 더 화이팅',
                stepTitle: tilDetail?.step.title,
                content: TILContent,
              };
              const event = new CustomEvent('크롬익스텐션이벤트', { detail });
              document.dispatchEvent(event);
            }}>
            <Image src="/assets/icons/ic_github.svg" width={32} height={32} alt="깃허브 익스텐션" />
          </button>
        {!tilDetail?.isPersonal && (
          <Icon onClick={handleOpenCommentAside} iconName="ic_commentBlack" imageSize={32} ext="svg" alt="코멘트" />
        )}
      </Styled.Container>
    </Styled.Root>
  );
};

export default Header;
