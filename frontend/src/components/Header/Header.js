import React from 'react';
import { Layout, Menu, Button, Dropdown, Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, LogoutOutlined, FileTextOutlined } from '@ant-design/icons';
import { useAuth } from '../authentication/AuthContext.js';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export default function CustomHeader() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
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
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="logo">
       <Link to={`/`}>
       <h1 style={{ color: 'white', margin: 0 }}>Markt</h1>
       </Link> 
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" onClick={() => navigate('/')}>Home</Menu.Item>
        <Menu.Item key="2" onClick={() => navigate('/post')}>Post</Menu.Item>
        <Menu.Item key="3" onClick={() => navigate('/about')}>About</Menu.Item>
      </Menu>
      {isLoggedIn ? (
        <Dropdown menu={profileMenu} trigger={['hover']}>
          <Avatar icon={<UserOutlined />} />
        </Dropdown>
      ) : (
        <Button
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