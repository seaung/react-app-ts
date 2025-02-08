import { Layout, Avatar, Dropdown } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import './index.less';

const { Header } = Layout;

interface HeaderProps {
    collapsed: boolean;
    onToggle: () => void;
}

const MainHeader: React.FC<HeaderProps> = ({ collapsed, onToggle }) => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: '个人中心',
        },
        {
            key: '2',
            label: '退出登录',
        },
    ];

    return (
        <Header style={{ padding: 0, background: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', paddingInline: 16 }}>
                {collapsed ? (
                    <MenuUnfoldOutlined onClick={onToggle} style={{ fontSize: '16px', cursor: 'pointer' }} />
                ) : (
                    <MenuFoldOutlined onClick={onToggle} style={{ fontSize: '16px', cursor: 'pointer' }} />
                )}
                <Dropdown menu={{ items }} placement="bottomRight">
                    <div className="user-info">
                        <Avatar icon={<UserOutlined />} />
                        <span>管理员</span>
                    </div>
                </Dropdown>
            </div>
        </Header>
    );
};

export default MainHeader;