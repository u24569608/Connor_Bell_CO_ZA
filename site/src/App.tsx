import { type FC } from 'react';
import { HeadingLevel, Heading } from 'baseui/heading';

export const App: FC = () => {
  return (
    <main>
      <HeadingLevel>
        <Heading style={{
          marginLeft: '32px', 
          fontWeight: 500, 
          fontStyle: 'italic'
        }}>
          Coming Soon
        </Heading>
      </HeadingLevel>
    </main>
  );
};