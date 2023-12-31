import styled from 'styled-components';
import { Input } from '../Input/Input';
import cartPNG from '../../assets/cart_shopping.svg';
import { MyContext } from '../../Context/Context';
import { useContext } from 'react';
import { UPDATE_SLIDE_BAR } from '../../Context/constantsContext';
import CartNumber from '../CartNumber/CartNumber';
// import cart from '../assets/cart-svgrepo-com.svg';
const HeaderStyle = styled.header`
  background: red;
  padding: 10px 10px;
  @media (min-width: 768px) {
    padding: 20px 20px;
  }
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
`;
const Image = styled.img`
  height: 40px;
  max-width: 240px;
  flex: 1;
  @media (min-width: 768px) {
    flex: 0.5;
  }
`;
const Cart = styled.img`
  flex: 0.1;
  mouse: pointer;
  height: 40px;
  &:hover {
    opacity: 0.5;
  }
  margin-left: 20px;
  max-width: 50px;
`;
const Box = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
export function Header() {
  const {
    dispatch,
    state: { checkoutSideBarIsOpen, checkoutOrders },
  } = useContext(MyContext);

  const onClick = () => {
    dispatch({ type: UPDATE_SLIDE_BAR, payload: !checkoutSideBarIsOpen });
  };
  return (
    <HeaderStyle>
      <Box>
        <Image
          src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
          alt="logo"
        />
        {/* <Input placeholder="Search.."></Input> */}
        <Cart onClick={onClick} src={cartPNG} alt="cart"></Cart>
        <CartNumber numItems={checkoutOrders?.length} />
      </Box>
    </HeaderStyle>
  );
}
