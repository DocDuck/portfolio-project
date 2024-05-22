import { Loader } from "shared/ui/loader";
import s from "./pageLoader.module.scss";

export const PageLoader: React.FC = () => 
	<div className={s.pageLoader}>
		<Loader />
	</div>;

PageLoader.displayName = "PageLoader";