import {useNavigate} from "react-router-dom";
import {Button, Result} from "antd";
import './index.less';

const ServerInterval = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/home");
    }
    return (
        <Result
            status='500'
            title='服务端错误'
            subTitle="抱歉，服务器出现异常!"
            extra={<Button type="primary" onClick={goHome}>返回</Button>}/>
    );
}

export default ServerInterval;