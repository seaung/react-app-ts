import { Layout } from 'antd';
import './index.less';

const { Footer } = Layout;

const MainFooter: React.FC = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>
            ©2024 Created by Your Company
        </Footer>
    );
};

export default MainFooter;