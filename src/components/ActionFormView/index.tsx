import { Form, Input, Select } from 'antd';
import React, { ReactElement, useState } from 'react';
import { useDrop } from 'react-dnd';




const getActionFormItem = (ItemData:Record<string,any>):ReactElement => {
  console.log(ItemData);
   const {type, name, label, componentProps} = ItemData;
   switch (type) {
    case "Input":
      return  <Form.Item label={label} name={name}>
          <Input></Input>
        </Form.Item>
    case "Select":
      return <Form.Item label={label} name={name}>
        <Select {...componentProps}>

        </Select>
      </Form.Item>
    default:
      return <></>
   }
}
const testItem = <div>23333</div>
const ActionFormView: React.FC = () => {
  const [renderItem, setRenderItem] = useState<ReactElement[]>([testItem]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'ActionFormItem',
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    drop: (item, monitor) => {
      const newItem = getActionFormItem(item as Record<string,string>);
      setRenderItem(pre => [...pre, newItem]);
    },
  }));


  return (
    <div
      ref={drop}
      role={'Dustbin'}
      style={{
        backgroundColor: isOver ? 'red' : 'white',
        border: '3px red solid',
        width: '100%',
      }}
    >
      {renderItem.map(item => {
        return item;
      })}
    </div>
  );
};

export default ActionFormView;
