import React from 'react';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;
const Card1 = ({product}) => {



    return (
        <div className=' sm:col-span-3 lg:col-span-3 p-[5px] ' >
        <div >
         
        <Card
    hoverable
    style={{ width: '100%' }}
    cover={<img alt="example" src={product.image1} />}
  >


{/* ------info----- */}


<div className='info'>
    




</div>


  </Card>


        </div>
      </div>
    );
}

export default Card1;
