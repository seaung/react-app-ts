import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Sider } = Layout;

interface SiderProps {
    collapsed: boolean;
}

const MainSider: React.FC<SiderProps> = ({ collapsed }) => {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" style={{height: "32px"}}/>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: '菜单项 1',
                    },
                    {
                        key: '2',
                        icon: <UserOutlined />,
                        label: '菜单项 2',
                    },
                    {
                        key: '3',
                        icon: <UserOutlined />,
                        label: '菜单项 3',
                    }
                ]}
            />
        </Sider>
    );
};

export default MainSider;