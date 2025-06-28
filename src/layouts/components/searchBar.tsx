import { IconButton, SvgIcon } from "@/components/icon/index";
import { useBoolean } from "react-use";
import { Modal, Empty, Input, type InputRef, Tag } from "antd";
import { useRef, useState } from "react";
export default function SearchBar() {
	const [search, toggle] = useBoolean(false);
	const inputRef = useRef<InputRef>(null);
	const [searchQuery, setSearchQuery] = useState("");
	const handleOpen = () => {
		toggle(true);
	};
	const handleCancel = () => {
		toggle(false);
	};
	return (
		<>
			<div className="flex items-center">
				<IconButton
					className="h-8 rounded-xl bg-hover py-2 text-xs font-bold"
					onClick={handleOpen}
				>
					<div className="flex items-center">
						<SvgIcon icon="ic-search" size="20" />
						<span>Ctrl K</span>
					</div>
				</IconButton>
			</div>

			<Modal
				open={search}
				closeIcon={false}
				onCancel={handleCancel}
				styles={{
					body: {
						height: "400px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					},
				}}
				title={
					<Input
						ref={inputRef}
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						placeholder="Search..."
						variant="borderless"
						autoFocus
						prefix={<SvgIcon icon="ic-search" size="20" />}
						suffix={
							<IconButton
								className="h-6 rounded-md bg-hover text-xs font-bold"
								onClick={handleCancel}
							>
								Esc
							</IconButton>
						}
					/>
				}
				footer={
					<div className="flex flex-wrap justify-center">
						<div className="flex mr-4">
							<Tag color="cyan">↑</Tag>
							<Tag color="cyan">↓</Tag>
							<span>to navigate</span>
						</div>
						<div className="flex mr-4">
							<Tag color="cyan">↵</Tag>
							<span>to select</span>
						</div>
						<div className="flex mr-4">
							<Tag color="cyan">ESC</Tag>
							<span>to close</span>
						</div>
					</div>
				}
			>
				<Empty />
			</Modal>
		</>
	);
}
