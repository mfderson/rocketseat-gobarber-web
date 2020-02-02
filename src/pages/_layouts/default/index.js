import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

/*
 * childre é todo componente que é passado dentro da tag Wrapper, por exemplo
 * <Wrapper>
 *  <componente_quaquer></componente_quaquer>
 * </Wrapper>
 */
export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
