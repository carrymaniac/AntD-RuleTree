import { PageContainer } from '@ant-design/pro-components';
import { Space } from 'antd';
import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const DragItem: React.FC<{ type: string }> = ({ type }) => {
  const itemInfo = { storyNumber: 'ST1002', storyType: 'business' };
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'storyCard',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    item: { ...itemInfo },
  }));

  return (
    <div
      style={{
        border: '1px solid black',
        backgroundColor: isDragging ? 'red' : 'white',
        width: 100,
        height: 100,
      }}
      ref={drag}
    >
      {`[${itemInfo.storyType}] ${itemInfo.storyNumber}`}
    </div>
  );
};

const DropItem: React.FC = () => {
  const [storyList, setStoryList] = useState<Record<string,string>[]>([]);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'storyCard',
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    drop: (item, monitor) => {
      // call back when you drop
      setStoryList(preList => [...preList, item as Record<string,string>]);
    },
  }));
  const getStatus = () => {
    if (!isOver) {
      return 'white';
    }
    if (canDrop) {
      return 'green';
    }
  };
  return (
    <div
      style={{
        height: 300,
        border: '1px solid blue',
        marginTop: 32,
        backgroundColor: getStatus(),
      }}
      ref={drop}
    >
      {storyList.map((story) => (
        <div key={story.storyNumber}>
          {`[${story.storyType}]${story.storyNumber}`}
        </div>
      ))}
    </div>
  );
};

const Demo1: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <PageContainer ghost>
        <Space>
            <DragItem type="box" />
            <DragItem type="other" />
        </Space>
        <DropItem />
      </PageContainer>
    </DndProvider>
  );
};

export default Demo1;
