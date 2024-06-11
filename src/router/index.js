import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@/views/layout/index.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: '首页'
                }
            },
            {
                path: '/mine',
                name: 'mine',
                component: () => import('@/views/mine/index.vue'),
                meta: {
                    title: '我的'
                }
            }

        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/login/register.vue'),
        meta: {
            title: '注册账号'
        }
    },
    {
        path: '/revise',
        name: 'revise',
        component: () => import('@/views/login/revise.vue'),
        meta: {
            title: '修改密码'
        }
    },
    {
        path: '/merchant/revise',
        name: 'merchantRevise',
        component: () => import('@/views/merchant/revise.vue'),
        meta: {
            title: '修改个人信息'
        }
    },
    {
        path: '/examineGuide',
        name: 'examineGuide',
        component: () => import('@/views/merchant/examineGuide.vue'),
        meta: {
            title: '导游申请列表'
        }
    },
    {
        path: '/project',
        name: 'project',
        component: () => import('@/views/merchant/project.vue'),
        meta: {
            title: '我的项目'
        }
    },
    {
        path: '/addproject',
        name: 'addProject',
        component: () => import('@/views/merchant/addProject.vue'),
        meta: {
            title: '新增项目'
        }
    },
    {
        path: '/myguide',
        name: 'myguide',
        component: () => import('@/views/merchant/myguide.vue'),
        meta: {
            title: '我的导游'
        }
    },
    {
        path: '/guidehis',
        name: 'guidehis',
        component: () => import('@/views/merchant/guidehis.vue'),
        meta: {
            title: '导游审核历史'
        }
    },
    {
        path: '/settlement',
        name: 'settlement',
        component: () => import('@/views/merchant/settlement.vue'),
        meta: {
            title: '立即结算'
        }
    },
    {
        path: '/playexamine',
        name: 'playexamine',
        component: () => import('@/views/merchant/playExamine.vue'),
        meta: {
            title: '游玩审核'
        }
    },
    {
        path: '/playhis',
        name: 'playhis',
        component: () => import('@/views/merchant/playHis.vue'),
        meta: {
            title: '游玩审核历史'
        }
    },
    {
        path: '/jiesuanhis',
        name: 'jiesuanhis',
        component: () => import('@/views/merchant/jiesuanHis.vue'),
        meta: {
            title: '结算历史'
        }
    },
    {
        path: '/order',
        name: 'order',
        component: () => import('@/views/mine/order.vue'),
        meta: {
            title: '游客订单'
        }
    },
    {
        path: '/info',
        name: 'info',
        component: () => import('@/views/mine/info.vue'),
        meta: {
            title: '带客详情'
        }
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
router.beforeEach((to, from, next) =>{
    document.title = to.meta.title || '默认标题'
    next()
})
export default router