import { Heading1, Paragraph } from '@design/components/typography';
import { css } from '@design/stitches.config';

const mainBlock = css({
  maxWidth: '350px',
});

const Main: React.FC = (): JSX.Element => {
  return (
    <main className={mainBlock}>
      <Heading1>Leve felicidade para o mundo</Heading1>
      <Paragraph size="big">Visite orfanatos e mude o dia de muitas crianças</Paragraph>
    </main>
  );
};

export default Main;
