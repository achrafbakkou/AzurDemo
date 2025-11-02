import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/Whyus";
// import Travels from "../components/Travels";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

import { CommentOutlined, RobotOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs/>
      <Cards />
      {/* <Travels /> */}
      <Footer />

    <FloatButton.Group trigger="hover" type="primary" style={{ insetInlineEnd: 24 }} icon={<CommentOutlined />}>
      <FloatButton icon={<RobotOutlined />} />
      <FloatButton icon={<WhatsAppOutlined />} />
    </FloatButton.Group>
  </>
);

}

export default Home;