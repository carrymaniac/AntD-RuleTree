import Guide from '@/components/Guide';
import RuleTree from '@/components/RuleTree/RuleTree';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <RuleTree displayName={'Ant Design'}></RuleTree>
      </div>
    </PageContainer>
  );
};

export default HomePage;
