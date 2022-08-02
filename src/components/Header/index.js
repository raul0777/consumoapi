import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav } from './styled';

export default function Header() {
  const clicado = useSelector((state) => state.example.clicado);
  return (
    <Nav>
      <Link to="">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt sizer={24} />
      </Link>
      <Link to="/outros">
        <FaSignInAlt size={24} />
      </Link>
      {clicado ? 'Clicado' : 'Não clicado'}
    </Nav>
  );
}
