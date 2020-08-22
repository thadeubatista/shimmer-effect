import React from 'react';

import { Container } from './styles';
import { Panel } from '../Panel';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover" />
        <img
          src="https://avatars2.githubusercontent.com/u/10009422?s=400&u=678167fb3d6b1f6e314f92d3ce9df97c2f32ef22&v=4"
          alt="Avatar"
          className="profile-picture"
        />
        <div className="user-detail">
          <h1>Thadeu Batista</h1>
          <h2>Full stack Developer</h2>
        </div>

        <div className="separator" />

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
