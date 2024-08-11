import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
  children: ReactNode,
  container?: Element | DocumentFragment,
  key?: null | string
}

export const Portal = (props: IPortalProps) => {
	const {
		children,
		container = document.body,
		key
	} = props;

	return createPortal(children, container, key);
};