import React from 'react';
import {Select,Typography,Row,Col,Avatar,Card} from 'antd'; 
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { Link } from 'react-router-dom';
const {Text,Title} = Typography;
const {Option} = Select;

const News = () => {
  const {data} = useGetCryptoNewsQuery();
  const cryptoNews = data;
  console.log(cryptoNews);
  return (
    <Row gutter = {[24,24]} className = "news-card-container">
      {cryptoNews?.map(name =>
       <Col xs={24} sm={12} lg={8} key={name}>
        <Link href = {name.url}>
          <Card hoverable className = "news-card">
                <div className = "news-image-container">
                  <Title className = "news-title" level = {4}>{name.title}</Title>
                </div>
                <div>
                  {name.description}
                </div>
                <div>
                  {name.date}
                </div>
          </Card>
        </Link>
       </Col>
      )};
    </Row>
  )
}

export default News