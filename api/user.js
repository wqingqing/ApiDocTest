/**
 * @api {get} /user/:id 读取用户信息
 * @apiVersion 0.3.0
 * @apiName GetUser
 * @apiGroup User
 * @apiPermission admin
 *
 * @apiDescription 读取用户信息
 *
 * @apiParam {Number} id 用户ID
 *
 * @apiExample 成功回执
 *
 * {
    "code": "ok",
    "msg": "",
    "data":
        {
            "id": 1,
            "registered": "2016-10-20 15:46:59",
            "name": "张三",
            "nicknames": "张张",
            "age": "20",
            "image": "http://www.baidu.com",
            "optionsName": "操作名称",
            "optionsValue": "操作值"
        }

}
 *
 * @apiExample 错误回执
 *     {
 *     "code": "error",
 *     "msg": "错误信息"
 *     }
 *
 * @apiSuccess {Number}   id            用户ID
 * @apiSuccess {Date}     registered    注册时间
 * @apiSuccess {Date}     name          用户名
 * @apiSuccess {String[]} nicknames     昵称
 * @apiSuccess {Number}   age   年龄
 * @apiSuccess {String}   image 头像
 * @apiSuccess {String}   optionsName  操作名称
 * @apiSuccess {String}   optionsValue 操作值
 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 * @apiError CreateUserError   The <code>id</code> of the User was not found.
 *
 */
function getUser() { return; }

/**
 * @api {post} /user 新建一个用户
 * @apiVersion 0.0.1
 * @apiName PostUser
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription 新建一个用户
 *
 * @apiParam {String} name 用户名
 *
 * @apiSuccess {Number} id  用户ID.
 *
 * @apiUse CreateUserError
 */
function postUser() { return; }

/**
 * @api {put} /user/:id 修改用户信息
 * @apiVersion 0.0.1
 * @apiName PutUser
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription 修改用户信息
 *
 * @apiParam {String} name 用户名
 *
 * @apiUse CreateUserError
 */
function putUser() { return; }
