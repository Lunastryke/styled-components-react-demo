import React from 'react';
import { Wrapper, Avatar, Name, Bio, SocialURL } from '../styledcomp';

const AuthorBox = ({ isPink, isRound }) => {
  return (
    <Wrapper isPink={isPink}>
      <Avatar isRound={isRound} src='/img/cat.png' alt='' width='200' />
      <Name isPink={isPink}>Author name</Name>
      <Bio>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
        consectetur augue. Cras non fermentum massa. Duis at nulla ac nibh
        venenatis interdum. Pellentesque in rhoncus mi. Suspendisse tempor
        efficitur massa, sit amet dignissim sapien ultricies vel.
      </Bio>
      <SocialURL isPink={isPink} href='#socialURL'>
        Social URL
      </SocialURL>
    </Wrapper>
  );
};

export default AuthorBox;
