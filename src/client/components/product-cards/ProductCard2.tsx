import HoverBox from "@client/components/HoverBox";
import LazyImage from "@client/components/LazyImage";
import { H4 } from "@client/components/Typography";
import Link from "next/link";
import React from "react";

export interface ProductCard2Props {
  // id: number
  // discount: string
  // imgUrl: string
  // title: string
  // price: number
  // productUrl: string
  price: number;
  title: string;
  imgUrl: string;
  discount: number;
  id: number;
  rating: number;
}

const ProductCard2: React.FC<ProductCard2Props> = (props) => {
	const { imgUrl, title, price, id } = props;
	return (
		<Link href={`/product/${id}`}>
			<a>
				<HoverBox borderRadius="8px" mb={1}>
					<LazyImage
						src={imgUrl}
						width={0}
						height={0}
						layout="responsive"
						alt={title}
					/>
				</HoverBox>
				<H4 fontWeight="600" fontSize="14px" mb={0.5}>
					{title}
				</H4>
				<H4 fontWeight="600" fontSize="14px" color="primary.main">
          ${Math.ceil(price).toLocaleString()}
				</H4>
			</a>
		</Link>
	);
};

export default ProductCard2;
