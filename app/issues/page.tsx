import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const IssuesPage = () => {
	return (
		<div>
			<Button>
				<Link href="/issues/new">New Issue</Link>
			</Button>
		</div>
	);
};

export default IssuesPage;
