import { StatusPage, StatusPageConfig } from "react-healthy";
import AdminHeader from "@/components/AdminHeader";
const statusPageConfig = {
	apis: [
		{
			name: "User API",
			endpoint: "/api/users",
		},
		{
			name: "Product API",
			endpoint: "/api/products",
		},
	],
};

export default function ServerStatus() {
	return (
		<>
			<AdminHeader />
			<div className="status">
				<StatusPage config={statusPageConfig} />
			</div>
		</>
	);
}
