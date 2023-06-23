import styled from 'styled-components';
import { Input } from './Input/Input';
// import cart from '../assets/cart-svgrepo-com.svg';
export function Header() {
  const Header = styled.header`
    background: red;
    padding: 20px 20px;
    box-sizing: border-box;
  `;
  const Image = styled.img`
    height: 50px;
    flex: 0.5;
  `;
  const Cart = styled.img`
    flex: 0.8;
    height: 40px;
    
    
  `;
  const Box = styled.div`
    display: flex;
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
