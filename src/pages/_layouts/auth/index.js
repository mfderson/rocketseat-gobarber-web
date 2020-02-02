import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

/*
 * children é todo componente que é passado dentro da tag Wrapper, por exemplo
 * <Wrapper>
 *  <componente_quaquer></componente_quaquer>
 * </Wrapper>
 */
export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
