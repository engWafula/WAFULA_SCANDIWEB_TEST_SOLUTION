import React, { PureComponent } from "react";
import Navbar from "../header/Navbar";
import { connect } from "react-redux";
import Attributes from "../attributes/Attributes.js";
import { removeFromCart, addToCart, changeAttribute } from "../../Redux/actions";
import TotalPrice from "./cart-overlay/modal/TotalPrice";
import {
  AttributeGroup,
  AttributeGroupName,
  AttributesContainer,
  AttributeButton,
  ProductPrice,
  ProductBrand
 
} from "../general-styles/styles";
import {
  CartItemActionsContainer,
  CartItemContainer,
  CartItemName,
  ItemNameLink,
  CartCountButton,
  Title,
  CartContainer,
  CartItemDetailsContainer,
  Details,
  Total,
  Tax,
  Order,
  Quantity
} from "./cart-styles";
import CartGallery from "./CartGallery";

class CartDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      item:{}
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
    this.saveAttribute = this.saveAttribute.bind(this);
  }

  componentDidMount() {
    this.setState({ item: this.props.cart });
  }
  componentDidMount() {
    const { cart } = this.props;
    const item = cart.find((item) => item);
    this.setState({ item });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cart !== this.props.cart) {
      this.setState({ item: this.props.cart });
    }
  }

  handleRemove({ item }) {
    const { remove } = this.props;
    remove(item);
  }

  handleIncrease({ item }) {
    const { send } = this.props;
    send(item);
  }

  saveAttribute(attr) {
    const { attr: attribute, itemID } = attr;
    const { item } = this.state;
    this.props.change(attribute, item[itemID]);
  }

  getTotalPrice(cart) {
    const { currency } = this.props;
    const totalPrice = cart.reduce((total, curr) => {
      const price = curr.item.prices[currency].amount * curr.quantity;
      return (total += price);
    }, 0);
    return Math.round(totalPrice * 100) / 100;
  }

  totalItemCount(cart) {
    return Object.values(cart).reduce((total, curr) => {
      total += curr.quantity;
      return total;
    }, 0);
  }

  render() {
    const { cart,currency,totalPrice } = this.props;
    const totalItems = this.totalItemCount(cart);
    const total = this.getTotalPrice(cart);
    const { item } = this.state;
    return (
      <>
        <Navbar />
        <CartContainer>
          <Title>CART</Title>
          {this.props.cart &&
            this.props.cart.map((item, id) => (
              <>
                <div key={id}>
                  <CartItemContainer >
                    <CartItemDetailsContainer>
                      <ItemNameLink to={`/product/${item.item.id}`}>
                      <ProductBrand>{item.item.brand}</ProductBrand>
                        <CartItemName>{item.item.name}</CartItemName>
                      </ItemNameLink>
                      <ProductPrice>
                        {item.item.prices[currency].currency.symbol} {item.item.prices[currency].amount}</ProductPrice>
                      <Attributes
                        item={item.item}
                        Container={AttributesContainer}
                        AttLabel={AttributeGroupName}
                        LabelGroup={AttributeGroup}
                        chosenAttributes={item.savedAttribute}
                        Button={AttributeButton}
                        handleClick={this.saveAttribute}
                        itemID={id}
                      />
                    </CartItemDetailsContainer>
                    <CartItemActionsContainer>
                      <CartCountButton
                        value={item}
                        onClick={() => this.handleIncrease({ item })}
                      >
                        +
                      </CartCountButton>
                      <h3>{item.quantity}</h3>
                      <CartCountButton
                        value={item}
                        onClick={() => this.handleRemove({ item })}
                      >
                        -
                      </CartCountButton>
                    </CartItemActionsContainer>

                    <CartGallery images={item.item.gallery} />
                  </CartItemContainer>
              
                </div>
            
              </>
        
            ))}
                <Details>
                {item !== undefined && item.item && (<Tax>Tax 21%: {item.item.prices[currency].currency.symbol} 42.00</Tax>)}
                    <Quantity>Quantity: {totalItems}</Quantity>
                    {item !== undefined && item.item && ( 
                    <Total>Total:              {item.item.prices[currency].currency.symbol} {Math.round(total * 100) / 100}  </Total>)}
                    <Order>Order</Order>
                  </Details>
        </CartContainer>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  currency: state.cart.currency,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (state) => dispatch(removeFromCart(state)),
  send: (state) => dispatch(addToCart(state)),
  change: (attr, id) => dispatch(changeAttribute(attr, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
