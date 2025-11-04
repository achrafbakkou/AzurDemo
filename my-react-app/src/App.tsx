import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Tabs/Home";
import { CommentOutlined, RobotOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
function App() {
  return (
    <>
      <Navbar />
      <Home />
    {/* <PromoTabs />
      <ServiceTabs />
      <TranTabs />
      <AboutUsTabs/>
      <ContactTabss />
*/}

    <FloatButton.Group trigger="hover" type="primary" style={{ insetInlineEnd: 24 }} icon={<CommentOutlined />}>
      <FloatButton icon={<RobotOutlined />} />
      <FloatButton icon={<WhatsAppOutlined />} />
    </FloatButton.Group>
  </>
);

}

export default App;