import React from "react";
import { Icon } from "@iconify/react";
// 导入特定图标
import homeIcon from "@iconify-icons/mdi/home";
import userIcon from "@iconify-icons/mdi/account";

const OfflineIconExample = () => {
  return (
    <div>
      <Icon icon={homeIcon} />
      <Icon icon={userIcon} />
    </div>
  );
};

export default OfflineIconExample;
