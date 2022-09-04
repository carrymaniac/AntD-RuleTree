import { Form, Select, Space } from 'antd';
import Input from 'rc-input';
import React, { ReactElement } from 'react';
import { useDrag } from 'react-dnd';

const DragItem: React.FC<DragItemPropType> = ({
  children: formItem,
  itemData,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: 'ActionFormItem',
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    item: { ...itemData },
  }));
  return <div ref={drag}>{formItem}</div>;
};

const ActionFormItemPool: React.FC = () => {
  return (
    <div style={{ border: '3px black solid' }}>
      <Space direction="vertical">
        <DragItem itemData={{ name: 'Remark', type: 'Input', label: 'remark' }}>
          <Form.Item label="Remark">
            <Input></Input>
          </Form.Item>
        </DragItem>

        <DragItem
          itemData={{
            name: 'Result',
            label: 'Result',
            type: 'Select',
            componentProps: { options: [{ label: 'AAA', value: 'aaa' }] },
          }}
        >
          <Form.Item name={'Result'}
            label='Result'>
            <Select options={[{ label: 'AAA', value: 'aaa' }]} />
          </Form.Item>
        </DragItem>
      </Space>
    </div>
  );
};

type DragItemPropType = {
  children: ReactElement;
  itemData: Record<string, any>;
};

export default ActionFormItemPool;
