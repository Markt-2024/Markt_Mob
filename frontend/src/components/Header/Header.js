import React from 'react';
import { Layout, Menu, Button, Dropdown, Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, LogoutOutlined, FileTextOutlined } from '@ant-design/icons';
import { useAuth } from '../authentication/AuthContext.js';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const { Header } = Layout;

export default function CustomHeader() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const profileMenu = {
    items: [
      {
        key: 'posts',
        icon: <FileTextOutlined />,
        label: 'My Posts',
        onClick: () => navigate('/my-posts'),
      },
      {
        key: 'logout',
        icon: <LogoutOutlined />,
        label: 'Logout',
        onClick: handleLogout,
      },
    ],
  };

  return (
    <Header className="custom-header">
      <div className="logo">
        <Link to={`/`}>
          <img  src="https://i.ibb.co/h1T1hzk/logo-color.png" alt="Markt Logo" />
        </Link> 
      </div>
      <Menu className="menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" onClick={() => navigate('/')}>Home</Menu.Item>
        <Menu.Item key="2" onClick={() => navigate('/post')}>Post</Menu.Item>
        <Menu.Item key="3" onClick={() => navigate('/about')}>About</Menu.Item>
      </Menu>
      {isLoggedIn ? (
        <Dropdown menu={profileMenu} trigger={['hover']}>
          <Avatar icon={<UserOutlined />} />
        </Dropdown>
      ) : (
        <Button className="login-button"
          type="primary"
          icon={<UserOutlined />}
          onClick={() => navigate('/login')}
        >
          Login
        </Button>
      )}
    </Header>
  );
}
