// test.ts

import path from 'path'
import fs from 'fs'
import { MockMethod, MockConfig } from 'vite-plugin-mock'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: 'vben'
        }
      }
    }
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben'
      }
    }
  },
  {
    url: '/api/text',
    method: 'get',
    rawResponse: async (_req: any, res: any) => {
      const imagePath = path.join(__dirname, 'demo.png')
      fs.readFile(imagePath, (err, data) => {
        if (err) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'text/plain')
          res.end('Error: Uable to read image file')
        } else {
          // 设置内容类型为 image/jpeg (或其他适当的类型)
          res.setHeader('Content-Type', 'image/jpeg')
          res.statusCode = 200
          res.end(data) // 将图片文件的二进制数据发送给客户端
        }
      })
    }
  }
] as MockMethod[]
