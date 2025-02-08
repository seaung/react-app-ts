import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';
import './index.less';

const BadRequest = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/home')
    }
    return (
        <Result
            status='403'
            title='坏的请求'
            subTitle='非常抱歉您请求的方式不合法'
            extra={<Button type='primary' onClick={goHome}>返回</Button>}
        />
    )
}

export default BadRequest;
