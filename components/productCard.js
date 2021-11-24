import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardSubtitle,
  CardTitle,
} from "reactstrap";
import { updateCart } from "../actions";

const ProductCard = ({ productData }) => {
  const dispatch = useDispatch();
  const _handleAddToCart = () => {
    dispatch(updateCart(productData));
  };
  return (
    <Card>
      <div>
        <Image
          src={productData?.image}
          alt={productData?.title}
          width={500}
          height={500}
        />
      </div>
      <CardBody>
        <Link href={`/${productData?.id}`}>
          <a>
            <CardTitle>{productData?.title}</CardTitle>
          </a>
        </Link>
        <CardSubtitle>${productData?.price}</CardSubtitle>
      </CardBody>
      <CardFooter>
        <Button onClick={_handleAddToCart} block color="primary">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
