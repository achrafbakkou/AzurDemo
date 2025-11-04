import Hero from "../components/Hero/Hero";
import Services from "../components/Body/Services";
import WhyUs from "../components/Whyus/Whyus";
import Footer from "../components/Footer/Footer";
import Cards from "../components/Cards/Cards";

import { CommentOutlined, RobotOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs/>
      <Cards />
      <Footer />
    <FloatButton.Group trigger="hover" type="primary" style={{ insetInlineEnd: 24 }} icon={<CommentOutlined />}>
      <FloatButton icon={<RobotOutlined />} />
      <FloatButton icon={<WhatsAppOutlined />} />
    </FloatButton.Group>
  </>
);

}

export default Home;