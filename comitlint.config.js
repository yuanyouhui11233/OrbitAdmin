export default {
  // 继承的规则
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新功能
        "fix", // Bug 修复
        "docs", // 文档变更
        "style", // 代码格式/样式调整（不影响逻辑）
        "refactor", // 代码重构（既不是修复bug也不是新功能）
        "perf", // 性能优化
        "test", // 测试相关
        "build", // 构建系统/依赖变更
        "ci", // CI 配置变更
        "chore", // 其他杂项（非src或test的修改）
        "revert", // 回滚提交
        "wip", // 开发中临时提交
        "types", // 类型定义文件修改
        "release", // 发布版本
      ],
    ],
    // 提交主题（subject）格式限制
    "subject-case": [2, "always", "lower-case"], // 小写开头
  },
};

/**
 * 1.简单提交
 * feat: add user authentication module
 *
 * 2.带范围的提交
 * fix(api): handle null pointer in user endpoint
 *
 * 3.多行提交
 * refactor: improve data validation logic
 * - Rewrite validation middleware
 * - Add new error handling cases
 * - Update related test cases
 *
 */
