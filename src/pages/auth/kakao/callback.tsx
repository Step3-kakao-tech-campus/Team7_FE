import { useGetKakaoLogin } from '@/api/hooks/auth';
import useQueryParam from '@/hooks/useQueryParam';

const KakaoLoginPage = () => {
  const code = useQueryParam('code');
  const { getKakaoLoginAsync, isLoading } = useGetKakaoLogin();

  // async function KakaoLogin() {
  //   const data = await getKakaoLoginAsync({ code: code });

  //   console.log(data);
  // }

  // useEffect(() => {
  //   if (code) {
  //     KakaoLogin();
  //   }
  // }, [code]);

  const apiRequest = async () => {
    const data = await getKakaoLoginAsync({ code: code });
    console.log(data);
  };

  return (
    <>
      <button onClick={apiRequest}>버튼</button>
    </>
  );
};

export default KakaoLoginPage;
