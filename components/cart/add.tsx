"use client";

import type { RouterInputs } from "@/trpc/react";
import Button from "@mui/material/Button";
import { ShoppingCartSimpleIcon } from "@phosphor-icons/react/dist/csr/ShoppingCartSimple";

export default function AddToCart({ itemId, slug, variant }: RouterInputs["cart"]["insertItem"]["item"]) {
	const handleClick = () => {
		console.log("TODO: add to cart");
	};

	return (
		<Button
			size="small"
			variant="contained"
			color="primary"
			fullWidth
			sx={{ textTransform: "none", fontWeight: 500, py: 1.5, px: 4 }}
			startIcon={<ShoppingCartSimpleIcon weight="bold" />}
			onClick={handleClick}
		>
			Add to Cart
		</Button>
	);
}
