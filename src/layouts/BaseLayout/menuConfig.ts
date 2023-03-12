
/** 菜单项 */
export  interface MenuConfig{
    path: string;
    title:string;
    children?:MenuConfig[];
}

/** 侧边栏菜单配置 */
export const sidebarMenuConfig:MenuConfig[] = [
    {
        title:'主页',
        path:'/',
        children:[
            {
                title:'列表',
                path:'/list',
            },
        ]
    },
    {
        title:'备忘录',
        path:'/todo',
    },
];

