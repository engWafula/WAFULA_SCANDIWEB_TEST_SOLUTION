import { Link } from "react-router-dom";
import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 4.2rem;
  right: 5px;
  width: 23vw;
  background-color: #fff;
  z-index: 7;
  padding: 8px 8px 8px 8px;
  

  @media only screen and (max-width:480px){
    padding:50px;
    width:300px;
    height:700px;
    right:18px;
    top:50px;
  }
`;
export const FooterWrapper=styled.div`
position: sticky;
overflow: hidden;
bottom: 1px;
background-color: #fff;

@media only screen and (max-width:480px){
display:flex;
flex-direction: column;
}
`

export const ModalFooterContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1vw;
  @media only screen and (max-width:480px){
     gap:10px;
     margin-bottom:80px;
    }
`;

export const CartName = styled.span`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: right;
`;

export const ItemContainer = styled.div`
  width: 20vw;
  display: grid;
  min-height: 137px;
  grid-template-areas:
    "name actions img"
    "attrs actions img ";
  margin: 20px 0;
  &:hover #modal-item-name {
    text-decoration: underline;
  }
  
`;

export const ButtonCommon = styled.button`
  width: 9vw;
  height: 43px;
  font-size: 14px;
  line-height: 16.8px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 2vw;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  decoration: none;
  transition: all 0.5s ease;
  &:active {
    transform: scale(0.95, 0.95);
  }
`;

export const ViewBagButton = styled(ButtonCommon)`
font-family: Raleway;
font-weight: 600;
font-size: 14px;
line-height: 120%;
width: 140px;
height: 43px;
color: #1d1f22;
background-color: #ffffff;
border: 1px solid #1d1f22;
cursor: pointer;
@media only screen and (max-width:480px){
  width:100px;
 }
`;

export const CheckOutButton = styled(ButtonCommon)`
  background-color: #52d67a;
  color: #fff;
  height: 43px;
  border: none;
  @media only screen and (max-width:480px){
    width:100px;
    padding:5px;
   }
`;

export const SLink = styled(Link)`
  text-decoration: none;
`;

export const AttributesContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: attrs;
  margin: 8px 0;
`;

export const AttributeGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const AttributeGroupName = styled.span`
  display: none;
`;

export const AttrButton = styled.button`
  background-color: ${(props) => !props.inStock || (!props.active && "#fff")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ""};
  border: 2px solid ${(props) => (props.active ? "green" : "gray")};
  color: ${(props) => (props.active ? "green" : "gray")};

  min-width: 1.6vw;
  height: 24px;
  margin: 0 8px 4px 0;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  line-height: 22.4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemCount = styled.span`
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: right;
`;

export const NameAndPrice = styled.div`
  grid-area: name;
  width: 9vw;
  margin: 0 1.2vw 30px 0;
  padding: 0;
  align-items: start;
`;

export const ImageContainer = styled.div`
  grid-area: img;
  margin-left: 0.6vw;
  width: 105px;
  height: 137px;
`;

export const ItemName = styled.span`
  margin-bottom: 5px;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: left;
  color: #1d1f22;
  &:hover {
    color: #52d67a;
  }
`;

export const ItemNameLink = styled(Link)`
  text-decoration: none;
`;

export const ItemNumbers = styled.span`
  display: block;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: right;
`;

export const ItemPrice = styled(ItemNumbers)`
  text-align: left;
  margin: 0;
  text-decoration: none;
  decoration: none;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 110%;
  float: right;
  grid-area: img;
`;

export const Actions = styled.div`
  grid-area: actions;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 137px;
`;

export const CountControl = styled.button`
  background-color: #ffffff;
  font-weight: 400;
  width: 24px;
  height: 24px;
  border: 1px solid #1d1f22;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  width: 20vw;
  justify-content: space-between;
  margin: 43px 0 35px 0;
  @media only screen and (max-width:480px){
    width:10vw;
    margin:30px 0 30px 0;
    flex-direction:row;
   }
`;

export const TotalPriceTotal = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  @media only screen and (max-width:480px){
  
   }
`;

export const TotalPriceCost = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 25.6px;
  @media only screen and (max-width:480px){
  margin-left:50px;
  margin-bottom:10px;
  }
`;

export const Overlay = styled.div`
  background: #39374838;
  width: 100%;
  height: 100%;
  position: fixed;
  top: ${(props) => (props.scroll <= 80 ? 80 - props.scroll : "0")}px;
  left: 0;
  z-index: 6;
`;

export const ProductName = styled.h1`
  &::first-line {
    font-weight: 600;
  }
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  margin-bottom: 43px;
`;

export const ProductPrice = styled.span`
  display: block;
  width: auto;
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  margin: 10px 0 20px 0;
  height: 46px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
 export const Wrap = styled.div`
 height: 540px;
  overflow-y: auto;
 
 `