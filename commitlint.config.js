module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'merge', // 合并
        'fix', // 修复bug
        'delete', // 删除冗余文件
        'build', // 修改项目构建系统
        'docs', // 文档
        'style', // 格式化
        'refactor', // 重构
        'test', // 增加测试
        'chore', // 辅助工具改动
        'revert',
      ],
    ],
    'subject-case': [0, 'never'],
  },
}
