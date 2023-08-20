import { createHashRouter, RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <div>Root</div>,
        children: [
            {
                path: "/home",
                element: <div>home</div>
            }
        ]
    },
    {
        path: "/login",
        element: <div>Login</div>
    },
    {
        path: "*",
        element: <div>not found</div>
    }
];

const router = createHashRouter(routes);

export default router;