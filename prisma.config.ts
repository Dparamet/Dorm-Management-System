import { defineConfig } from '@prisma/config' // 1. ตรวจสอบชื่อแพ็กเกจ
import 'dotenv/config'

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL, // 2. ต้องอยู่ใน datasource และ u ต้องเป็นตัวพิมพ์เล็ก
  },
})