const Card = ({ item }) => {
  return (
    <div className='cart'>
      <div className='img'>
        <img src={item.image} />
      </div>
      <div className='cart__details'>
        <div className='top'>
          <h3>{item.title}</h3>

          <p>
            {item.price} x <span className='p'>{item.quantity}</span>
          </p>
        </div>
        <p>{item.title}</p>
        <p className='des'>{item.description}</p>
      </div>
    </div>
  );
};

export default Card;
