import { type FC } from 'react';
import { HeadingLevel, Heading } from 'baseui/heading';
import './App.css';

export const App: FC = () => {
  return (
    <main>
      <HeadingLevel>
        <Heading style={{ 
          margin: 0, 
          fontWeight: 500, 
          fontStyle: 'italic',
          }}>
          Coming Soon
        </Heading>
      </HeadingLevel>
    </main>
  );
};
