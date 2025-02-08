import { useState } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import MainSider from './components/sider';
import MainHeader from './components/header';
import MainFooter from './components/footer';

const { Content } = Layout;

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <MainSider collapsed={collapsed} />
            <Layout>
                <MainHeader collapsed={collapsed} onToggle={toggleCollapsed} />
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                    <Outlet />
                </Content>
                <MainFooter />
            </Layout>
        </Layout>
    );
};

export default MainLayout;

