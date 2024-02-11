import React, { useState, useEffect } from 'react';
import Background from '../background';
import Menu from '../menu';
import { Container } from './styles.js';

const Layout = ({ children, onLayout }) => {
  const [backgroundPadding, setBackgroundPadding] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const layout = {openMenu, setOpenMenu, backgroundPadding, setBackgroundPadding};

  useEffect(() => {
    if (onLayout) {
      onLayout(layout)
    };
  },[openMenu, setOpenMenu, backgroundPadding, setBackgroundPadding] )
  return (
    <Container>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Background open={openMenu} padding={backgroundPadding}>
        {children}
      </Background>
    </Container>
  );
};

export default Layout;
