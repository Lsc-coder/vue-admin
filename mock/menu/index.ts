import Mock from "mockjs";
const result = {
    "code": 200,
    "message": "success",
    "data": [
        {
            "id": 2,
            "pid": 0,
            "name": "首页",
            "icon": "Unlock",
            "perms": null,
            "component": "/role",
            "menuType": 0,
            "sort": 0,
            "isShow": 0,
            "isDelete": 0,
            "createTime": "2023-12-07T09:04:02.632Z",
            "updateTime": "2023-12-12T09:13:22.000Z",
            "label": "权限管理",
            "value": 2,
            "children":[],
            "path":'/home'
        },
        {
            "id": 1,
            "pid": 0,
            "name": "系统管理",
            "icon": "Unlock",
            "perms": null,
            "component": "/system",
            "menuType": 0,
            "sort": 0,
            "isShow": 0,
            "isDelete": 0,
            "createTime": "2023-12-07T09:04:02.632Z",
            "updateTime": "2023-12-12T09:13:22.000Z",
            "path":'/system',
            "children": [
                {
                    "id": 3,
                    "pid": 2,
                    "name": "菜单管理",
                    "icon": "",
                    "perms": null,
                    "component": "/sys/menu",
                    "menuType": 1,
                    "sort": 1,
                    "isShow": 0,
                    "isDelete": 0,
                    "createTime": "2023-12-07T10:49:24.530Z",
                    "updateTime": "2023-12-12T14:43:29.000Z",
                    "label": "菜单管理",
                    "value": 3,
                    "path":'/menu'
                },
                {
                    "id": 4,
                    "pid": 2,
                    "name": "权限管理",
                    "icon": "",
                    "perms": null,
                    "component": "/role/menu",
                    "menuType": 1,
                    "sort": 0,
                    "isShow": 0,
                    "isDelete": 0,
                    "createTime": "2023-12-07T10:59:11.624Z",
                    "updateTime": "2023-12-07T16:11:58.000Z",
                    "label": "权限管理",
                    "value": 4,
                    "path":'/permission'
                },
                {
                    "id": 5,
                    "pid": 2,
                    "name": "角色管理",
                    "icon": "",
                    "perms": null,
                    "component": "/role/role",
                    "menuType": 1,
                    "sort": 1,
                    "isShow": 0,
                    "isDelete": 0,
                    "createTime": "2023-12-07T15:15:29.838Z",
                    "updateTime": "2023-12-12T07:35:39.000Z",
                    "children": [],
                    "label": "角色管理",
                    "value": 5,
                    "path":'/user'
                }
            ],
            "label": "系统管理",
            "value": 2
        },
    ]
}
export default [
    {
        url: '/api/menu/getList',
        type: 'get',
        response: () => {
          return Mock.mock(result)     
        },
      },  
]