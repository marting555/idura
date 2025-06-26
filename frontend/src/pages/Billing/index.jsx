import { Typography } from 'antd';
import useLanguage from '@/locale/useLanguage';

export default function Billing() {
  const translate = useLanguage();
  const { Title, Paragraph } = Typography;

  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>{translate('billing')}</Title>
      <Paragraph>
        {translate('connect_to_tax_service')}
      </Paragraph>
    </div>
  );
}
