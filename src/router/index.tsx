import { createHashRouter, RouteObject } from 'react-router-dom';
import MainLayout from '../layouts';
import LoginPage from '../pages/login';

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/home",
                element: <div>home</div>
            }
        ]
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "*",
        element: <div>404 Not Found</div>
    }
];

const router = createHashRouter(routes);

export default router;