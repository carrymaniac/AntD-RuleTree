import ActionFormItemPool from '@/components/ActionFormItemPool';
import ActionFormView from '@/components/ActionFormView';
import { PageContainer } from '@ant-design/pro-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './index.less';

const HomePage: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
    <PageContainer ghost>
      <div className={styles.container}>
        <ActionFormItemPool></ActionFormItemPool>
        <ActionFormView></ActionFormView>
      </div>
    </PageContainer>
    </DndProvider>
  );
};

export default HomePage;
