import React from 'react';

import { Container } from './styles';
import ProfilePanel from '../ProfilePanel';
import LoadingProfilePanel from '../Effect/LoadingProfilePanel';

const Shimmer: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container>
      {isLoading ? <LoadingProfilePanel /> : <ProfilePanel />}
    </Container>
  );
};

export default Shimmer;
