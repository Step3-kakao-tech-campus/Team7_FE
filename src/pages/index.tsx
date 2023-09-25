import axios from 'axios';
import Button from '@/components/Button';

export default function Home() {
  const getTest = () => {
    axios
      .get('/products')
      .then((res) => {
        const { data } = res;
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      Home
      <Button />
      <button onClick={() => getTest()}>msw</button>
    </div>
  );
}
