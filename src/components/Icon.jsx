import React from "react";
import { Icon } from "@iconify/react";

// 使用图标组件
const IconExample = () => {
  return (
    <div>
      {/* 直接使用图标名称（格式：集合名-图标名） */}
      <Icon icon="mdi:home" />

      {/* 自定义样式 */}
      <Icon icon="mdi:account" style={{ fontSize: "24px", color: "blue" }} />

      {/* 添加CSS类 */}
      <Icon icon="fa:user" className="custom-icon" />
    </div>
  );
};

export default IconExample;
