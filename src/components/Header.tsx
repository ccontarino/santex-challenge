import styled from 'styled-components';
import { Input } from './Input/Input';
// import cart from '../assets/cart-svgrepo-com.svg';
export function Header() {
  const Header = styled.header`
    background: red;
    padding: 10px 10px;
    @media (min-width: 768px) {
      padding: 20px 20px;
    }
    width: 100%;
    box-sizing: border-box;
  `;
  const Image = styled.img`
    height: 40px;
    flex: 1;
    @media (min-width: 768px) {
      flex: 0.5;
    }
  `;
  const Cart = styled.img`
    flex: 0.8;
    height: 40px;
  `;
  const Box = styled.div`
    display: flex;
    width: 100%;
  `;

  return (
    <Header>
      <Box>
        <Image
          src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
          alt="logo"
        />
        <Input placeholder="Search.."></Input>
        {/* <Cart src={cart} /> */}
      </Box>
      {/* <div>$ 0</div> */}
    </Header>
  );
}
