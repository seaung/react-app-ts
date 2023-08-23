import {useNavigate} from "react-router-dom";
import {Button, Result} from "antd";

const Forbidden = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/home');
    }
    
    return (
        <Result
            status='403'
            title="未授权反问"
            subTitle="抱歉您无法访问！"
            extra={<Button onClick={goHome} type="primary">返回</Button>}/>
    );
}

export default Forbidden;