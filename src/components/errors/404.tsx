import { Button, Result } from 'antd'
import { useNavigate } from "react-router-dom";

const NotFound404 = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/home")
    }
    return (
        <Result
            status="404"
            title="404 not found"
            subTitle="非常的抱歉，您要找的页面不存在"
            extra={<Button type="primary" onClick={goHome}>返回</Button> }
        />
    )
}

export default NotFound404;
