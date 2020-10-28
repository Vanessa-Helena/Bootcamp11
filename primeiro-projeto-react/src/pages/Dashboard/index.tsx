import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styled';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>explore Repositórios no Guithub</Title>

      <Form action="">
        <input placeholder="Digite o nome do repoitório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/58368539?s=460&u=c8307a31c2880c022f3343df37257ad871620f47&v=4"
            alt="Vanessa Helena"
          />
          <div>
            <strong>Central/Biplan</strong>
            <p>Easy peasy highly React</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/58368539?s=460&u=c8307a31c2880c022f3343df37257ad871620f47&v=4"
            alt="Vanessa Helena"
          />
          <div>
            <strong>Central/Biplan</strong>
            <p>Easy peasy highly React</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/58368539?s=460&u=c8307a31c2880c022f3343df37257ad871620f47&v=4"
            alt="Vanessa Helena"
          />
          <div>
            <strong>Central/Biplan</strong>
            <p>Easy peasy highly React</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
