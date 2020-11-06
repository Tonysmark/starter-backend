# Restful api

```json
// 删除成功后返回字段
{
    "code": 200,
    "message":"success"
}

// 返回实体
{
  "code": 200,
  "data": {
    "message": "success",
    "entity": {
      "id": 1,
      "name": "XXX",
      "code": "XXX"
    }
  }
}
// 返回列表
{
  "code": 200,
  "data": {
    "message": "success",
    "list": []
  }
}


// 返回带分页的数据
{
  "code": 200,
  "data": {
    "page": 1,
    "pages": 3,
    "per_page": 10,
    "has_next": true,
    "has_prev": false,
    "total": 27,
    "list": [
      {
        "id": 1,
        "name": "XXX",
        "code": "H001"
      },
      {
        "id": 2,
        "name": "XXX",
        "code": "H001"
      }
    ],
  }
}

```
