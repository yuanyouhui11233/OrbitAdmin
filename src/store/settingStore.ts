import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { ThemeColorPresets, ThemeMode, ThemeLayout, StorageEnum } from "#/enum";

type SettingType = {
	themeColorPresets: ThemeColorPresets;
	themeMode: ThemeMode;
	themeLayout: ThemeLayout;
	themeStretch: boolean;
	breadCrumb: boolean;
	multiTab: boolean;
	darkSidebar: boolean;
};
type SettingStore = {
	settings: SettingType;
	actions: {
		setSettings: (settings: SettingType) => void;
		clearSettings: () => void;
	};
};

const useSettingStore = create<SettingStore>()(
	persist(
		(set) => ({
			settings: {
				themeColorPresets: ThemeColorPresets.Default,
				themeMode: ThemeMode.Light,
				themeLayout: ThemeLayout.Horizontal,
				themeStretch: false,
				breadCrumb: false,
				multiTab: false,
				darkSidebar: false,
			},
			actions: {
				setSettings: (settings) => {
					set({ settings });
				},
				clearSettings: () => {
					useSettingStore.persist.clearStorage();
				},
			},
		}),
		{
			name: StorageEnum.Settings, // 唯一标识
			storage: createJSONStorage(() => localStorage), // 存储在localStorage中
			partialize: (state) => ({
				[StorageEnum.Settings]: state[StorageEnum.Settings], // 只存储settings
			}),
		},
	),
);
// 导出当前设置
export const useSettings = () => useSettingStore((state) => state.settings);
// 导出操作方法
export const useSettingsActions = () =>
	useSettingStore((state) => state.actions);
